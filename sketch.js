var fixedRect,moveRect;



function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(600, 200, 30, 50);
  fixedRect.shapeColor="green";

  moveRect=createSprite(200,100,60,30);
  moveRect.shapeColor="red";
}

function draw() {
  background("lightblue");  

  moveRect.y=World.mouseY;
  moveRect.x=World.mouseX;

  if(fixedRect.x-moveRect.x<moveRect.width/2+fixedRect.width/2&&
    moveRect.x-fixedRect.x<moveRect.width/2+fixedRect.width/2&&
    fixedRect.y-moveRect.y<moveRect.height/2+fixedRect.height/2&&
    moveRect.y-fixedRect.y<moveRect.height/2+fixedRect.height/2){
      moveRect.shapeColor="blue";

    }
    else{
      moveRect.shapeColor="red";
    }

  drawSprites();
}