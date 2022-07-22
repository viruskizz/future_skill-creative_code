// Create a global variable
let img;
let igif;
let igifsize = 200;
let button;
function preload() {
  img = createImg('assets/example.jpg');
  igif = createImg('assets/cloud-sword.gif');
  igif.mousePressed(function () {
    console.log(igif.value());
    igif.hide();
  });
  igif.mouseWheel(function (event) {
    if (event.deltaY > 0) {
      if (igifsize < height - 20) {
        igifsize += 20;
      }
    } else {
      if (igifsize > 20) {
        igifsize -= 20;
      }
    }
  });
}
function setup() {
  createCanvas(400, 400); // load the canvas
  button = createButton('play');
  button.mousePressed(function () {
    igif.show();
  });
}

function draw() {
  background(220);
  img.size(60, AUTO);
  img.position(mouseX + 20, mouseY + 20);
  igif.size(igifsize, AUTO);
  igif.position(15, 15);
}
