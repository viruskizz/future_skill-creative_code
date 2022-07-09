let x = 0;
let y = 100;
let dx = 1;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill('navy');
  rect(x, y, 50, 50);

  x = x + dx;
  if (x === width || x === 0) {
    dx = dx * -1;
  }
}
