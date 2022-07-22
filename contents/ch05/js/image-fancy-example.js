let txt;
let img;
let isize = 180;
let isHide = false;
let button;
function preload() {
  txt = createDiv('This is an HTML string!');
  txt.style('color', 'crimson')
  button = createButton('click');
  img = createImg('assets/cloud-sword.gif');
  img.addClass('img');
  img.mousePressed(function() {
    img.hide();
    isHide = !isHide;
  });
  img.mouseWheel(function(event) {
    console.log(img.size())
    if (event.deltaY > 0) {
      if (isize < height - 20) {
        isize += 20;
      }
    } else {
      if (isize > 20) {
        isize -= 20;
      }
    }
    img.size(50, AUTO)
  });
}

function setup() {
  createCanvas(200, 200);
  button.mousePressed(function() {
    img.show();
    isHide ? img.show() : img.hide();
    isHide = !isHide;
  });
}

function draw() {
  background(220);
  button.html(isHide ? 'show' : 'hide');
  img.size(isize, AUTO);
  img.position(15, 15);
}
