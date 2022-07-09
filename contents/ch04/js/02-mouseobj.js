const cw = 256;
const ch = 256;
function setup() {
  createCanvas(cw, ch);
}

function draw() {
  background(220);
  myCircle(mouseX, mouseY);
}

function myCircle(x, y) {
  const size = 40;
  fill('navy');
  ellipse(x, y, size, size);
}
