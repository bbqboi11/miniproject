var speedx
var speedy
var ballpositions = [50, 50, ];
var ballspeed = [-5, 2, ];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

function preload() {
  soundFormats("mp3");
  mySound = loadSound("soundtrack.mp4");
}

function draw() {
  background(220);
  noStroke()
  fill(132, 52, random(20, 80));
  circle(ballpositions[0], ballpositions[1], 20);

  ballpositions[0] = ballpositions[0] + ballspeed[0]
  ballpositions[1] = ballpositions[1] + ballspeed[1]

  //Kill


  //Top edg barrier
  if (ballpositions[0] == 10) {

    ballspeed[0] = ballspeed[0] * -1;
  }

  //Bottom edge barrier
  if (ballpositions[0] == height - 10) {
    ballspeed[0] = ballspeed[0] * -1;
  }

  //Right edge barrier

  if (ballpositions[1] == width - 10) {
    ballspeed[1] = ballspeed[1] * -1;
  }

  //Left edge barrier
  if (ballpositions[1] == 10) {
    ballspeed[1] = ballspeed[1] * -1;
  }

}

function mousePressed() {
  if (mouseX - ballpositions[0] < 10 && mouseY - ballpositions[1] < 10){
ballpositions.splice(0,2)
  }
    
}
