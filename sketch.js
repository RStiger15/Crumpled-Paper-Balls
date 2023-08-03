
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var engine;
var world;
function preload() {

}

function setup() {
	createCanvas(windowWidth, windowHeight);

	var ball_options = {
		isStatic: false,
		restitution: 0.1,
		friction: 1 ,
		density: 1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2, 670, width, 20)
	console.log(ground)
	ball = Matter.Bodies.circle(50, 660, 20, ball_options)
	World.add(world, ball)

	Engine.run(engine);
	
	leftSide = new Ground(1100, 600, 20, 120)
	rightSide = new Ground(1200, 600, 20, 120)
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 50, y: -70 })
	}
}

function draw() {
	rectMode(CENTER);
	background(0);
	ground.show()
leftSide.show()
rightSide.show()
	drawSprites();
ellipse(ball.position.x,ball.position.y,20,20)


}



