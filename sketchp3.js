let font;

let scaleFactor = 1;

let img1;

function preload() {
  font =loadFont('VictoriaTypewriter.ttf');
  img1= loadImage('abysmal.png')
  
}
function windowResized() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textSize(200);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(251, 250, 230);
  fill(67, 124, 169);
  scale(scaleFactor);
  text('o', width/2 / scaleFactor, height/2 / scaleFactor);
}


function mousePressed() {
  
  scaleFactor += 2;
}

  if (scaleFactor >= 9) {
    image(img1, CENTER, CENTER, 50, 50);
  }

  