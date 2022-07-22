const cw = 400;
const ch = 400;
function setup() {
  createCanvas(cw, ch);
}

function draw() {
  background(220);
  strokeWeight(5);
  stroke('SlateGray');
  drawGraph();
  stroke('salmon');
  drawRandom();
  stroke('navy');
  drawNoise();
}

function drawGraph() {
  for(let x = 0; x < cw; x++) {
    const h = ch - x;
    point(x, h);
  }
}

for(let i = 0; i < width; i++) {
  const r = random(0, 400);
  point(i, r);
}

function drawRandom() {
  for(let x = 0; x < cw; x++) {
    const r = random(0, ch);
    point(x, r);
  }
  noLoop();
}

function drawNoise() {
  for(let x = 0; x < cw; x++) {
    const h = ch - x;
    const ns = noise(x * 0.015) * ch;
    point(x, ns);
  }
}