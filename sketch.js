
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, bodies;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var options={
    restitution:1,
    mass: 3
    
  }
  var option2={
    isStatic: true
  }
  bodies= Bodies.circle(400,200,20,options);
  World.add(world,bodies);
  ground= Bodies.rectangle(0,390,800,20, option2);
  World.add(world,ground);
  console.log(bodies);

}

function draw() {
  background(255,5,255);  
  Engine.update(engine);
  ellipse(bodies.position.x,bodies.position.y,40,40);
  rect(ground.position.x,ground.position.y,800,10);
  
  drawSprites();
}