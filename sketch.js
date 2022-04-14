var sea, sea_background;
var ship, ship_moving;

function preload(){
  //carrega as animações e imagem
  sea_background = loadImage("sea.png");
  ship_moving = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);
  
  //sprite e animação do mar
  sea = createSprite(200, 200);
  sea.addAnimation("background", sea_background);
  sea.scale = 0.5;

  //sprite e animação do navio
  ship = createSprite(100,240);
  ship.addAnimation("moving", ship_moving);
  ship.scale = 0.2;  
}

function draw() {
  background("blue");
  
  //movimento do mar
  sea.velocityX = -2;
  
  drawSprites();
}
