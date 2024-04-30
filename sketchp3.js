let font;


function preload() {
  font =loadFont('VictoriaTypewriter.ttf');
  
}
function windowResized() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textSize(1500);
}

function draw() {
  background(251, 250, 230);
  fill(67, 124, 169);
  text('o', width/3.7, height/1.2);
}


  