let font;

let nextbutton;

let img1
let img2

function preload() {
  font =loadFont('VictoriaTypewriter.ttf');
  img2 = loadImage('abysmal_dist.png');
}

function windowResized() {
  createCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill('black');
  textFont(font);
  textSize(1300);
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
  
  text("Into", -1900, height/1.35);
  textSize(size);
  textAlign(CENTER, CENTER);

  image(img2, width/2, height/2);
  
}


