let img;
let igif;
let igifsize = 200;
let isHide = false;
let button;
function preload() {
  let txt = createDiv('This is an HTML string!');
  button = createButton('click');
  img = createImg('assets/example.jpg');
  igif = createImg('assets/cloud-sword.gif');
  igif.mousePressed(function() {
    igif.hide();
    isHide = !isHide;
  });
  igif.mouseWheel(function(event) {
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
  createCanvas(400, 400);
  button.mousePressed(function() {
    igif.show();
    isHide ? igif.show() : igif.hide();
    isHide = !isHide;
  });
}

function draw() {
  background(220);
  button.html(isHide ? 'show' : 'hide');
  img.size(60, AUTO);
  img.position(mouseX + 20, mouseY + 20);
  igif.size(igifsize, AUTO);
  igif.position(15, 15);
}
