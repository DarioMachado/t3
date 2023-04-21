var canvas = document.getElementById("MiCanvas");
const context = canvas.getContext("2d");
const jugador = document.getElementById("jugador");
var posx = 300;
var posy = 300;
var size = 10;
var mov=30;






function drawTriangle() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  
    context.fillStyle = "#FFFFFF";
    context.fillRect(0, 0, canvas.width, canvas.height);
  
    
  
    context.beginPath();
    context.moveTo(posx, posy-size);
    context.lineTo(posx+size, posy+size);
    context.lineTo(posx-size, posy +size);
    context.closePath();
  
    // the outline
    context.lineWidth = 10;
    context.strokeStyle = '#000';
    context.stroke();
  
    // the fill color
    context.fillStyle = "#c31313";
    context.fill();
  }

  drawTriangle();

 
  
function redraw(){

    // clear the canvas
    context.clearRect(0,0,canvas.width,canvas.height);

    // redraw one or more things based on their javascript objects
    context.beginPath();
    drawTriangle();
    context.closePath();

    disparar();

}


window.setInterval(redraw, 10); 

var i = 20;
var disparosi;

var disparolugar=posx;





var bala ={
    x:posx,
    y:posy,
};


function disparar(){


    if(bala.y>=0){
    bala.y-=3;
    context.fillRect(bala.x,bala.y,5,5);
    }
    else{
    bala.y=posy;
    bala.x=posx;
    return;
    }
    
   
}


/*
function disparar(){

    if(disparosi=true){
    disparolugar=posx;}

    context.beginPath();
    let disparo = posy;
   
    
    if (i>=500){
    disparosi=false;
    i=20;
    return 0;
   }
    else
    i+=5;

    disparo-=i;
    context.moveTo(disparolugar,disparo-size);
    context.strokeStyle = '#000';
    context.lineTo(disparolugar,disparo);
    context.stroke();
    console.log(i);
}*/









document.addEventListener('keydown', (e) => {
   
    
   
    if (e.code === "ArrowUp"){
        posy-=mov;
        
        
    }
    if (e.code === "ArrowDown"){
        posy+=mov;
      
    }
    if (e.code === "ArrowLeft"){
        posx-=mov;
        
    }
    if (e.code === "ArrowRight"){
        posx+=mov;
        
    }

    if(e.code === "Space"){
       disparar();
        console.log("bang");
       
    }
    
    
  }, false);
  







