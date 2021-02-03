var car;
var wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);

  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,20,height/2);
  speed=Math.round(random(55,100));
  weight=Math.round(random(400,1500));
  car.velocityX=speed;
}

function draw() {
  background("black");
  
  if(wall.x-car.x < (car.width+wall.width)/2){

    car.velocityX=0;
    car.x=wall.x-30;
    deformation=(0.5 * weight * speed * speed)/22500;
    console.log(deformation);

    if (deformation<100){

      car.shapeColor = "green";

    }

    else if(deformation=100 && deformation<=180){

      car.shapeColor = "yellow";
    }

    else {
      car.shapeColor = "red";
    }
    }
  drawSprites();
}