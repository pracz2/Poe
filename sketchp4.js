let font;

function preload() {
  font = loadFont('VictoriaTypewriter.ttf');
}
  

function setup() {
  createCanvas(600, 400);
  fill('deeppink');
  textFont(font);
  textSize(36);
}

function draw() {
  background(251, 250, 230);
   text('p5*js', 10, 50);
  
}