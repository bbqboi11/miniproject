var ballpositions;
var ballspeed;
var ballcolor;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  mySound.play();
  ballpositions = [random(20, height - 20), random(20, width - 20)]
  ballspeed = [random(-5, 5), random(-5, 5)]
  ballcolor = [random(10, 80)]
}

function preload() {
  soundFormats("mp3");
  mySound = loadSound("soundtrack.mp3");
  bounceSound = loadSound("pop.mp3");
}

function draw() {
  background(318, 22, 100);
  if (frameCount % 1800 == 0) {
    mySound.play();
  }
  noStroke()
  fill(132, 52, ballcolor[0]);

  //Adding ball
  if (frameCount % 240 == 0 && ballpositions.length <= 10) {
    ballpositions.push(random(20, height - 20), random(20, width - 20))
    ballspeed.push(random(-5, 5), random(-5, 5))
  }
  if (ballpositions[0] && ballpositions[1]) {
    fill(132, 52, ballcolor[0]);
    ballAction(0, 1);
  }

  if (ballpositions[2] && ballpositions[3]) {
    fill(132, 52, ballcolor[1]);
    ballAction(2, 3);
  }

  if (ballpositions[4] && ballpositions[5]) {
    fill(132, 52, ballcolor[2]);
    ballAction(4, 5);
  }
  if (ballpositions[6] && ballpositions[7]) {
    fill(132, 52, ballcolor[3]);
    ballAction(8, 9);
  }
  if (ballpositions[10] && ballpositions[11]) {
    fill(132, 52, ballcolor[4]);
    ballAction(10, 11);
  }
}


//Kill
function mousePressed() {
  if (abs(mouseX - ballpositions[0]) < 20 && abs(mouseY - ballpositions[1]) < 20) {
    ballpositions.splice(0, 2)
    ballspeed.splice(0, 2)
  }
  if (abs(mouseX - ballpositions[2]) < 20 && abs(mouseY - ballpositions[3]) < 20) {
    ballpositions.splice(2, 2)
    ballspeed.splice(2, 2)
  }
  if (abs(mouseX - ballpositions[4]) < 20 && abs(mouseY - ballpositions[5]) < 20) {
    ballpositions.splice(4, 2)
    ballspeed.splice(4, 2)
  }
  if (abs(mouseX - ballpositions[6]) < 20 && abs(mouseY - ballpositions[7]) < 20) {
    ballpositions.splice(6, 2)
    ballspeed.splice(6, 2)
  }
  if (abs(mouseX - ballpositions[8]) < 20 && abs(mouseY - ballpositions[9]) < 20) {
    ballpositions.splice(8, 2)
    ballspeed.splice(8, 2)
  }
  if (abs(mouseX - ballpositions[10]) < 20 && abs(mouseY - ballpositions[11]) < 20) {
    ballpositions.splice(10, 2)
    ballspeed.splice(10, 2)
  }


}

function ballAction(x, y) {
  if (ballpositions[x] && ballpositions[y]) {
    circle(ballpositions[x], ballpositions[y], 40);

    ballpositions[x] = ballpositions[x] + ballspeed[x]
    ballpositions[y] = ballpositions[y] + ballspeed[y]

    //Top edg barrier
    if (ballpositions[x] < 20) {
      bounceSound.play();
      ballspeed[x] = ballspeed[x] * -1;
    }

    //Bottom edge barrier
    if (ballpositions[x] > height - 20) {
      bounceSound.play();
      ballspeed[x] = ballspeed[x] * -1;
    }

    //Right edge barrier

    if (ballpositions[y] > width - 20) {
      bounceSound.play();
      ballspeed[y] = ballspeed[y] * -1;
    }

    //Left edge barrier
    if (ballpositions[y] < 20) {
      bounceSound.play();
      ballspeed[y] = ballspeed[y] * -1;
    }
  }
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW && ballpositions.length == 0) {
    ballpositions = [random(20, height - 20), random(20, width - 20)]
  }
}
