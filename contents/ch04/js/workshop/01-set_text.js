const r = 20
let angle;
let x, y;
let dx = 1;
let dy = 1;
// declare speed as global
let spd = 10;
// declare score as global
let score = 0;

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
  txtSpeed();
  txtScore();
  myBall(x, y);
  x += spd * sin(angle) * dx;
  y += spd * cos(angle) * dy;
  if (x > width - r || x < r) {
    dx = dx * -1;
  }
  if (y > height - r || y < r) {
    dy = dy * -1;
  }
}

function txtSpeed() {
  const margin = 10;
  const fontSize = 20;
  textSize(fontSize);
  text('Speed: ' + spd, margin, fontSize + margin);
}

function txtScore() {
  const margin = 10;
  const fontSize = 20;
  textSize(fontSize);
  text('Score: ' + score, width - margin * 10, fontSize + margin);
}

function myBall(x, y) {
  const s = r * 2;
  fill('navy');
  ellipse(x, y, s, s);
}
