var fixedRect, movingRect;
var rect1,rect2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1 = createSprite(300, 400, 50, 80);
  rect2 = createSprite(400, 400, 50, 80);
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(iSTouching(movingRect,fixedRect) ){

     movingRect.shapeColor = "blue";
     fixedRect.shapeColor = "blue";
  }
  else if(iSTouching(movingRect,rect1)){
    rect1.shapeColor = "yellow"
    movingRect.shapeColor = "yellow"
  }
  else if(iSTouching(movingRect,rect2)){
    rect2.shapeColor = "white"
    movingRect.shapeColor = "white"
  }
  else{
     movingRect.shapeColor = "green";
     fixedRect.shapeColor = "green";
     rect1.shapeColor = "green";
     rect2.shapeColor = "green";
  }

  drawSprites();
}

function iSTouching(object1,object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object2.height/2) {

      return true;
   
  }
  else {
   

    return false;
 }
}