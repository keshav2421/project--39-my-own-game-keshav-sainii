var ilu,lu
var g,gu
var ob,obgroup,m
var r
var l
var b
var u,yo
var f,d
var e,vas
var score=0
PLAY=1
END=0
gameState=1


function preload(){
  
  lu = loadImage("blend.png")
tu = loadImage("ball.png")
  gu = loadImage("maa.png")
m = loadImage("download.png")
  yo = loadImage(" saw.png")
  d = loadImage("go.png")
    vas=loadAnimation("restart-256.png")
}

function setup() {
 createCanvas(800,800)
  
  g = createSprite(400,400,800,800)
  g.addImage("yo",gu)
  g.scale=2
    
  u=createSprite(400,550,10,800)
  u.addImage("nope",yo)
  u.debug=true
  u.setCollider("rectangle",15,115,400,110)
  u.scale=3
  
  ilu=createSprite(750,690,30,30)
  ilu.addImage("ns",tu)
  ilu.scale=0.1
    ilu.addImage("hu",tu)
  
  
  r = createSprite(750,700,100,10)
  r.shapeColor="yellow"
                                  
  l=createSprite(0,400,10,800)
  l.shapeColor="yellow"
  b=createSprite(800,400,10,800)
  b.shapeColor="yellow"
  
     f = createSprite(400,400,50,50)
    f.addImage("goobali",d)
   
      e = createSprite(400,500,50,50)
  e.addAnimation("h",vas)
    e.scale=0.3  
  
   obgroup = createGroup()                               
                                          
}

function draw() {
  background("yellow")
  /////////////////////////////////()


///////////////////////////////////////key down  
  
  ///////////////////////////////////////other
  
  //////////////////////////////////////////////play
  if(gameState===PLAY){
    
    f.visible=false;
    e.visible=false;
    
     if(ilu.isTouching(obgroup)){
     
    ilu.velocityX=0
    score += 1
       
     }else{if (keyDown("left")) {
  ilu.velocityX = -10;
    ilu.addImage("hu",tu)
    
    
     }
  
    if (keyDown("right")) {
  ilu.velocityX = 10;
    ilu.addImage("hu",tu)
    
    
     }
          
          }
  }
  r.velocityY=-4
    ilu.velocityY=ilu.velocityY+0.6

  ilu.collide(obgroup) 
  ilu.collide(r)
  ilu.collide(l)
  ilu.collide(b)
  
      ob()

  
    
  
  
  
  
  
  if(ilu.isTouching(u)){
     
    gameState=END
    
    ilu.visible=false;
     }
  
  
  
  //////////////////////////////////////////////end
  if(gameState===END){

      f.visible=true;
    e.visible=true;
    r.visible=false
    obgroup.setVelocityYEach(0)
    r.velocityY=0
  
    if(mousePressedOver(e)){
      
      reset()
      
    }
    
  }
  
  
    console.log(frameCount)

  
 drawSprites()
  
  textSize(34)
  fill("cyan")
      text("score = "+score,550,50)

}


function reset(){
  gameState=PLAY
  r = createSprite(750,700,100,10)
  r.shapeColor="yellow"
  obgroup.destroyEach()
  score=0
}



function ob(){
  
    if(frameCount%60===0){ 
    
  var ob = createSprite(400,830,100,10)
    ob.velocityY=-6
      ob.addImage("hap",m)    
      ob.scale=0.6
    ob.x= Math.round(random(50,750));
      
      ob.shapeColor="blue"  
        obgroup.add(ob)

    }
  
} 




