var ground,groundImage;
var trex ,trex_running,edges;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
  groundImage = loadImage("ground2.png");

}

function setup(){
  createCanvas(600,200);
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running",trex_running);
  
  ground = createSprite(200,180,400,20); 
  ground.addImage("image",groundImage);
  edges = createEdgeSprites();
  
  trex.scale = 0.5;
  trex.x = 50;
  
  
 
}

function draw(){
  background("white");
  
  ground.velocityX = -2;
  console.log(trex.y);
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  if(keyDown("space")){
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY + 0.5;
  trex.collide(ground);

  
  drawSprites();
  

}
