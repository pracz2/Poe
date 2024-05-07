let font;

let loc = -55;

let loc2 = 700;

let canvasWidth = 600;

let canvasHeight = 400;

let textLeftPage = false; 

let img;


function preload() {
  font = loadFont('VictoriaTypewriter.ttf');
  image= loadImage('BigCrow2.png');
}

function windowResized() {
  createCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill('black');
  textFont(font);
  textSize(36);
}

function butClick(backbutton){
  window.location.href = "page4.html";
}

function forClick(nextbutton){
  window.location.href = "page6.html";
}

function draw() {
  background(251, 250, 230);
  fill('black');
  textSize(100);
  text('Attempt to', 10, 90);
  fill(67, 124, 169);
  textSize(200);
  text('force the gaze', loc, 500);
  loc = loc + 7;

  fill('black');
    textSize(100);
  text('down', 1400, loc2);
    loc2 = loc2 + 0.5;
  
 
  if (loc > canvasWidth + 1300) {
    textLeftPage = true;
    loc = -1550;
  }
  

  if (textLeftPage) {
    loadImage(img); 
  } else {
    fill('black');
    textSize(100);

    text('Attempt to', 10, 90);
    fill(67, 124, 169);
  }
}

