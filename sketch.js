const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var sun,earth;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
 
 sun=createSprite(400,200,20,20);
 sun.setCollider("circle",0,0,20);
 earth=createSprite(500,200,20,20);
 earth.setCollider("circle",0,20,20);
 mars=createSprite(600,200,20,20);
 mars.setCollider("circle",0,20,20);
 jupiter=createSprite(700,200,20,20);
 jupiter.setCollider("circle",0,20,20);
   
}

function draw() {
  background(0);  
  Engine.update(engine);
  
 if(frameCount %150 === 0 &&frameCount<1000){
 sun.width=sun.width+10;
 sun.height=sun.heigh+10;

 }

 if(frameCount %1000 === 0  ){
 sun.width=40;
 sun.height=40;

 }
console.log(earth.velocityY);
 planetMove();
 drawSprites();
}

function planetMove (){
earth.velocityY=10;
jupiter.velocityY=10;
mars.velocityY=10;
//down
if(earth.y===300){
  earth.velocityY=0;
  earth.velocityX=-10;
}

if(mars.y===340){
  mars.velocityY=0;
 mars.velocityX=-10;
}

if(jupiter.y===380){
  jupiter.velocityY=0;
  jupiter.velocityX=-10;
}
//left
if (earth.x===300){
  earth.velocityX=0;
  earth.velocityY=-10;
}

if(mars.x===200){
 mars.velocityX=0;
 mars.velocityY=-10;
}

if(jupiter.x===100){
  jupiter.velocityX=0;
  jupiter.velocityY=-10;
}
//up
if(earth.y===100){
  earth.velocityY=0;
  earth.velocityX=10;
}

if(mars.y===60){
  mars.velocityY=0;
 mars.velocityX=10;
}

if(jupiter.y===20){
  jupiter.velocityY=0;
  jupiter.velocityX=10;
}

//right
if (earth.x===500 && earth.y===100){
  earth.velocityX=0;
  earth.velocityY=10;
}

if(mars.x===600 &&  mars.y===60 ){
 mars.velocityX=0;
 mars.velocityY=10;
}

if(jupiter.x===700 &&  jupiter.y===20){
  jupiter.velocityX=0;
  jupiter.velocityY=10;
}





}







