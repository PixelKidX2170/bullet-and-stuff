var thickness,wall
var bullet,speed, weight

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 50);
  thickness=random(22,83)
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=rgb(80,80,80)
  speed=random(223,321)
  weight=random(30,52)
  bullet.velocityX=speed;
}

function draw() {
  background(300, 180, 206);  
  if (bullet.collide(wall)){
    deformation= .5*weight*speed*speed/(thickness*thickness*thickness)
    console.log(deformation)
    if(deformation<10){
      wall.shapeColor="green"
    }
    else if(deformation>10){
      wall.shapeColor="red"
    }
  }
  drawSprites();
}
