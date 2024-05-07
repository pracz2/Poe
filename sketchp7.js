let font;
let fadeOpacity = 0;
let buttonOpacity = 0;


function preload() {
  font = loadFont('VictoriaTypewriter.ttf');
}
  
function windowResized() {
   createCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  textFont(font);
  textSize(36);
}

function butClick(backbutton){
    window.location.href = "page6.html";
}
  
function forClick(nextbutton){
    window.location.href = "about.html";
}

function draw() {
  background(251, 250, 230);
  fill(67, 124, 169);
  textSize(70);
  text('as we sweep', width/1.4, height/5.5);
  text('through them', width/9, height/1.3);
  
  fill(15, 44, 2, fadeOpacity);
  textSize(200)
  text ('S L O W L Y', width/6, height/2 );
  
  if (fadeOpacity < 255) {
    fadeOpacity += 1; 
  }
  
  
  
}