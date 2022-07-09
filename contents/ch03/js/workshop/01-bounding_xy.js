const r = 10
let x, y;
let spd = 5;
let dx = 1;
let dy = 1;

function setup() {
  createCanvas(400, 400);
  x = r;
  y = height - r;
}

function draw() {
  background(220);
  fill('navy');
  ball(x, y);
  y = y + dy;
  // x = x + dx;
  if (x > width - r || x < r) {
    dx = spd * dx * -1;
  }
  if (y > height - r || y < r) {
    dy = spd * dy * -1;
  }
}

function ball(x, y) {
  const s = r * 2;
  ellipse(x, y, s, s);
}
