let img;
function setup() {
  img = createImage(200, 200);
  img.loadPixels();
  createCanvas(400, 400);
}

function draw() {
  background(200);
  drawRect();
  drawLine();
  image(img, 0, 0);
}

function drawRect() {
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let red = random(255);
      let green = random(255);
      let blue = random(255);
      let alpha = 255;
      writeColor(img, x, y, red, green, blue, alpha);
    }
  }
  img.updatePixels();
}

function drawLine() {
  y = img.height / 2;
  for (x = 0; x < img.width; x++) {
    writeColor(img, x, y, 255, 0, 0, 255);
  }
  img.updatePixels();
}

// helper for writing color to array
function writeColor(image, x, y, red, green, blue, alpha) {
  let index = x * 4 + y * image.width * 4;
  image.pixels[index] = red;
  image.pixels[index + 1] = green;
  image.pixels[index + 2] = blue;
  image.pixels[index + 3] = alpha;
}