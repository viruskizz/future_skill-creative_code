let img;
let vid;
function preload() {
  img = createImg('assets/cloud.jpg');
  vid = createVideo([
    'assets/ffix-vivi.mp4',
    'assets/ffix-vivi.webm'
  ]);
  vid.autoplay();
  vid.showControls();
}

function setup() {
  createCanvas(300, 300);
  let txt = createDiv('This is an HTML string!');
  button = createButton('click');
}

function draw() {
  background(220)
  img.size(120, AUTO);
  img.position(0, 0);
  vid.size(360, AUTO);
  vid.position(0, img.height);
}
