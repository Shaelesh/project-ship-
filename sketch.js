var ship , shipm , seaimage , sea
function preload(){
shipm = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaimage = loadImage("sea.png");
}

function setup(){
  createCanvas(1000,500);
  sea = createSprite(500,300);
  sea.addImage("add",seaimage);
  sea.scale = 0.8
  ship = createSprite(500,360,10,10)
  ship.addAnimation("moving",shipm);
  ship.scale = 0.2;
  
}

function draw() {
  background("white");
  sea.velocityX = -2 ; 
  if(sea.x<0){
    sea.x=500
  }
 drawSprites();
}
