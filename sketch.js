
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var chain;
var box1,box2,box3;


function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(width/2,height/2,600,30);

	bobObject1 = new Bob(200,300,80);
	bobObject2 = new Bob(240,300,80);
	bobObject3 = new Bob(160,300,80);
	bobObject4 = new Bob(280,300,80);
	bobObject5 = new Bob(120,300,80);

	// box1 = new Roof(400,700,1000,50);
	// box2 = new Roof(1,350,50,1000);
	// box3 = new Roof(800,350,50,1000);

	//rope1 = new Rope(ball1.body,roof.body);
	chain = new Chain(bobObject1.body,roof.body,200,500);
	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(255);

  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();	

  chain.display();

  box1.display();
  box2.display();
  box3.display();

  console.log(ball1.x);
  drawSprites();
 
}



