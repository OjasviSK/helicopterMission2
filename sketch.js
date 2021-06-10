var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var part1,part2,part3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	var package_options = {
		restitution : 0.5
	}
	packageBody = Bodies.circle(width/2 , 200 , 5 , package_options);
	World.add(world, packageBody);
	
	part1=new Container(300,windowHeight-100,30,100);
	part2=new Container(500,windowHeight-100,30,100);
	part3=new Container(400,windowHeight-65,230,30);
/*	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
*/

  
}


function draw() {
	Engine.update(engine);
 	rectMode(CENTER);
  	background(0);
  	packageSprite.x= packageBody.position.x 
  	packageSprite.y= packageBody.position.y 
	part1.display();
	part2.display();
	part3.display();
  	drawSprites();
 
}

/*function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
  }
}
*/


