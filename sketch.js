
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1, bob2, bob3, bob4, bob5, roofObj,rope1;

function preload()
{
	
}

function setup() {
	createCanvas(400, 700);


	engine = Engine.create();
	world = engine.world;
    
  rope1 = new rope(bob1,roofObj,-bob.Diameter*2,0);
   roofObj = new roof(200,50,400,20);
   bob1 = new bob(70,250,50);
	 bob2 = new bob(120,250,50);
	 bob3 = new bob(170,250,50);
	 bob4 = new bob(220,250,50);
	 bob5 = new bob(270,250,50);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roofObj.display();
  rope1.display();
  drawSprites();
 
}



