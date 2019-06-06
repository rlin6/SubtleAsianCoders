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
var clicked = 0;
document.getElementById("playground").appendChild( renderer.domElement );
document.addEventListener( 'mousedown', onDocumentMouseDown, false );

var controls = new THREE.OrbitControls(camera, renderer.domElement);

var dimensions = 8;
var cgeometry;
var charge_material;
var z = dimensions/2;
var cgeometry;
var wireframe;
var cwire;
var arrows;
var d;
var ori;
var arrow;
var counter;
var f = 1.5

function init() {

  cgeometry = new THREE.BoxGeometry(dimensions, dimensions, dimensions);
  wireframe = new THREE.EdgesGeometry(cgeometry);
  cwire = new THREE.LineSegments(wireframe, new THREE.LineBasicMaterial({
    // depthText: false,
    opacity: 1,
    transparent: true,
    color: 0xfada5e,
  }));
  // cwire.name = 'MyObj_s';
  scene.add(cwire);
  // console.log(dimensions)

  arrows = [];
  d=null;
  ori=null;
  arrow=null;
  counter = 0;
  // arrows
  for (let x = 0; x < dimensions + 1; x+=f) {
    for (let y = 0; y < dimensions + 1; y+=f) {
      for (let z = 0; z < dimensions + 1; z+=f) {
        // var d = new THREE.Vector3(THREE.Math.randFloatSpread(2), THREE.Math.randFloatSpread(2), THREE.Math.randFloatSpread(2)).normalize();
        d = new THREE.Vector3(0, 0, 0).normalize();
        ori = new THREE.Vector3(x - dimensions/2, y - dimensions/2, z - dimensions/2);
        arrow = new THREE.ArrowHelper(d, ori, 1,  0x800080, 0.10, 0.2, 0.02);
        arrows.push(arrow);
        scene.add(arrow);
        // console.log(dimensions)
        // console.log(Math.floor(Math.pow(((dimensions+1) / f), 3)))
        counter+=1;
        if (counter > Math.floor(Math.pow(((dimensions+1) / f), 3))) {
          break;
        };
      };
    };
  };
};

init();

function clearThree(scene){
  while(scene.children.length > 0){
    clearThree(scene.children[0])
    scene.remove(scene.children[0]);
  }
  if(scene.geometry) scene.geometry.dispose()
  if(scene.material) scene.material.dispose()
  if(scene.texture) scene.texture.dispose()
}

function changeDim() {
  try {
    dim = parseInt(document.getElementById("dim").value);
    if (!isNaN(dim) && dim > 0) {
      console.log('im')
      dimensions = dim;
      clearThree(scene);
      init();
    }
}
  catch(error) {
    console.log(error)
  }
}


// charges
var charges = [];
chargePositive.addEventListener("click", function() {
  clicked = 1;
});
chargeNegative.addEventListener("click", function() {
  clicked = -1;
});
//arrange.addEventListener("click", arrangeArrows);

function changeZ() {
  try {
    t = parseInt(document.getElementById("zval").value);
    if (t!=null && t>=0 && t<=dimensions) {
      z = t;
      console.log('changed')
      console.log(z)
    }
}
  catch(error) {
    console.log(error)
  }
}


function onDocumentMouseDown( event ) {

  // event.preventDefault();

  if (clicked != 0) {

    cgeometry = new THREE.SphereGeometry(0.1, 16, 16);
    charge_material = new THREE.MeshBasicMaterial({
      color: clicked == 1 ? 0xba0000 : 0x4422ee
    });

    charge = new THREE.Mesh(cgeometry, charge_material);

    charge.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  	charge.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    charge.z = z-dimensions/2;
    // console.log(charge.z)
    // charge.z = 0.5;

    // function getZ(){
    //   var rayCaster = new THREE.Raycaster();
    //   var mousePosition = new THREE.Vector2();
    //   rayCaster.setFromCamera(mousePosition, camera);
    //   // console.log('hi')
    //   // console.log(scene.getObjectByName('MyObj_s').children);
    //   var intersects = rayCaster.intersectObjects(scene.children, true);
    //
    //   if (intersects.length > 0){
    //     return intersects[0].point;
    //   }
    //         }
    // console.log(charge.z);
    // console.log(charge.z)
    // console.log(charge.x)
    // mouse.unproject( camera );
    // addPoint( mouse );
    // var raycaster = new THREE.Raycaster();
    // var mouse = new THREE.Vector2();
    // raycaster.setFromCamera( mouse.clone(), camera );
    // var objects = raycaster.intersectObjects(scene.children);
    // console.log(objects)
    setCharge(clicked);
    clicked = 0;
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

// var loader = new THREE.FontLoader();
// var text_geo;
//
// loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {
//
// 	text_geo = new THREE.TextGeometry( 'X', {
// 		font: font,
//     size: 16,
//     height: 2,
//     curveSegments: 6,
//     style: "normal"
// 	} );
// } );
//
// var  color = new THREE.Color();
// color.setRGB(255, 250, 250);
// var  textMaterial = new THREE.MeshBasicMaterial({ color: color });
// var  text = new THREE.Mesh(text_geo , textMaterial);
//
// // console.log( axes.geometry.attributes.position)
//
// // text.position.x = axes.geometry.attributes.position[0];
// // text.position.y = axes.geometry.attributes.position[1];
// // text.position.z = axes.geometry.attributes.position[2];
// text.position.x = -4;
// text.position.y = -4;
// text.position.z = -4;
//
// text.rotation = camera.rotation;
//
// scene.add( text );
scene.add( axes );


render();
function render() {
  requestAnimationFrame(render);
  //scene.rotation.y += clock.getDelta() * 0.1;
  renderer.render(scene, camera);
}
