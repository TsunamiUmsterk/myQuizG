var ball;
var push;
var yul;
var gameState = 2;
var input, input2;

function setup() {
     createCanvas(600, 600);

     ball = createSprite(300, 300, 20, 20);

     push = createButton('Change co-ordinates');
     push.position(546, 630);
     push.size(140, 55);
     push.style('background-color: white; font-size: 15px; border: inset 2px;');
     push.mousePressed(changeGameState);

     input = createInput('').attribute('placeholder','x');
     input.position(300, 640);
     input.size(140, 35);
     input.style('background-color: white; font-size: 15px; border: inset 2px;');

}

function draw() {
     background(250);

     textSize(40);
     textFont('Brush Script MT')
     text('x: ' + ball.x + ' y: ' + ball.y, 10, 30);
     textSize(15);

if(keyDown(UP_ARROW)) {
     ball.y -= 3;
}
if(keyDown(DOWN_ARROW)) {
     ball.y += 3;
}
if(keyDown(LEFT_ARROW)) {
     ball.x -= 3;
}
if(keyDown(RIGHT_ARROW)) {
     ball.x += 3;
}

if(gameState === 2) {
     textSize(25);
     textFont('Brush Script MT')
     text(yul, 300, 30);
}
     drawSprites();
}

function changeGameState() {
     yul = input.value;
     gameState = 2;
}