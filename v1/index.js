//your javascript code goes here

let width=window.innerWidth;
let height=window.innerHeight;

Datazar.dataset("Prepared Complete Dataset",(data)=>{

    let legend=document.createElement('div');
    legend.id='legend';
    document.getElementsByTagName('body')[0].appendChild(legend);
    legendSvg=d3.select('#legend')
    .append('svg')
    .attr('width',1100)
    .attr('height',100);
    let legendRectWidth=20;
    let legendRecttHeight=20;
    legendSvg.append('rect').attr('x',10).attr('y',0).attr('width',legendRectWidth).attr('height',legendRecttHeight).attr('class','actinide');
    legendSvg.append('text').attr('x',22).attr('y',35).attr('class','legendText').attr('text-anchor','middle').text('Acntinide').attr('font-size','11px');
    //
    legendSvg.append('rect').attr('x',100).attr('y',0).attr('width',legendRectWidth).attr('height',legendRecttHeight).attr('class','lanthanide');
    legendSvg.append('text').attr('x',115).attr('y',35).attr('class','legendText').attr('text-anchor','middle').text('Lanthanide').attr('font-size','11px');
    //
    legendSvg.append('rect').attr('x',200).attr('y',0).attr('width',legendRectWidth).attr('height',legendRecttHeight).attr('class','alkaliMetal');
    legendSvg.append('text').attr('x',212).attr('y',35).attr('class','legendText').attr('text-anchor','middle').text('Alkali Metal').attr('font-size','11px');
    //
    legendSvg.append('rect').attr('x',300).attr('y',0).attr('width',legendRectWidth).attr('height',legendRecttHeight).attr('class','alkaliEarthMetal');
    legendSvg.append('text').attr('x',310).attr('y',35).attr('class','legendText').attr('text-anchor','middle').text('Alkali').attr('font-size','11px');
    legendSvg.append('text').attr('x',310).attr('y',45).attr('class','legendText').attr('text-anchor','middle').text('Earth Metal').attr('font-size','11px');
    //
    legendSvg.append('rect').attr('x',400).attr('y',0).attr('width',legendRectWidth).attr('height',legendRecttHeight).attr('class','transitionMetal');
    legendSvg.append('text').attr('x',410).attr('y',35).attr('class','legendText').attr('text-anchor','middle').text('Transition').attr('font-size','11px');
    legendSvg.append('text').attr('x',410).attr('y',45).attr('class','legendText').attr('text-anchor','middle').text('Metal').attr('font-size','11px');
    //
    legendSvg.append('rect').attr('x',500).attr('y',0).attr('width',legendRectWidth).attr('height',legendRecttHeight).attr('class','diatomicNonmetal');
    legendSvg.append('text').attr('x',510).attr('y',35).attr('class','legendText').attr('text-anchor','middle').text('Diatomic').attr('font-size','11px');
    legendSvg.append('text').attr('x',510).attr('y',45).attr('class','legendText').attr('text-anchor','middle').text('Nonmetal').attr('font-size','11px');
    //
    legendSvg.append('rect').attr('x',600).attr('y',0).attr('width',legendRectWidth).attr('height',legendRecttHeight).attr('class','nobelGas');
    legendSvg.append('text').attr('x',615).attr('y',35).attr('class','legendText').attr('text-anchor','middle').text('Nobel Gas').attr('font-size','11px');
    //
    legendSvg.append('rect').attr('x',700).attr('y',0).attr('width',legendRectWidth).attr('height',legendRecttHeight).attr('class','unknown');
    legendSvg.append('text').attr('x',710).attr('y',35).attr('class','legendText').attr('text-anchor','middle').text('Unknown').attr('font-size','11px');
    //
    legendSvg.append('rect').attr('x',800).attr('y',0).attr('width',legendRectWidth).attr('height',legendRecttHeight).attr('class','polyatomicNonmetal');
    legendSvg.append('text').attr('x',810).attr('y',35).attr('class','legendText').attr('text-anchor','middle').text('Polyatomic').attr('font-size','11px');
    legendSvg.append('text').attr('x',810).attr('y',45).attr('class','legendText').attr('text-anchor','middle').text('Nonmetal').attr('font-size','11px');
    //
    legendSvg.append('rect').attr('x',900).attr('y',0).attr('width',legendRectWidth).attr('height',legendRecttHeight).attr('class','metalloid');
    legendSvg.append('text').attr('x',910).attr('y',35).attr('class','legendText').attr('text-anchor','middle').text('Metalloid').attr('font-size','11px');
    //
    legendSvg.append('rect').attr('x',1000).attr('y',0).attr('width',legendRectWidth).attr('height',legendRecttHeight).attr('class','postTransitionMetal');
    legendSvg.append('text').attr('x',1010).attr('y',35).attr('class','legendText').attr('text-anchor','middle').text('Post').attr('font-size','11px');
    legendSvg.append('text').attr('x',1010).attr('y',45).attr('class','legendText').attr('text-anchor','middle').text('Transition').attr('font-size','11px');
    legendSvg.append('text').attr('x',1010).attr('y',55).attr('class','legendText').attr('text-anchor','middle').text('Metal').attr('font-size','11px');



    var container=document.createElement('div');
    container.id='container';
    document.getElementsByTagName('body')[0].appendChild(container);
    var svg=d3.select('#container').append('svg');
    svg.attr('width',950)
    .attr('height',500)
    .attr('class','main');
    var width=50,height=50;
    var r9=200;
    var r8=200;
    var r7=0;
    var r6=0;
    var r5=0;
    var r4=0;
    var r3=0;
    var r2=0;
    var r1=0;

    for(let i=0;i < 14;i++) {
        let column=i+1;
        let id='r9c'+column;
        svg.append('rect').attr('x',r9).attr('y',450).attr('class','r9').attr('height',height).attr('width',width).attr('id',id);
        r9+=50;
    }
    for(let i=0;i < 14;i++) {
        let column=i+1;
        let id='r8c'+column;
        svg.append('rect').attr('x',r8).attr('y',400).attr('class','r8').attr('height',height).attr('width',width).attr('id',id);
        r8+=50;
    }
    //
    for(let i=0;i < 18;i++) {
        let column=i+1;
        let id='r7c'+column;
        if(i==3) r7+=50;
        svg.append('rect').attr('x',r7).attr('y',330).attr('class',id).attr('height',height).attr('width',width).attr('id',id);
        r7+=50;
    }
    for(let i=0;i < 18;i++) {
        let column=i+1;
        let id='r6c'+column;
        if(i==3) r6+=50;
        svg.append('rect').attr('x',r6).attr('y',280).attr('class',id).attr('height',height).attr('width',width).attr('id',id);
        r6+=50;
    }
    for(let i=0;i < 18;i++) {
        let column=i+1;
        let id='r5c'+column;
        if(i==3) r5+=50;
        svg.append('rect').attr('x',r5).attr('y',230).attr('class',id).attr('height',height).attr('width',width).attr('id',id);
        r5+=50;
    }
    for(let i=0;i < 18;i++) {
        let column=i+1;
        let id='r4c'+column;
        if(i==3) r4+=50;
        svg.append('rect').attr('x',r4).attr('y',180).attr('class',id).attr('height',height).attr('width',width).attr('id',id);
        r4+=50;
    }
    //
    for(let i=0;i < 8;i++) {
        let column=i+1;
        let id='r3c'+column;
        if(i==2) r3+=550;
        svg.append('rect').attr('x',r3).attr('y',130).attr('class',id).attr('height',height).attr('width',width).attr('id',id);
        r3+=50;
    }
    for(let i=0;i < 8;i++) {
        let column=i+1;
        let id='r2c'+column;
        if(i==2) r2+=550;
        svg.append('rect').attr('x',r2).attr('y',80).attr('class',id).attr('height',height).attr('width',width).attr('id',id);
        r2+=50;
    }
    //
    for(let i=0;i < 2;i++) {
        let column=i+1;
        let id='r1c'+column;
        if(i==1) r1+=850;
        svg.append('rect').attr('x',r1).attr('y',30).attr('class',id).attr('height',height).attr('width',width).attr('id',id);
        r1+=50;
    }


    for(let i=0;i < data.length;i++) {
        let box=d3.select('#'+data[i].id);
        let x;
        if(data[i].symbol.length===1) x=parseInt(box.attr("x"))+17;
        if(data[i].symbol.length===2) x=parseInt(box.attr("x"))+15;
        if(data[i].symbol.length===3) x=parseInt(box.attr("x"))+12;
        let y=parseInt(box.attr("y"))+30;
        let id=box.attr("id");
        svg.append('text').attr('x',x).attr('y',y).text(data[i].symbol).attr('class','symbol').attr('font-size','15px').attr("id",id);
    }

    /* ******************************************** */

    let element=document.createElement('div');
    document.getElementsByTagName('body')[0].appendChild(element);
    element.id='element';

    let boxSvg=d3.select('#element').append('svg');
    boxSvg.attr('width',75).attr('height',100);

    let fullName=document.createElement('div');
    element.appendChild(fullName);
    fullName.id='name';

    let blurb=document.createElement('div');
    element.appendChild(blurb);
    blurb.id='blurb';


    document.addEventListener('click',(e)=>{
        for(let i=0;i < data.length;i++) {
            if(data[i].id==e.target.id) {
                original=d3.select('#'+e.target.id);
                boxSvg.append('rect').attr('x',0).attr('y',0).attr('width',75).attr('height',75).attr('class',original.attr('class')+' elementBox').attr('rx',10).attr('ry',10);
                boxSvg.append('text').attr('x',27).attr('y',18).text(data[i].number).attr('class','number').attr('font-size','12px');
                //
                if(data[i].symbol.length===1) boxSvg.append('text').attr('x',27).attr('y',48).text(data[i].symbol).attr('class','symbol').attr('font-size','18px');
                if(data[i].symbol.length===2) boxSvg.append('text').attr('x',23).attr('y',48).text(data[i].symbol).attr('class','symbol').attr('font-size','18px');
                if(data[i].symbol.length===3) boxSvg.append('text').attr('x',20).attr('y',48).text(data[i].symbol).attr('class','symbol').attr('font-size','18px');
                //
                fullName.innerHTML=data[i].name;
                blurb.innerHTML=data[i].blurb;
                break;
            }
        }
    });

    //
    //
});
