let font;
let img;

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
  img= loadImage ('squak.png');
}
 

function windowResized() {
  createCanvas(windowWidth, windowHeight);
}
  

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill('black');
  textFont(font);
  textSize(100);
  

}

function butClick(backbutton){
  window.location.href = "index.html";
}

function forClick(nextbutton){
  window.location.href = "page2.html";
}

function draw() {
  background(251, 250, 230);
  image(img, width/2, height/5.3);
  frameRate(30);
  text('L', L, L-10);
  text('o', O1, O1 - 80);
  text('o', O2, O2-130);
  text('k', K, K-190);
  
  
  
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





  
