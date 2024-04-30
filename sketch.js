let font;

var beginbutton;

function preload() {
  font = loadFont('VictoriaTypewriter.ttf');
}
  

function setup() {
  createCanvas(600, 400);
  fill('black');
  textFont(font);
  textSize(36);
  
  beginbutton = createButton("Begin");
  beginbutton.mousePressed(begin);
  beginbutton.position(470, 325); 
  beginbutton.style('font-size', '30px');
  beginbutton.style('background-color',67,124,169); 
  beginbutton.style("padding", "10px"); 
  beginbutton.style("font", font); 

}

function begin(){
  //link to next page
}

function draw() {
  background(251, 250, 230);
  textSize(100);
  text('"Eureka"', mouseX-100, 150);
  textSize (26);
  text('by Edgar Allen Poe', 20, 350);
  //beginbutton = text('begin', 470, 350);
  
}

