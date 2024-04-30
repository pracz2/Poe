let font;

function preload() {
  font = loadFont('VictoriaTypewriter.ttf');
}
  

function setup() {
  createCanvas(600, 400);
  fill('black');
  textFont(font);
  textSize(20);
}

function draw() {
  background(251, 250, 230);
  rect(250, 250, 50, 30)
  text('An exerpt from Eureka, by Edgar Allan Poe. ', 10, 120);
  text('  The lengthy prose poem delves into his own', 10, 160);
  text('ideas and interpretations of the metaphysical ', 10, 180);
  text('universe. In this portion, one might find ', 10, 200);
  
  text('something meaningful, or otherwise thoughtful.', 10, 220);
}