const cw = 400;
const ch = 400;
let cx, cy;

let dragX, dragY, moveX, moveY;

function setup() {
  createCanvas(cw, cw);
  noStroke();
}

function draw() {
  background(204);
  fill(0);
  ellipse(dragX, dragY, 33, 33); // Black circle
  fill(153);
  ellipse(moveX, moveY, 33, 33); // Gray circle
}

function mouseMoved() { // Move gray circle
  console.log('moved');
  moveX = mouseX;
  moveY = mouseY;
}

function mouseDragged() { // Move black circle
  dragX = mouseX;
  dragY = mouseY;
}