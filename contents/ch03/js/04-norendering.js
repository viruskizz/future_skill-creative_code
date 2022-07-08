const fps = 20;
let x = 0;
let y = 100;
function setup() {
  createCanvas(400, 400);
  background(220); // create background in setup
  frameRate(fps);
}

function draw() {
  // background(220); // do not draw
	fill('navy');
  rect(x, y, 50, 50);
  x = x + 1;
}