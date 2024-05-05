let font;

let nextbutton;

let img1

function preload() {
  font =loadFont('VictoriaTypewriter.ttf');
  img1 =loadImage('newcrow1.png');
}

function windowResized() {
  createCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill('black');
  textFont(font);
  textSize(200);
}

function butClick(backbutton){
  window.location.href = "page1.html";
}

function butClick(nextbutton){
  window.location.href = "page3.html";
}



function draw() {
  background(251, 250, 230);
  text('Into', CENTER, CENTER);
  fill(67, 124, 169);
  //var size = map(mouseX, 0, width, 300, 600);
  text("Into", width/3.7, height/1.7);
  image(img1, width/4, height/6.7);
  textSize(size);
  textAlign(CENTER, CENTER);
  
   
}


