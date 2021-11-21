const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var backgroundImg;
var snow=[];
var r;
var engine,world;
function preload(){
  backgroundImg=loadImage("snow1.jpg");

}
function setup() {
   engine=Engine.create();
   world=engine.world;

  createCanvas(800,400);
  
  
}

function draw() {
  Engine.update(engine)
  background(backgroundImg);  
  if (frameCount%30===0){
    snow.push(new Snow(random(0,800),30,30));

  }
  for (var j=0;j<snow.length;j++){
    snow[j].display();
  }

}