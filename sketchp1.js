let font;
let img1;
let img2;

let L = 75;
let O1 = 180;
let O2 = 280;
let K = 380;

let D = 90;
let O3 = 175;
let W = 260;
let N = 380;

let nextbutton;

function preload() {
  font = loadFont('VictoriaTypewriter.ttf');
  
  img1 = loadImage('crow3.png');
  img2 = loadImage('crow4.png');
}

function windowResized() {
  createCanvas(windowWidth, windowHeight);
}
  

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill('black');
  textFont(font);
  textSize(100);
  

  nextbutton = createButton("Next");
  nextbutton.mousePressed(begin);
  nextbutton.position(width/1.3, height/1.2); 
  nextbutton.style('font-size', '30px');
  nextbutton.style('background-color',67,124,169); 
  nextbutton.style("padding", "10px"); 
  nextbutton.style("font", font); 

}

function begin(){
  window.location.href = "page2.html";

}

function draw() {
  background(251, 250, 230);
  frameRate(30);
  text('L', L, L-10);
  text('o', O1, O1 - 80);
  text('o', O2, O2-130);
  text('k', K, K-190);
  
  //image(img1, 200, 155);
  //image(img2, 300, 200);
  
  
    
  //image(img1, 0, 0);
  //image(img2, 100, 50);
    
  //image(img1, 400, 300);
  //image(img2, 1300, 700);
  
  text('D', D, D + 205);
  text('o', O3, O3 + 155);
  text('w', W, W + 105);
  text('n', N, N + 15);
  
  L +=4; 
  O1 = O1+5;
  O2 = O2+2;
  K = K+3;
  
  D = D+5;
  O3 = O3+3;
  W = W+4;
  N = N+2;
  

  
}



//function mousePressed(){
 // L +=1; 
  //O1 = O1+5;
  //O2 = O2+2;
  //K = K+3;
  
  //D = D+5;
 // O3 = O3+3;
 // W = W+4;
 // N = N+1;}


  
