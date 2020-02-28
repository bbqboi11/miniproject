var speedx
var speedy
var ballpositions = [30, 30, ];
var ballspeed = [2, 2, ];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

// function preload() {
//   soundFormats("mp3");
//   mySound = loadSound("");
// }

function draw() {
  background(220);
  noStroke();
  fill(132, 52, random(20, 80));
  circle(ballpositions[0], ballpositions[1], 20);

  ballpositions[0] = ballpositions[0] + ballspeed[0]
  ballpositions[1] = ballpositions[1] + ballspeed[1]

  if (ballpositions[0] == 10) {
    ballspeed[0] = 3;
    ballspeed[1] = 3;
  }






}
