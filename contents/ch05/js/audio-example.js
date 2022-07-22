let aud;
let button;
let isPause;
function preload() {
  aud = createAudio('assets/01-blinded-by-light.mp3');
  aud.autoplay();
  aud.volume(0.5);
  aud.speed(1.0);
  aud.mouseClicked(function() {
    if (isPause) {
      aud.play();
    } else {
      aud.pause();
    }
    isPause = !isPause;
  });
  aud.showControls();
  aud.mouseWheel(function(event) {
    const sp = aud.speed();
    if (event.deltaY > 0) {
      if (sp <= 2) {
        aud.speed(sp + 0.2);
      }
    } else {
      if (sp >= 0.2) {
        aud.speed(sp - 0.2);
      }
    }
  });
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  aud.position(10, 10);
  aud.size(360, AUTO);
}
