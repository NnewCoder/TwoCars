

let CAR1_LEFT;
let CAR1_RIGHT;
let CAR2_LEFT;
let CAR2_RIGHT;
let car1;
let car2;
let objects = [];
let velocity = 0.5;
let radius = 20;

function setup() {
  createCanvas(800, 500);

  CAR1_LEFT = createVector(width / 8, height - 100)
  CAR1_RIGHT = createVector(3 * width / 8, height - 100)
  CAR2_LEFT = createVector(5 * width / 8, height - 100)
  CAR2_RIGHT = createVector(7 * width / 8, height - 100)

  car1 = CAR1_LEFT;
  car2 = CAR2_LEFT;



  const gap = 150;

  for (let i = 0; i < 10; i++) {
    const r1 = random(0, 1);
    const r2 = random(0, 1);

    let c1 = 0;
    let c2 = 0;
    /********************************************************************/
    if (r1 > 0.5) {
      c1 = 1;
    }
    else if (r1 < 0.5) {
      c1 = -1;
    }
    /****************************************************************/
    if (r2 > 0.5) {
      c2 = 1;
    }
    else if (r2 < 0.5) {
      c2 = -1;
    }


    const obj = {
      y: -(i + 1) * gap,
      c1,
      c2
    }

    objects.push(obj)
  }


}

function draw() {
  background(0);


  for (let i = 0; i < 10; i++) {
    objects[i].y += velocity;

    if (objects[i].c1 == -1)
      ellipse(CAR1_LEFT.x, objects[i].y, radius)
    if (objects[i].c1 == 1)
      ellipse(CAR1_RIGHT.x, objects[i].y, radius)

    if (objects[i].c2 == -1)
      ellipse(CAR2_LEFT.x, objects[i].y, radius)
    if (objects[i].c2 == 1)
      ellipse(CAR2_RIGHT.x, objects[i].y, radius)
  }


  stroke(255)
  strokeWeight(2)
  line(width / 2, 0, width / 2, height)

  strokeWeight(1)
  line(width / 4, 0, width / 4, height)
  line(3 * width / 4, 0, 3 * width / 4, height)

  rectMode(CENTER)
  fill(0, 0, 200)
  stroke(0, 0, 150)
  rect(car1.x, car1.y, 25, 75)


  rectMode(CENTER)
  fill(200, 0, 0)
  stroke(150, 0, 0)
  rect(car2.x, car2.y, 25, 75)



}

function keyPressed() {
  if (keyCode === LEFT_ARROW)
    car2 = CAR2_LEFT;
  if (keyCode === RIGHT_ARROW)
    car2 = CAR2_RIGHT;
}

function keyTyped() {
  if (key == 'a' || key == 'A')
    car1 = CAR1_LEFT;
  if (key == 'd' || key == 'D')
    car1 = CAR1_RIGHT;
}

