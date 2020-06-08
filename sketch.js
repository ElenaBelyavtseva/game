let state;
let viruses;
let virus;
let vir;
let virGroup;
let sprite;
let manImg;
let collisionCount = 0;
let virusScore = 0;


//function preload() {
  //virusImage = loadImage('assets/virus.png');
  //}



function setup() {
  state = 'start';
  manImg = loadImage ('assets/bleach.png');
  createCanvas(600, 400);
  virusImg = loadImage('assets/virus.png');
  virGroup = new Group();
  for (let i = 0; i < 15; i++) {
    vir = createSprite(random(400, width), random(40, height));
    vir.addImage(virusImg);
    vir.scale = 0.1;
    vir.setCollider('circle', 0, 0, 80);
    virGroup.add(vir);
    vir.setSpeed(0.5, random(0, 270));
  }
  sprite = createSprite(300, 200);
  //sprite.shapeColor = color(33);
  //sprite = createSprite(200, 200);
  sprite.addImage(manImg);
  sprite.scale = 0.1;
  sprite.setCollider('circle', 0, 0, 1);
}




function generateViruses() {
  vir = createSprite(random(40, height-40), random(40, width-40));
  vir.scale = 0.1;
  vir.maxSpeed = 1;
  vir.setCollider('circle', 0, 0, 1);
  vir.addImage(virusImg);
  vir.setSpeed(random(-10, 10), random(0, 270));
  vir.life = 5200;
  viruses.add(vir);
}


function start() {
  text('Press S to start', 40, 50, 50);
}


function draw() {
  background(255, 255, 100);
   if (state === 'start') {
    start();
  }
  
    if (state === 'start' && keyIsPressed && key === 's') {
    state = 'game';
  }
  


  sprite.position.x = mouseX;
  sprite.position.y = mouseY;
  //sprite.collide(virGroup, callbackFunc);
  sprite.overlap(virGroup, callbackFunc);
  if (vir.overlap(sprite)) {

    
    
  //vir.shapeColor = color(255, 112, 112);
  //virus.remove();
}
 
  
function collect(virus) {
  if (virus.overlap(sprite));
  virus.remove();
  virusScore += 1;
 // if (virusScore % 5 == 0) {
//    bulletsScore += 1;
  }
//}

  
  
function game() {
  
  drawSprites();
  text(collisionCount, 30, 30);
  text(virusScore, 50, 30);
}
function callbackFunc() {
  collisionCount = collisionCount + 1;
}

}