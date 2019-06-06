var scene = new THREE.Scene();
scene.background = new THREE.Color( 0xffffff );
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.z = 15;
var renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true
});
// renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.domElement.id = 'canv';
var charge = 0;
document.getElementById("playground").appendChild( renderer.domElement );
document.addEventListener( 'mousedown', onDocumentMouseDown, false );

var controls = new THREE.OrbitControls(camera, renderer.domElement);

var dimensions = 8;
var cgeometry;
var charge_material;

var cgeometry = new THREE.BoxGeometry(dimensions, dimensions, dimensions);
var wireframe = new THREE.EdgesGeometry(cgeometry);
var cwire = new THREE.LineSegments(wireframe, new THREE.LineBasicMaterial({
  // depthText: false,
  opacity: 1,
  transparent: true,
  color: 0xfada5e,
}));
// cwire.name = 'MyObj_s';
scene.add(cwire);

// arrows
var arrows = [];
for (let x = 0; x < dimensions + 1; x+=2) {
  for (let y = 0; y < dimensions + 1; y+=2) {
    for (let z = 0; z < dimensions + 1; z+=2) {
      var direction = new THREE.Vector3(THREE.Math.randFloatSpread(2), THREE.Math.randFloatSpread(2), THREE.Math.randFloatSpread(2)).normalize();
      var ori = new THREE.Vector3(x - dimensions/2, y - dimensions/2, z - dimensions/2);
      var arrow = new THREE.ArrowHelper(direction, ori, 1,  0x800080, 0.10, 0.2, 0.02);
      arrows.push(arrow);
      scene.add(arrow);
    }
  }
}
console.log(arrows);

// charges
var charges = [];
chargePositive.addEventListener("click", function() {
  charge = 1;
});
chargeNegative.addEventListener("click", function() {
  charge = -1;
  console.log(clicked)
});
//arrange.addEventListener("click", arrangeArrows);


function onDocumentMouseDown( event ) {

  // event.preventDefault();

  if (charge != 0) {

    cgeometry = new THREE.SphereGeometry(0.25, 16, 12);
    charge_material = new THREE.MeshBasicMaterial({
      color: charge == 1 ? 0xff0000 : 0x0000ff
    });

    charge = new THREE.Mesh(cgeometry, charge_material);

    charge.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  	charge.y = - ( event.clientY / window.innerHeight ) * 2 + 1
    // charge.z = 0.5;

    function getZ(){
      var rayCaster = new THREE.Raycaster();
      var mousePosition = new THREE.Vector2();
      rayCaster.setFromCamera(mousePosition, camera);
      // console.log('hi')
      // console.log(scene.getObjectByName('MyObj_s').children);
      var intersects = rayCaster.intersectObjects(scene.children, true);

      if (intersects.length > 0){
        return intersects[0].point;
      }
            }

    charge.z = getZ().z;
    console.log(charge.z)
    // console.log(charge.z)
    // console.log(charge.x)
    // mouse.unproject( camera );
    // addPoint( mouse );
    // var raycaster = new THREE.Raycaster();
    // var mouse = new THREE.Vector2();
    // raycaster.setFromCamera( mouse.clone(), camera );
    // var objects = raycaster.intersectObjects(scene.children);
    // console.log(objects)
    setCharge(charge)
    charge = 0
  }

}



function setCharge(val) {
  charge.position.set(charge.x, charge.y, charge.z);
  charge.userData.charge = val;
  charges.push(charge);
  scene.add(charge);
  arrangeArrows();
}

var direction = new THREE.Vector3();
var normal = new THREE.Vector3();
var force = new THREE.Vector3();
var directions = [];
var resultant = new THREE.Vector3();

function arrangeArrows() {
  arrows.forEach((arrow) => {
    directions = [];
    charges.forEach((charge, index) => {
      direction.subVectors(arrow.position, charge.position)
      normal.copy(direction).normalize();
      directions.push({
        dir: (charge.userData.charge == -1 ? normal.negate() : normal).clone(),
        force: 1 / Math.pow(force.subVectors(arrow.position, charge.position).length(), 2)
      });
    });
    resultant.set(0, 0, 0);
    directions.forEach((dir) => {
      resultant.addScaledVector(dir.dir, dir.force);
    })
    arrow.setDirection(resultant.normalize());
  });
};

var clock = new THREE.Clock();

var axes = new THREE.AxesHelper( dimensions );
var colors = axes.geometry.attributes.color;

colors.setXYZ( 0, 0, 0, 0 ); // index, R, G, B
colors.setXYZ( 1, 0, 0, 0 ); // red
colors.setXYZ( 2, 0, 0, 0 );
colors.setXYZ( 3, 0, 0, 0 ); // green
colors.setXYZ( 4, 0, 0, 0 );
colors.setXYZ( 5, 0, 0, 0 ); // blue

var pos = axes.geometry.attributes.position;

pos.setXYZ( 0, dimensions, -dimensions/2, -dimensions/2 );
pos.setXYZ( 1, -dimensions/2, -dimensions/2, -dimensions/2 );
pos.setXYZ( 2, -dimensions/2, dimensions, -dimensions/2 );
pos.setXYZ( 3, -dimensions/2, -dimensions/2, -dimensions/2 );
pos.setXYZ( 4, -dimensions/2, -dimensions/2, dimensions );
pos.setXYZ( 5, -dimensions/2, -dimensions/2, -dimensions/2 );

// var  textGeo = new THREE.TextGeometry('Y', {
//      size: 5,
//      height: 2,
//      curveSegments: 6,
//      style: "normal"
// });
//
// var  color = new THREE.Color();
// color.setRGB(255, 250, 250);
// var  textMaterial = new THREE.MeshBasicMaterial({ color: color });
// var  text = new THREE.Mesh(textGeo , textMaterial);
//
// text.position.x = pos.getX( 0 )
// text.position.y = pos.getY( 0 )
// text.position.z = pos.getZ( 0 )
// text.rotation = camera.rotation;
// scene.add(text);
//
scene.add( axes );

render();
function render() {
  requestAnimationFrame(render);
  //scene.rotation.y += clock.getDelta() * 0.1;
  renderer.render(scene, camera);
}
