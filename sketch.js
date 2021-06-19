const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint;
var engine,world;
var bg1,man1;
function preload() {
//preload the images here
bg1 = loadImage("GamingBackground.png")
}

function setup() {
  var canvas = createCanvas(2000, 1100);
  engine = Engine.create();
  world = engine.world;
  man1 = new man(300,600,400,300);
  constraint1 = new rope(man1.body,{x:300,y:400})
  ground = new bg(600,600,1200,10)
  block1 = new blocks(800,500);
  block2 = new blocks(800,490)
  block3 = new blocks(800,480)
  block4 = new blocks(800,470)
  block = new blocks(800,460)
  block6 = new blocks(800,450)

  block12 = new blocks(1000,500);
  block22 = new blocks(1000,490)
  block32 = new blocks(1000,480)
  block42 = new blocks(1000,470)
  block52 = new blocks(1000,460)
  block62 = new blocks(1000,450)
  
  monster1 = new monster(1100,400,150,150)




  // create sprites here

}

function draw() {
  background("skyblue");
  Engine.update(engine);
  constraint1.display()
  fill("white")
  ground.display()
  man1.display()
  fill("darkred")
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block.display()
  block6.display()
  block12.display()
  block22.display()
  block32.display()
  block42.display()
  block52.display()
  block62.display()
  monster1.display()
  if(monster1.body.position.x>1120){
    textSize(30)
    textFont("century gothic")
    text("You won!!",500,300)
  }
}

function mouseDragged(){
  Matter.Body.setPosition(man1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  constraint1.detach()
} 