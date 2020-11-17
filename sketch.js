var bullet, wall, speed, weight,bulletRightEdge, wallLeftEdge;
var thickness 
var damage;

function setup() {
    createCanvas(1600,400);
    
    thickness = random(22,83);
    
    wall = createSprite(1200, 200, thickness, height/2);
    wall.shapeColor = 80,80,80;
    
    speed = random(223.321);
    weight = random(30,52);

    bullet = createSprite(100,200,50,5);
    bullet.velocityX = speed;
    bullet.shapeColor = "white";
  }

  function draw() {
    background("black");
      bulletRightEdge = bullet.x + bullet.width;
      wallLeftEdge = wall.x;

console.log(damage)

    if(bulletRightEdge>=wallLeftEdge){
      bullet.velocityX = 0;

      damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
      if(damage<10){
        wall.shapeColor = "green";
      }
      if(damage>10){
        wall.shapeColor = "red";
      } 
    }
  
    
    drawSprites()
  }