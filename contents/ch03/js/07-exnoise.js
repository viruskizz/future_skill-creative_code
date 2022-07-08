const cw = 256;
const ch = 256;
function setup() {
  createCanvas(cw, ch);
}

function draw() {
  background(220);
  colorNoise();
}

function colorNoise() {
  for(let x = 0; x < cw; x++) {
    const ns = noise(x * 0.01) * 255;
    stroke(ns);
    line(x, 0, x, cw);
  }
}