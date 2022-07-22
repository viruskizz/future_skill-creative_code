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

const meteor = {
  chance: 20,
  file: 'assets/meteorite.png',
  img: undefined,
  objs: [],
}

// 4. Add ship variable
const ship = {
  file: 'assets/spaceship.png',
  img: undefined,
  x: undefined,
  y: undefined,
}


function preload() {
  meteor.img = loadImage(meteor.file);
  // 4. Load ship img
  ship.img = loadImage(ship.file);
  ship.x = game.gx * game.bit / 2;
  ship.y = game.gy * game.bit - game.bit;
}

function setup() {
  const {bit, gx, gy} = game;
  createCanvas(bit * gx, bit * gy);
  initStars();
  gameSound();
  gameButton();
  initMeteors();
}

function draw() {
  background('black');
  renderStar();
  renderShip();
  crashShip();
  renderMeteors();
  // Text alway top
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

/**
 * 3. Meteors
 */
function initMeteors() {
  const maxY = ceil(game.gy / 2) * game.bit;
  for (let y = 0; y < maxY; y += game.bit * 2) {
    createMeteorsRow(y);
  }
}

function renderMeteors() {
  const { bit } = game;
  const { objs, img } = meteor;
  // load and move
  for (let i = 0; i < objs.length; i += 1) {
    image(img, objs[i].x, objs[i].y, bit, bit);
    if (game.isPlay && !game.isOver) {
      objs[i].y += 1;
    }
  }
  addMeteorsRow();
  clearMeteor()
}

function addMeteorsRow() {
  const { objs } = meteor;
  let nStart = 0;
  for (let i = 0; i < objs.length; i += 1) {
    if (objs[i].y < game.bit * 2) {
      nStart += 1;
    }
  }
  if (nStart === 0) {
    createMeteorsRow(0);
  }
}

function clearMeteor() {
  const { objs } = meteor;
  for (let i = 0; i < objs.length; i += 1) {
    if (objs[i].y > height) {
      objs.splice(i, 1);
    }
  }
}

function createMeteorsRow(y) {
  for (let x = 0; x < width; x += game.bit) {
    const r = random(0, 100);
    if (r < 100 - meteor.chance) {
      continue;
    }
    meteor.objs.push({
      x: x,
      y: y,
    });
  }
}

/**
 * Ship
 */
function renderShip() {
  const mv = 2;
  const {img, x, y} = ship;
  image(img, x, y, game.bit, game.bit);
  if (!game.isPlay) {
    return;
  }
  if (keyIsPressed && (key === 'ArrowRight' || key === 'd')) {
    ship.x += mv;
  }
  if (keyIsPressed && (key === 'ArrowLeft' || key === 'a')) {
    ship.x -= mv;
  }
  if (keyIsPressed && (key === 'ArrowDown' || key === 's')) {
    ship.y += mv;
  }
  if (keyIsPressed && (key === 'ArrowUp' || key === 'w')) {
    ship.y -= mv;
  }
}

function crashShip() {
  const {bit} = game;
  const {objs} = meteor;
  const offset = round(game.bit * 0.3);
  for (let i = 0; i < objs.length; i += 1) {
    const obj = objs[i];
    // ship is under of obj  ||  ship is upper of obj
    if (ship.y > obj.y + bit - offset || ship.y + bit < obj.y + offset) {
      continue;
    }
    // ship is left of obj  ||  ship is right of obj
    if (ship.x + bit < obj.x + offset || ship.x > obj.x + bit - offset) {
      continue;
    }
    gameOver();
  }
}