
var trex ,trex_running;
var ground
var groundImage
var magicGround
function preload(){
trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")  
groundImage=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,300)
  
  //create a trex sprite
 trex=createSprite(50,180,20,50)
 trex.addAnimation("running",trex_running)
 trex.scale=0.5
 ground=createSprite(200,180,400,20)
 ground.addImage("ground",groundImage)
 magicGround=createSprite(200,190,400,10)
 magicGround.visible=false
}

function draw(){
  background("white")
  if(keyDown("space")){
trex.velocityY=-8
  }
  if(ground.x<0){
    ground.x=ground.width/2
  }
  trex.velocityY=trex.velocityY+0.8
  trex.collide(magicGround)
  ground.velocityX=-2
  drawSprites()

}
