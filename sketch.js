var ball, ball1;
var input, input1, enter, enter1;
var gameState = 1;
var full;


function setup() {
  createCanvas(500, 500);

  ball = Math.round(random(1, 300), 0);
  ball1 = Math.round(random(1, 300), 0);
  full = ball + ball1;

  input = createInput('').attribute('placeholder','Name');
  input.position(380, 100);
  input.size(120, 40);
  input.style("font-family: AppleMyungjo; font-size: 25px;");
  input.style("border: 5px outset; border-radius: 40px; text-align: center;");

  enter = createButton('Enter');
  enter.position(375, 475);
  enter.size(125, 50);
  enter.style("font-family: Optima; font-size: 25px; background-color: rgb(240, 113, 113);");
  enter.style("border: 5px outset; border-radius: 40px;");
  enter.mousePressed(quiz);

  input1 = createInput('').attribute('placeholder','Answer');
  input1.position(220, 400);
  input1.size(215, 40);
  input1.style("font-family: AppleMyungjo; font-size: 21px;");
  input1.style("border: 5px outset; border-radius: 40px; text-align: center;");
}

function draw() {
  background(250);

   if(gameState === 1) {
    textSize(35);
  textFont('Herculanum');
  textAlign(CENTER);
  text(ball + " + " + ball1, 250, 175);
  textSize(21);
  textAlign(LEFT);
  text("Player Name: " + input.value(), 10, 250);
  textAlign(RIGHT);
  text("Enter your name please: ", 500, 20);
  } else if(gameState === 2) {
    textSize(45);
  textFont('Optima');
  textAlign(CENTER);
  fill(rgb(126, 240, 113));
  text('Well Done ' + input.value(), 250, 220);
  text('you are correct🥳!!', 250, 270);
  input1.hide();
  input.hide();
  enter.hide();

  enter1 = createButton('Do another question');
  enter1.position(300, 425);
  enter1.size(275, 50);
  enter1.style("font-family: Optima; font-size: 25px; background-color: rgb(113, 240, 208);");
  enter1.style("border: 5px outset; border-radius: 40px;");
  enter1.mousePressed(quiz);
  } else if(gameState === 3) {
    textSize(45);
    textFont('Optima');
    textAlign(CENTER);
    fill(rgb(240, 113, 113))
    text('Too Bad ' + input.value(), 250, 220);
    text('you are incorrect☹️', 250, 260);
    input1.hide();
    input.hide();
    enter.hide();

  enter1 = createButton('Retry');
  enter1.position(375, 425);
  enter1.size(125, 50);
  enter1.style("font-family: Optima; font-size: 25px; background-color: rgb(113, 240, 208);");
  enter1.style("border: 5px outset; border-radius: 40px;");
  enter1.mousePressed(quiz);
  }

  drawSprites();
}

function quiz() {
 if (gameState === 1) {
    if (input1.value() === String(full)) {
      gameState = 2;
      console.log(full);
    } else {
      gameState = 3;
      console.log(full);
    }
  } else {
    location.reload();
  }
}