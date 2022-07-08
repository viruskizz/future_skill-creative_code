const fps = 20; // assign fps value
let x = 0;
let y = 100;
function setup() {
  createCanvas(400, 400);
  frameRate(fps); // setting fps
}

function draw() {
	background(220);
  fill('navy');
  rect(x, y, 50, 50);
  x = x + 1;
}