let img;
function preload() {
  img = loadImage('assets/cloud.jpg');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  image(img, 0, 0, img.width / 10, img.height / 10);
}