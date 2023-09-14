let canvas=document.getElementById("my_canvas");
let context=canvas.getContext("2d");

const speed=4;
let position=0;
let movespeed=speed;
let radius=40;

function moveball(){
    if(position + radius > 640){
        movespeed=-speed;

    }
    else if(position - radius < 0){
        movespeed = speed;

    }
    position += movespeed;
}
function drawball(){
    context.clearrec(0,0,640,480);
    context.fillstyle="#62687f";
    context.beginpath();
    context.arc(position,50,radius,0,2*Math.PI);
    context.fill();
}
function animate(){
    moveball();
    drawball();
    window.requestAnimationFrame(animate);
}
window.requestAnimationFrame(animate);
