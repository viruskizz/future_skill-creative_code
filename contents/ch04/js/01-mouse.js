const cw = 400;
const ch = 400;
function setup() {
  createCanvas(cw, ch);
}

function draw() {
  background(220);
  inspectMouse();
}

function inspectMouse() {
  const offset = 20;
	// text('message', x, y);
  text("X: " + mouseX, mouseX + offset / 2, mouseY + offset);
  text("Y: " + mouseY, mouseX + offset / 2, mouseY + offset * 2);
}
