let font;

let nextbutton;

let img1


function preload() {
  font =loadFont('VictoriaTypewriter.ttf');
  img1 = loadImage('abysmal_dist.png');
}

function windowResized() {
  createCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill('black');
  textFont(font);
  textSize(1500);
}


function butClick(backbutton){
  window.location.href = "page3.html";
}

function butClick(nextbutton){
  window.location.href = "page5.html";
}


function draw() {
  background(251, 250, 230);
  fill(67, 124, 169);
  
  image(img1, width/2.55, height/3.4);

  text("Into", -2350, height/1.35);
  textSize(size);
  textAlign(CENTER, CENTER);


  
}


