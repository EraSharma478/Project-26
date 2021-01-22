var fixedRect , movingRect ; 

function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(600,200,50,100);
  fixedRect.shapeColor = "red";
  movingRect = createSprite(300,200,100,50);
  movingRect.shapeColor = "red";
}

function draw() {
  background("black");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  movingRect.debug = true;
  fixedRect.debug = true;

  console.log(movingRect.width/2 + fixedRect.width/2);
  console.log(movingRect.x - fixedRect.x);

  if(movingRect.width/2 + fixedRect.width/2  >  movingRect.x - fixedRect.x   &&   fixedRect.width/2 + movingRect.width/2  >  fixedRect.x - movingRect.x   &&   fixedRect.height/2 + movingRect.height/2  >  fixedRect.y - movingRect.y   &&   movingRect.height/2 + fixedRect.height/2  >  movingRect.y - fixedRect.y ){
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  else{
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  drawSprites();
}
