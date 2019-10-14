function setup() {
  let = createCanvas(640, 480);
  button = createButton('save');
  button.mousePressed(savePicture);
}

function savePicture() {
  save();
}


function draw() {
  let value = color(255, 204, 0);
  noStroke();
  if (mouseIsPressed) {
    fill(value);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 40, 40);
}

function keyPressed() {
  console.log(keyCode);
}

if (keyCode === 65) {
  fill(0,0,255);
}
else if (keyCode === 67) {
  fill(255,0,0);
}
elseif (keyCode === 69) {
  fill(0,255,0);
}


)
