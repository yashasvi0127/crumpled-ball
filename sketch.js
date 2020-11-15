const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,engine, world,ball ;
var wall1 , wall2 , wall3 ;


function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);

  
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  wall1 = new DustBin(720, 390, 100, 10);
  wall2 = new DustBin(673,370,10,50);
  wall3 = new DustBin(770,370,10,50);
  paper = new Paper(100, 300, 10);
  
  ground = Bodies.rectangle(width / 2, 400, width, 10,
  {
    isStatic: true
  });
  World.add(world, ground);
}

function draw() {
  
    rectMode(CENTER);
    background(0);
    wall1.display();
    wall2.display();
    wall3.display();
    paper.display();

  
}


function keyPressed(){
  if (keyCode === UP_ARROW ) {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 12,
      y: -13
    });
  }
}
