function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(220);
  myRect(10, 10);
  myRect(50, 50);
  myRect(100, 100);
}

function myRect(x, y) {
  fill('salmon');
  rect(x, y, 25, 25);
}