const r = 10
let angle;
let x, y;
let spd = 5;
let dx = 1;
let dy = 1;

function setup() {
  angleMode(DEGREES);
  createCanvas(400, 400);
  x = random(r, width - r);
  y = random(r, height - r);
  angle = random(0, 360);
  console.log('Angle: ', angle);
}

function draw() {
  background(220);
  fill('navy');
  ball(x, y);
  x += spd * sin(angle) * dx;
  y += spd * cos(angle) * dy;
  if (x > width - r || x < r) {
    dx = dx * -1;
  }
  if (y > height - r || y < r) {
    dy = dy * -1;
  }
}

function ball(x, y) {
  const s = r * 2;
  ellipse(x, y, s, s);
}