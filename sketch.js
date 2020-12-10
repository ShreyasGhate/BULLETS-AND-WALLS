var bullet, wall ,thickness;
var speed,weight;


function setup() {
  createCanvas(800,400);
  
speed = random(55,90);
weight = random(400,1500)
thickness= random(22,83);

bullet = createSprite(50,200,40,5);
bullet.velocityX = speed;

wall = createSprite(700,200,thickness,height/2);



}

function draw() {
  background(0);  
  drawSprites();

if(hasCollided(bullet,wall)) {
  bullet.velocityX= 0;
  var damage = 0.5 * width * speed *speed /( thickness * thickness *thickness);


  if(damage>10) {
    wall.shapeColor=color(255,0,0);
  }

  if(damage<10) {
    wall.shapeColor = color(0,255,0);
  }
}

}

function hasCollided(Lbullet,Lwall) {
 bulletRightEdge = Lbullet.x + Lbullet.width;
 wallLeftEdge = Lwall.x;
if(bulletRightEdge>wallLeftEdge) {
  return true;
}else{
  return false;
}
}
