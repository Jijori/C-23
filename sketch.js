//Create namespace for Engine(const=constant)
const Engine= Matter.Engine;
//Create namespace for World
const World= Matter.World;
//Create namespace for Bodies
const Bodies= Matter.Bodies;
//Create namespace for Body
const Body= Matter.Body;


function setup() {
  createCanvas(400,400);

  //create the engine 
  myEngine = Engine.create();

  //Add world to the engine
  myWorld= myEngine.world;
  
  var ball_options = {
  //restitution means bouncing effect
    restitution: 0.95,
    frictionAir:0.01
  }

  //isStatic means at a fixed position
  var ground_options ={
    isStatic: true
  };
  
  
  //create a ground
  ground= Bodies.rectangle(200,390,400,20,ground_options);
  World.add(myWorld,ground);

  //add to world
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(myWorld,ball);
  
}


function draw() 
{
  background(51);
  Engine.update(myEngine);
  
  //ellipse = circle
  ellipseMode(RADIUS);
  //x position and y position, and radius all in from the memory space in the computer
  ellipse(ball.position.x,ball.position.y,20);

  //write a rectangle function to display ground.
  //rect = rectangle
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

}

