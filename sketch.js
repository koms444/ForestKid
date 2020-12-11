//variables
var ground1,ground2,ground3,ground4,ground5,ground6,ground7,ground8,ground9,ground10,ground11,ground12,ground13,ground14,ground15,ground16,ground17,ground18,ground19,ground20,ground21,ground22,ground23,ground24,ground25,ground26,ground27,ground28,ground29,ground30,ground31,ground32,ground33,ground34,ground35,ground36,ground37,ground38;
var groundGroup;
var life=3;
var PLAY=1
var END=0
var gameState=PLAY
//load Images
function preload(){
  forestImage=loadImage("forest background.jpg")
  kidImage=loadAnimation("kid1.png","kid2.png","kid3.png")
  fireBallImage=loadImage("fireBall.png")
  ninjaStarImage=loadImage("ninjastar.png")
  axeImage=loadImage("axe.png")
  IceBallImage=loadImage("iceBall.png")
  swordImage=loadImage("sword.png")
  lifeImage=loadImage("life.png");
  doorImage=loadImage("door.png")
  groundImage=loadImage("GroundImage.png")
 
  enemyImage1=loadImage("Monsters.png")
  enemyImage2=loadImage("dragon.png")
  enemyImage3=loadImage("monsssterr.png")
  enemyImage4=loadImage("monsster.png")

  obstacleImage1 = loadImage("pin.png")
  obstacleImage2 =loadImage("thorns.png")

}

function setup() {
  createCanvas(7400,600);

  // create Groups
   fireBallGroup= new Group()
    axeGroup= new Group()
    iceBallGroup= new Group()
    ninjaStarGroup= new Group()
    groundGroup = new Group();
    obstacleGroup = new Group();
  //create grounds
   

  ground1=spawnground(90,500,200,50);
  ground2=spawnground(320,420,200,50);
  ground3=spawnground(490,320,200,50);
  ground4=spawnground(660,450,200,50);
  ground5=spawnground(860,350,200,50);
  ground6=spawnground(1050,240,200,50);
  ground7=spawnground(1200,340,200,50);
  ground8=spawnground(1400,400,200,50);
  ground9=spawnground(1600,320,200,50);
  ground10=spawnground(1600,320,200,50);
  ground11=spawnground(1800,240,200,50);
  ground12=spawnground(2000,320,200,50);
  ground13= spawnground(2200,400,200,50);
  ground14= spawnground(2200,2400,200,50);
  ground15= spawnground(2400,320,200,50);
  ground16= spawnground(2600,240,200,50);
  ground17= spawnground(2800,320,200,50);
  ground18= spawnground(3000,400,200,50);
  ground19= spawnground(3200,320,200,50);
  ground20= spawnground(3400,240,200,50);
  ground21= spawnground(3600,320,200,50);
  ground22= spawnground(3800,400,200,50);
  ground23= spawnground(4000,320,200,50);
  ground24= spawnground(4200,240,200,50);
  ground25= spawnground(4400,320,200,50);
  ground26= spawnground(4600,400,200,50);
  ground27= spawnground(4800,320,200,50);
  ground28= spawnground(5000,240,200,50);
  ground29= spawnground(5200,320,200,50);
  ground30= spawnground(5400,400,200,50);
  ground31= spawnground(5600,320,200,50);
  ground32= spawnground(5800,240,200,50);
  ground33= spawnground(6000,320,200,50);
  ground34= spawnground(6200,400,200,50);
  ground35= spawnground(6400,320,200,50);
  ground36= spawnground(6600,240,200,50);
  ground37= spawnground(6800,320,200,50);
  ground38= spawnground(7000,400,200,50);
 
  //create pins
  obstacle1= spawnObstacle(5200,300,60,30)
obstacle2= spawnObstacle(490,280,60,30)
obstacle3= spawnObstacle(6000,300,60,30)
obstacle4= spawnObstacle(1200,300,60,30)
obstacle5= spawnObstacle(2000,270,60,30)
obstacle6= spawnObstacle(6200,200,60,30)
obstacle7= spawnObstacle(3200,290,60,30)
  
//create thorns
thorns1= spawnObstacle(320,400,60,30)
thorns2= spawnObstacle(650,440,60,30)
thorns3= spawnObstacle(1590,260,60,30)
thorns4= spawnObstacle(1790,160,60,30)
thorns5= spawnObstacle(6790,240,60,30)
thorns6= spawnObstacle(2390,240,60,30)
thorns7= spawnObstacle(5000,240,60,30)
thorns8= spawnObstacle(3800,240,60,30)
thorns9= spawnObstacle(4400,240,60,30)
thorns10= spawnObstacle(4890,240,60,30)
thorns11= spawnObstacle(7000,240,60,30)
thorns12= spawnObstacle(5400,340,60,30)
thorns13= spawnObstacle(5600,240,60,30)

//create diffrent monsters
monster1= createSprite(870,300,90,60);
monster1.addImage(enemyImage1);
monster2= createSprite(5800,200,90,60);
monster2.addImage(enemyImage2);
monster3= createSprite(6600,220,90,60);
monster3.addImage(enemyImage3);
monster4= createSprite(3400,200,90,60);
monster4.addImage(enemyImage4);

//create kid
 kid= createSprite(90,420,90,40)
 kid.addAnimation("kid",kidImage)
  kid.scale=0.3
  kid.velocityY=-12
  
}

