var wall,thickness;
var bullet, speed, weight;
var car

function setup() {
  createCanvas(800,400);
 wall = createSprite(1200,200,thickness,height/2);
 thickness = random(22,83);

 car = createSprite(50,200,50,50);
 car.velocityX = speed;


 speed = random(233,321);
 weight = random(30,52);
}

function draw() {
  background(255,255,255); 

  if(wall.x-car.x > (car.width+wall.width)/2)
 {
   car.velocity = 0;
   var deformation  = 0.5 * weigh * speed * speed/22509;
   if(deformation>180);

   {
       car.shapeColor = color(255,0,0);
   }
  }
  if(deformation< 180 && deformation> 100)
  {
    car.shapeColor = color(230,230,0);
  }
  if(deformation>100);
  {
    car.shapeColor = color(0,255,0);
  }

  drawSprites();
}
