var hero;
var obs1,obs2,obs3,obs4,obs5,obs6,obs7,obs8,obs9;
var wall1,wall2,wall3,wall4;
function setup() {

  createCanvas(1200,800);

  hero=createSprite(70, 700, 20, 20);
  wall1=createSprite(5, 400, 15, 800);
  wall2=createSprite(600, 5, 1200, 20);
  wall3=createSprite(600, 790, 1200, 20);
  wall4=createSprite(1195, 400, 15, 800);
}

function draw() {
  background(0);  
  text(mouseX+","+mouseY,mouseX,mouseY);
  
  drawSprites();
}