let font;
let img1;
let img2;

function preload() {
  font = loadFont('VictoriaTypewriter.ttf');
  img1 = loadImage('sphere.png')
  img2 = loadImage('squak.png')
}
  
function windowResized() {
    createCanvas(windowWidth, windowHeight);
}


  function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(67, 124, 169);
  textFont(font);
  textSize(36);
}


function butClick(backbutton){
  window.location.href = "page5.html";
}

function forClick(nextbutton){
  window.location.href = "page7.html";
}

function drawDebug(x, y, radius) {
    drawingContext.setLineDash([5, 3]);
    noFill()
    stroke('noStroke')
    circle(x, y, 2*radius)
    
    fill('grey')
    circle(x, y, 4)
    
    line(x, y, x, y - radius)
    
      drawingContext.setLineDash([]);

}

function rotateText(x, y, radius, txt) {
    drawDebug(x, y, radius)
    
    chars = txt.split("")
   
    charSpacingAngleDeg = 5;
   
    textAlign(CENTER, BASELINE)
    textSize(40)
    fill('black')

    push()
    translate(x, y)

    rotate(radians(-chars.length * charSpacingAngleDeg / 2))

    for (let i = 0; i < chars.length; i++) {
        text(chars[i], 0, -radius)
       
        rotate(radians(5))
    }
    pop()

}

function draw() {
  background(251, 250, 230);

    textToRotate = "the  multitudinous  vistas  of  the  stars"
    rotateText(500, 500, mouseX, textToRotate)
  
  let circleX = 500; 
  let circleY = 500; 
  
  // Draw the image at the center of the circle
  imageMode(CENTER);
  image(img1, circleX, circleY);
  
  image(img2, width/1.3, height/1.3);
  
}