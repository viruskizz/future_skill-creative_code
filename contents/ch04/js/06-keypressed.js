const cw = 400;
const ch = 400;
function setup() {
  createCanvas(cw, ch);
  strokeWeight(5);
}

function draw() {
  background(204);
  const s = 40;
  const centerX = width / 2;
  const centerY = height / 2;
  if (keyIsPressed === true) {
    line(centerX - s, centerY - s, centerX + s, centerY + s);
  }
  else {
    rect(centerX - s / 2, centerY - s / 2, s, s);
  }
}