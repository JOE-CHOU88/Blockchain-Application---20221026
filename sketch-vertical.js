let objs = [];
function setup() {
  createCanvas(600, 700);
  background(30);

  for (let i = 0; i < 30; i++) {
    objs[i] = new RectObject(width - i * 100, height);
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
    this.rectWidth = random(50, 100);
    this.rectHeight = random(10, 100);
    this.r = random(0, 255);
    this.g = random(200, 255);
    this.b = random(200, 255);
    this.life = random(10, 200);

    if (random(0, 1) < 0.4) {
      this.xPos = _x;
      this.yPos = _y;
      this.posDegree = 0;
      this.posMoveRange = random(3, 10);
      this.rectWidth = random(5, 10);
      this.rectHeight = random(1, 10);
      this.r = random(0, 255);
      this.g = random(200, 255);
      this.b = random(200, 255);
      this.life = random(10, 200);
    }
  }
  step() {
    this.posDegree += 10;
    this.posMoveRange -= random(0.01, 0.3);
    this.xPos += sin(radians(this.posDegree)) * this.posMoveRange;
    this.yPos -= 3;
  }
  draw() {
    this.step();
    strokeWeight(2);

    // this.color1 = color(255, 255, 255);
    // this.color2 = color(255, 213, 0);
    // this.drawColor = lerpColor(this.color1, this.color2, 0.33);
    stroke(this.r, this.g, this.b);
    noFill();

    this.life -= 1;

    if (this.life > 0) {
      stroke(120);
      rect(this.xPos, this.yPos, this.rectWidth, this.rectHeight);
    } else if (this.life > -150) {
      rect(this.xPos, this.yPos, this.rectWidth, this.rectHeight);
    }
  }
}