function draw() {
  background(forestImage);

  
  
  
 



if(gameState===PLAY){
      //call the functions
      fireBall();
      ninjaStar();
      spawnAxe();
      spawnIceBall();


      if(keyDown("i")){
        kid.velocityY=-12;
      }
      if(keyDown("j")){
        kid.x=kid.x-15;
      }
      if(keyDown("k")){
        kid.x=kid.x+15;
      }
      kid.velocityY=kid.velocityY+0.8


      if(fireBallGroup.isTouching(kid)||kid.y>500||ninjaStarGroup.isTouching(kid)||iceBallGroup.isTouching(kid)){
      life=life-1;
      gameState=END
      console.log(life)
      
      }
    }
    
      

    kid.collide(groundGroup)

drawSprites();
//if(kid.isTouching(door)){
 // text("YOU WIN",7000,300)
//}
if(gameState===END){
  background("Black")
  fill("white")
  if(life>0){
    kid.x=90
    kid.y=420
    text("PRESS R to get another chance",500,500);
    if(keyDown("R")){
      gameState=PLAY
      for(i=1;i<=life;i=i+1){
        lifeSprite=createSprite(50*i,60,4,4)
        lifeSprite.addImage(lifeImage)
        lifeSprite.scale=0.02
        console.log("life"+life)
      }
    }
  }
  else{
    text("Game Over",500,500)
  }

  
}
}


function fireBall(){
  if(frameCount%100===0){
    fire=createSprite(5760,180,10,10)
    fire.addImage(fireBallImage);
    fire.velocityX=-5
    fire.lifetime=50;
    fire.scale=0.05
    fireBallGroup.add(fire)
  }
}
function ninjaStar(){
  if(frameCount%100===0){
    star=createSprite(870,280,10,10)
    star.addImage( ninjaStarImage);
    star.velocityX=-5
    star.lifetime=50;
    star.scale=0.03;
    ninjaStarGroup.add(star)
  }
}
function spawnAxe(){
  if(frameCount%100===0){
    axe=createSprite(6600,210,10,10)
    axe.addImage(axeImage);
    axe.velocityX=-5
    axe.lifetime=50;
    axe.scale=0.03;
    axeGroup.add(axe)
  }
}
function spawnIceBall(){
  if(frameCount%100===0){
    IceBall=createSprite(3400,190,10,10)
    IceBall.addImage(IceBallImage);
    IceBall.velocityX=-5
    IceBall.lifetime=50;
    IceBall.scale=0.03;
    iceBallGroup.add(IceBall)
  }
}
function spawnground(x,y,w,h){
  ground= createSprite(x,y,w,h)
  ground.addImage(groundImage)
  ground.scale=0.3
  groundGroup.add(ground)
}
function spawnObstacle(x,y,w,h){
  obstacle= createSprite(x,y,w,h)
  var rand = Math.round(random(1,2))
  if(rand===1){
    obstacle.addImage(obstacleImage1)
  }
  else{
    obstacle.addImage(obstacleImage2)

  }
  
  obstacle.scale=0.3
  obstacleGroup.add(obstacle)
}
