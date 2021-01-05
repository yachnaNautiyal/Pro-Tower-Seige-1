const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world,polyImg,ball,ground1,ground2,SlingShot,block1;

function preload(){

   polyImg=loadImage("polygon.png");

}


function setup(){
createCanvas(2000,1000);
        engine=Engine.create();
        world=engine.world;

    ball=Bodies.circle(50,300,20)
    World.add(world,ball);
    


    ground1=new Ground(700,400,250,10);
    ground2=new Ground(1000,300,250,10);
    SlingShot=new Slingshot(ball,({x:200,y:200}))
    block1=new Block(700,400,20,20);
    


}
function draw(){
background(255);
    imageMode(CENTER);
    image(polyImg,ball.position.x,ball.position.y,30,30);
    ground1.display();
    ground2.display();
    SlingShot.display();
    block1.display();
    



}
