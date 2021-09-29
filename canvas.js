//if big cycles --> store only the 3,4 latest with
//radious larger than 10

//do this trick with ctrl-press

let canvas1 = document.querySelector('#ctx1');
let canvas2 = document.querySelector('#ctx2');
canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;
canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;

let c1 = canvas1.getContext('2d');
let c2 = canvas2.getContext('2d');

let mouse = {x:undefined,y:undefined,
     updn:false,clk:undefined}


window.addEventListener('mousedown',(e)=>{
    paint(e);
    mouse.updn=1;  
});
window.addEventListener('mouseup',function(e){
    mouse.updn=0;  
});

let dx = 1;
let dy = 1;
let dxy = 1;
window.addEventListener("mousemove",(e)=>{
    if(mouse.updn)
    paint(e);  
    // console.log(e.movementX)
    dx = e.movementX;
    dy = e.movementY;
    dxy=Math.abs(dx)+Math.abs(dy);
})

function paint(e){
    mouse.x=e.x;
    mouse.y=e.y;
}

function rndColor(){
    
    let rnd1 = Math.floor(Math.random()*255);
    let rnd2 = Math.floor(Math.random()*255);
    let rnd3 = Math.floor(Math.random()*250);
    let rnd = `rgb(${rnd1},0, 0)`;
    return rnd;
}

function animate(){
    requestAnimationFrame(animate);
    let radious = dxy/2;

    c1.beginPath();
    c1.arc(mouse.x,mouse.y, radious, 0, Math.PI*2, false);
    c1.fillStyle=rndColor();
    c1.fillStroke='rgb(0,0,0)';
    c1.fill();
    c1.stroke();


 
    c2.beginPath();
    c2.clearRect(0,0, innerWidth,innerHeight)
    c2.arc(mouse.x,mouse.y, radious, 0, Math.PI*2, false); //1.5*Math.random()
    c2.fillStyle='rgb(100,0,0)';
    c2.fillStroke='rgb(0,0,0)';
    c2.fill();
    c2.stroke();  
    
}
animate();

