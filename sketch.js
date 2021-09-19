var ball;
var input, enter;
var gameState = 0;
var full;

function setup() {
  createCanvas(500, 500);

  input = createInput('').attribute('placeholder','Name');
  input.position(275, 350);
  input.size(120, 40);
  input.style("font-family: AppleMyungjo; font-size: 25px;");
  input.style("border: 5px outset; border-radius: 40px; text-align: center;");
  full = input.value();

  enter = createButton('Enter');
  enter.position(375, 425);
  enter.size(125, 50);
  enter.style("font-family: Optima; font-size: 25px; background-color: rgb(240, 113, 113);");
  enter.style("border: 5px outset; border-radius: 40px;");
  enter.mousePressed(quiz);
}

function draw() {
  background(250);

  if(gameState === 0) {
    
  textSize(70);
  textFont('Herculanum')
  textAlign(CENTER);
  text('Hello player', 250, 100);

  textSize(30);
  text('Please enter name:', 250, 260);
  } else if(gameState === 1) {
    textSize(35);
  textFont('Herculanum');
  textAlign(CENTER);
  text('When did Henry VII win', 250, 100);
  text('the Batttle of Bosworth?', 250, 130);

  textSize(21);
  textAlign(LEFT);
  text("Player Name: " + input.value(), 10, 200)
  } else if(gameState === 2) {
    textSize(45);
  textFont('Optima');
  textAlign(CENTER);
  fill(rgb(126, 240, 113))
  text('Well Done ' + input.value(), 250, 220);
  text('you are correct🥳!!', 250, 270);
  input1.hide();
  enter.hide();
  } else if(gameState === 3) {
    textSize(45);
    textFont('Optima');
    textAlign(CENTER);
    fill(rgb(240, 113, 113))
    text('Too Bad ' + input.value(), 250, 220);
    text('you are incorrect☹️', 250, 260);
    input1.hide();
    enter.hide();
  }

  drawSprites();
}

function quiz() {
  if(gameState === 0) {
    gameState = 1;

    input1 = createInput('').attribute('placeholder','Answer');
  input1.position(220, 350);
  input1.size(215, 40);
  input1.style("font-family: AppleMyungjo; font-size: 21px;");
  input1.style("border: 5px outset; border-radius: 40px; text-align: center;");

  input.hide();
  } else if (gameState === 1) {
    if (input1.value() === "22nd August 1485") {
      gameState = 2;
    } else {
      gameState = 3;
    } 
  }
}