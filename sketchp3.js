let font;

let nextbutton;

let img1

function preload() {
  font =loadFont('VictoriaTypewriter.ttf');
}

function windowResized() {
  createCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill('black');
  textFont(font);
  textSize(800);
}

function butClick(backbutton){
  window.location.href = "page2.html";
}

function butClick(nextbutton){
  window.location.href = "page4.html";
}



function draw() {
  background(251, 250, 230);
  fill(67, 124, 169);
  //var size = map(mouseX, 0, width, 300, 600);
  text("Into", -450, height/1.7);
  textSize(size);
  textAlign(CENTER, CENTER);
  
   
}


