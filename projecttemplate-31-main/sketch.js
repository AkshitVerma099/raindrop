

function preload(){
dropImg = loadImage("drop.png")
}
function setup(){
    createCanvas(1200, 400)

   
}

function draw(){
    background(0);
    drawSprites();
    if(frameCount%1 === 0){
        rain();
        rain();
        rain();
        
      }
}   

function rain(){
    
    drop = createSprite(Math.round(random(10,1600)),00);
    drop.addImage(dropImg)
    drop.scale = 0.01
    drop.velocityY = 10
    drop.lifetime = 40
    
  }

