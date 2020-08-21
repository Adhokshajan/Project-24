
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,350,1200,20);
	ball1 = new Ball(100,200,50,50);
	box1 = new Box(700,325,10,100);
	box2 = new Box(900,325,10,100);
	box3 = new Box(775,325,200,10)
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  Keypressed();

  
  
  drawSprites();
 
}

function Keypressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85})
	  }
}



