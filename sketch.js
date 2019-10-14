function setup() {
  let = createCanvas(640, 480);
  button = createButton('save');
  button.mousePressed(savePicture);
}

function savePicture() {
  save();
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
    noStroke();
  }
  ellipse(mouseX, mouseY, 80, 80);
}
