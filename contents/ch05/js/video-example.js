let vid;
let button;
let isPause;
function preload() {
  vid = createVideo([
    'assets/ffix-vivi.mp4',
    'assets/ffix-vivi.webm'
  ]);
  vid.autoplay();
  vid.volume(0.5);
  vid.speed(1.0);
  vid.mouseClicked(function() {
    if (isPause) {
      vid.play();
    } else {
      vid.pause();
    }
    isPause = !isPause;
  });
  vid.showControls();
  vid.mouseWheel(function(event) {
    const sp = vid.speed();
    if (event.deltaY > 0) {
      if (sp <= 2) {
        vid.speed(sp + 0.2);
      }
    } else {
      if (sp >= 0.2) {
        vid.speed(sp - 0.2);
      }
    }
  });
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  vid.position(10, 10);
  vid.size(360, AUTO);
}
