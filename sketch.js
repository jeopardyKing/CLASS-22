const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var Aengine;
var Aworld;
var ground;
var ball;


function setup() {
createCanvas(400,400);

// creating my own engine in reference to matter wngine
//adding world to engine
Aengine=Engine.create();
Aworld=Aengine.world;

//declaring property in variable
var Aproperty={
  isStatic:true
}

//creating ground
ground=Bodies.rectangle(200,390,400,20,Aproperty);
World.add(Aworld,ground);

//creating bounce property
var Bproperty={
  restitution:1.0
}

//creating ball body
ball=Bodies.circle(200,100,20,Bproperty);
World.add(Aworld,ball);

console.log(ball);
}

function draw() {

background(0);  

Engine.update(Aengine);

rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);

ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);

}