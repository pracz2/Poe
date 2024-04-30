let font;

var beginbutton;

function preload() {
  font = loadFont('VictoriaTypewriter.ttf');
}
  

function setup() {
  createCanvas(1100, 800);
  fill('black');
  textFont(font);
  textSize(36);

 
  beginbutton = createButton("Begin");
  beginbutton.mousePressed(begin);
  beginbutton.position(width/.9, height/1.1); 
  beginbutton.style('font-size', '30px');
  beginbutton.style('background-color',67,124,169); 
  beginbutton.style("padding", "10px"); 
  beginbutton.style("font", font); 

}

function begin(){
  window.location.href = "page1.html";
}

function draw() {
  background(251, 250, 230);
  textSize(100);
  text('"Eureka"', mouseX-50, 150);
  textSize (26);
  text('by Edgar Allen Poe', 90, height/1.2);
  //beginbutton = text('begin', 470, 350);
  
}

