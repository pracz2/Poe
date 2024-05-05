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


}

function butClick(){
  window.location.href = "page1.html";
}


function draw() {
  background(251, 250, 230);
  textSize(100);
  text('"Eureka"', constrain(mouseX, 0, width - textWidth("Eureka")),
    	 constrain(mouseY, 0, height - 48 + textDescent()));
  textSize (26);
  text('by Edgar Allen Poe', width/30, height/2);
  
}


