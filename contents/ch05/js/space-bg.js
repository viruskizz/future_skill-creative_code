let star;
let starField = [];

function setup() {
	createCanvas(
		window.innerWidth, 
		window.innerHeight
	);
	star = new Star(100, 100);
	
	for(i = 0; i < 150; i++){
		const randX = round(random(0, window.innerWidth));
		const randY = round(random(0, window.innerHeight));
		const randR = random(0.2, 2);
		starField.push(new StarField(randX, randY, randR));
	}
}

function draw() {
	background(0);
	
	starField.map((starPoint) => starPoint.draw());
	
	//check if star is out of view, if so render new star
	if(star.x > window.innerWidth + 100 ||
		 star.x < -100 || 
		 star.y > window.innerHeight + 100
		){
			star = new Star(100, 100);
	} else {
			star.draw();
	}
}

function Star(x, y) {
	this.x = round(random(0, window.innerWidth));
	this.y = -10;
	this.xv = round(random([-3,-2,2,3]));
	this.yv = random(0.5, 1.5);
	this.r = round(random(1, 3));
	this.startColor = "#fce1b4";
    this.endColor = [255, 255, 255, 0];
	
	this.draw = function(){
		circle(this.x, this.y, this.r);
		fill(this.startColor);
		noStroke();
		this.move();
	}
	this.move = function(){
		this.x += this.xv;
		this.y += this.yv;
	}
}

function StarField(x, y, r) {
	this.x = x;
	this.y = y;
	this.r = r;
	
	this.draw = function(){
		circle(this.x, this.y, this.r)
		fill(255);	
	}
}