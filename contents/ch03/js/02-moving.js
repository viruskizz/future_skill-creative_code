let x = 0;
let y = 100;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill('navy');
  rect(x, y, 50, 50);
  x = x + 1;
}