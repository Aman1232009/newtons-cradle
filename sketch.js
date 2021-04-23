
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.constraint
var bob,bob1,bob2,bob3,bob4;
var bobHolder;
var rope;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	bob = new Bob(300,450,40)
	bob1 = new Bob(350,450,40)
	bob2 = new Bob(400,450,40)
	bob3 = new Bob(450,450,40)
	bob4 = new Bob(500,450,40)
	bobHolder = new BobHolder(400,200,270,20)
	rope1=new Rope (bob.body,bobHolder.body,2,0);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bobHolder.display();
  slingshot.display(); 
  drawSprites();
 
}



