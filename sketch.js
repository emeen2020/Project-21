var wall,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(1500,200);

  speed = random(223,321);
 weight = random(30,52);
 thickness = random(22,83);

 bullet = createSprite(200,100,40,5);
 bullet.shapeColor = "white";
 bullet.velocityX = speed;

 wall = createSprite(1200,100,thickness,height/2);

}

function draw() {
  background(0);

  if(hasCollided(bullet,wall))
  {
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)

    if(damage>10)
    {
        wall.shapeColor = color(225,0,0);
    }

    if(damage<10){
      wall.shapeColor = color(0,225,0);
    }
  }

  drawSprites();
  fill("white");
  text(mouseX + " "+mouseY,mouseX,mouseY);

}
