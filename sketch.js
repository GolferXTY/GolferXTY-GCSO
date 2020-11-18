var car, wall;
var speed, weight;

function setup() {
  createCanvas(1980,1080);

car = createSprite(200, 200, 100, 50);

wall = createSprite(1000, 540, 10, 1080);

speed=random(55, 90);
weight=random(400, 1500);

  
}

function draw() {
  background(0);  



car.velocityX = speed;




  drawSprites();
}