let objs = [];
function setup() {
  createCanvas(600, 700);
  background(30);

  for (let i = 0; i < 30; i++) {
    objs[i] = new RectObject(0, i * 100);
  }
}

function draw() {
  // background(30); // 動畫效果
  for (let i = 0; i < objs.length; i++) {
    objs[i].draw();
  }
}

class RectObject {
  constructor(_x, _y) {
    this.xPos = _x;
    this.yPos = _y;
    this.posDegree = 0;
    this.posMoveRange = random(3, 10);
    this.rectWidth = random(10, 100);
    this.rectHeight = random(50, 100);
    this.hue = random(100, 200);
    this.sat = random(60, 90);
    this.bright = random(60, 100);
    this.life = random(10, 350);
  }
  step() {
    this.posDegree += 10;
    this.posMoveRange -= random(0.01, 0.3);
    this.xPos += 3;
    this.yPos += sin(radians(this.posDegree)) * this.posMoveRange;
  }
  draw() {
    this.step();
    strokeWeight(2);
    colorMode(HSB);
    stroke(this.hue, this.sat, this.bright);
    noFill();

    this.life -= 1;
    if (this.life > 0) {
      rect(this.xPos, this.yPos, this.rectWidth, this.rectHeight);
    }
  }
}
