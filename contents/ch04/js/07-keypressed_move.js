const cw = 400;
const ch = 400;
let dx, dy;
function setup() {
  createCanvas(cw, ch);
  strokeWeight(2);
  dx = width / 2;
  dy = height / 2;
}

function draw() {
  background(204);
  if (keyIsPressed && (key === 'a' || key === 'A' || keyCode === RIGHT_ARROW)) {
    dx--;
  }
  if (keyIsPressed && (key === 'd' || keyCode === 68)) {
    dx++;
  }
  if (keyIsPressed && key === 'w') {
    dy--;
  }
  if (keyIsPressed && key === 's') {
    dy++;
  }
  myCircle(dx, dy);
}

function myCircle(x, y) {
  const size = 40;
  ellipse(x, y, size, size);
}