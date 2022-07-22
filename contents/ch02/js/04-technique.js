function setup() {
  const w = 600;
  const h = 400;
  createCanvas(w, h);
}

stroke('indigo');
fill('indigo');
rect(200, 200, 100, 50);
// triangle(x1, y1, x2, y2, x3, y3);
triangle(300, 175, 300, 275, 350, 225);

function draw() {
  background(234);
  arrow(100, 100, 20, 'indigo');
  arrow(200, 100, 10, 'crimson');
  triangle(x + w, y - ts,
    x + w, y + h  + ts,
    x + w + h, y + ts);
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
//Recap chapter