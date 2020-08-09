const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var bin, paper;
var side1, side2, side3;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);

  var options ={
		restitution: 1
	}

  ground = new Ground(600,height,1200,20);
	engine = Engine.create();
  world = engine.world;
  
 //Create the Bodies Here.
	side1 = new Bin();
	side2 = new Bin();
	side3 = new Bin();
  
  paper = new Paper();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(keyPressed(UP_ARROW)){
	  
  }

  ground.display();  
  side1.display();
  side2.display();
  side3.display();
  paper.display();
  drawSprites();
 
};

function keyPressed() {
  if (keyCode === UP_ARROW) {
     // Look at the hints in the document and understand how to make the package body fall only on
     Matter.Body.applyForce(paper.body, paper.body.position,{x:85,y:-85});
  
   }
 }



