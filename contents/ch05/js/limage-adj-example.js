let img;
function preload() {
  img = loadImage('assets/cloud.jpg');
}

function setup() {
  createCanvas(400, 400);
  let d = pixelDensity();
  img.loadPixels();
  console.log(img.pixels)
  for (let i = 0; i < img.pixels.length; i += 4) {
    img.pixels[i] = 128;
  }
  img.updatePixels();
}

function draw() {
  background(220);
  image(img, 0, 0, 200, 200);
}