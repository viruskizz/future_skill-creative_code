const game = {
  bit: 32,
  gx: 10,
  gy: 20,
  // 2. add new attributes
  timer: undefined,
  time: 0,
  spd: 5,
  isPlay: false,
  isOver: false,
  sound: undefined,
}
const stars = [];

function setup() {
  const {bit, gx, gy} = game;
  createCanvas(bit * gx, bit * gy);
  initStars();
  gameSound();
  gameButton();
}

function draw() {
  background('black');
  renderStar();
  renderTime();
  if (game.isOver) {
    renderBanner('GAME OVER');
  } else if (!game.isPlay) {
    renderBanner('PAUSE');
  }
}

/**
 * 1. Text
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
 * 1. Star
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

/**
 * 2. Game
 */
 function gameStart() {
  if (game.isPlay) {
    return;
  }
  game.isPlay = true;
  game.sound.play();
  game.timer = setInterval(function() {
    game.time += 1;
  }, 1000);
}

function gamePause() {
  if (!game.isPlay) {
    return;
  }
  game.isPlay = false;
  game.sound.pause();
  clearInterval(game.timer);
}

function gameOver() {
  if (!game.isPlay) {
    return;
  }
  gamePause();
  game.isOver = true;
}

function gameSound() {
  game.sound = createAudio('assets/bgm.m4a');
  game.sound.volume(0.1);
  game.sound.autoplay(false);
  game.sound.stop();
}

function gameButton() {
  startBtn = createButton('START');
  startBtn.mousePressed(gameStart);
  pauseBtn = createButton('PAUSE');
  pauseBtn.mousePressed(gamePause);
}