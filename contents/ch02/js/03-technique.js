function setup() {
  const w = 600;
  const h = 400;
  createCanvas(w, h);
}

function draw() {
  background(234);
  arrow(100, 100, 20, 'indigo');
  arrow(200, 100, 10, 'crimson');
}

function arrow(x, y, s, color) {
  const h = s;
  const w = s * 2;
  const ts = s / 2;
  fill(color);
  stroke(color);
  rect(x, y, w, h);
  triangle(x + w, y - ts,
           x + w, y + h  + ts,
           x + w + h, y + ts);
}