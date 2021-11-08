const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var engine,world,ground,left,right,top_wall,ball_options,ball;
var btn1,btn2;
function setup(){
  createCanvas(1500,700);

   engine=Engine.create();
   world=engine.world;

   

   ground=new Ground(750,670,1500,20);
   right=new Ground(1250,620,20,100);
   left=new Ground(1000,620,20,100);
   //top_wall=new Ground(200,10,400,20);
   
   ball_options={
     restitution:0.95
   }
   ball=Bodies.circle(100,200,25,ball_options);
   World.add(world,ball);
   rectMode(CENTER);
   ellipseMode(RADIUS);
   
}

function draw(){
  background(51);
  Engine.update(engine);
   
 
   right.show();
  left.show();
  ground.show();

  ellipse(ball.position.x,ball.position.y,25,25)
}
function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,ball.position,{x:50,y:-50});
    }
}