const game = {
  bit: 32,
  gx: 10,
  gy: 20,
}
const stars = [];

function setup() {
  const {bit, gx, gy} = game;
  createCanvas(bit * gx, bit * gy);
  initStars();
}

function draw() {
  background('black');
  renderStar();
  renderBanner('START')
  renderTime();
}

/**
 * Text
 */
function renderTime() {
  textSize(20);
  text('Time: ' + game.time, 10 , 30);
}

function renderBanner(txt) {
  const s = 40;
  fill(254, 77, 77, 128);
  rectMode(CENTER);
  rect(width / 2 , height / 2, width, s * 2);
  fill('snow');
  textSize(s);
  textAlign(CENTER);
  text(txt, width / 2 , height / 2 + s / 4);
  textAlign(LEFT);
}

/**
 * Star
 */
function initStars() {
  const {gx, gy, bit} = game;
  const n = gx * gy * bit * 0.02;
  for (let i = 0; i < n; i++) {
    stars.push({
      x: round(random(0, gx * bit)),
      y: round(random(0, gy * bit)),
      r: random(0.2, 3)
    });
  }
}

function renderStar() {
  for (let i = 0; i < stars.length; i++) {
    fill('#FFFFE0');
    noStroke();
    circle(stars[i].x, stars[i].y, stars[i].r)
  }
}
