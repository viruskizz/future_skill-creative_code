function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(234);
  fill('indigo');
  stroke('transparent');
  rect(100, 100, 50, 50);
  rect(200, 100, 50, 50, 10);

  fill(250, 128, 114, 196);
  stroke('red');
  ellipse(100, 100, 50, 50);
  fill('#193F73');
  line(30, 20, 85, 75);
  triangle(200, 200, 200, 300, 300, 300);
}
