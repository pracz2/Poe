let font;

let nextbutton;

let img1

function preload() {
  font =loadFont('VictoriaTypewriter.ttf');
  img1 =loadImage('BigCrow1.png');
}

function windowResized() {
  createCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill('black');
  textFont(font);
  textSize(200);

  nextbutton = createButton("Next");
  nextbutton.mousePressed(begin);
  nextbutton.position(width/1.3, height/1.2); 
  nextbutton.style('font-size', '30px');
  nextbutton.style('background-color',67,124,169); 
  nextbutton.style("padding", "10px"); 
  nextbutton.style("font", font); 

}

function begin(){
  window.location.href = "page3.html";

}



function draw() {
  background(251, 250, 230);
  text('Into', CENTER, CENTER);
  fill(67, 124, 169);
  //var size = map(mouseX, 0, width, 300, 600);
  text("Into", width/4.4, height/1.75);
  image(img1, width/4.3, height/10);
  textSize(size);
  textAlign(CENTER, CENTER);
  
   
}


