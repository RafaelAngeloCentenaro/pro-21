var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500,700);
    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:0.8
	}
    ball=Bodies.circle(200,500,25,ball_options)
	World.add(world,ball)
	groundObj=new Ground(width/2,670,width,20);
    leftSide=new Ground(1100,600,20,120);
	rightSide=new Ground(1200,600,20,120);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  leftSide.display();
  rightSide.display();
  drawSprites();
  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,25,25)
  if (keyDown("up")) {
	force1()
  }
}
function force1() {
 Matter.Body.applyForce(ball,{x:0,y:0},{x:0.9,y:-2.0});

}
  


