const cw = 400;
const ch = 400;
let gray1 = 0;
let gray2 = 0;
let gray3 = 0;

function setup() {
  createCanvas(cw, cw);
  noStroke();
}

function draw() {
  background(255);
  
  fill(gray1);
  text('mousePressed', width / 2 - 20, height / 2  - 30);
  ellipse(width / 2, height / 2, 40, 40);
  
  fill(gray2);
  text('mouseReleased', width / 4 - 20, height / 4  - 30);
  ellipse(width / 4, height / 4, 40, 40);
  
  fill(gray3);
  text('mouseClicked', 3 * width / 4 - 20, 3 * height / 4  - 30);
  ellipse(3 * width / 4, 3 * height / 4, 40, 40);
}

function mousePressed() {
  gray1 += 100;
}

function mouseReleased() {
  gray2 += 100;
}

function mouseClicked() {
  gray3 += 100;
}
