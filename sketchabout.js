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

function butClick(nextbutton){
  window.location.href = "index.html";
}

function draw() {
  background(251, 250, 230);
  
  text('An exerpt from Eureka, by Edgar Allan Poe. ', 40, 50);
  text('  The lengthy prose poem delves into his own', 30, 180);
  text('ideas and interpretations of the metaphysical ', 10, 210);
  text('universe. In this portion, one might find ', 30, 240);
  
  text('something meaningful, or otherwise thoughtful.', 10, 270);
}