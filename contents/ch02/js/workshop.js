/**
 * my rainbow pallete
 * https://colorhunt.co/palette/ab46d2ff6fb555d8c1fcf69c
 * yellow #FCF69C
 * green  #55D8C1
 * pink   #FF6FB5
 * purple #AB46D2
 */
 function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(220);
  myCandy(200, 200);
  myCandy(100, 100);
}
function myCandy(x, y) {
  // Write Your Code
  const l = 60;
  const s = 100;
  const r = s / 2;
  const w = 20;
  // create stick
  stroke('#7F8487');
  strokeWeight(8);
  line(x, y, x, y + l + r);
  // create candy from big to small
  strokeWeight(0);
  fill('#FCF69C');
  ellipse(x, y, s);
  fill('#55D8C1');
  ellipse(x, y, s - w)
  fill('#FF6FB5');
  ellipse(x, y, s - w * 2);
  fill('#AB46D2');
  ellipse(x, y, s - w * 3)
}