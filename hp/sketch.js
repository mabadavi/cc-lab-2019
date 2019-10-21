var font;
let house = "";
let json;
let gryffindor = "";
let hufflepuff = "";
let ravenclaw = "";
let slytherin = "";


function preload() {
  // font = loadFont('lumos.ttf');

  let url = 'https://www.potterapi.com/v1/sortinghat';
  json = loadJSON(url);

}

function setup() {
  createCanvas(800,300);
  console.log(json);
  if (json = '{0: "G", 1: "r", 2: "y", 3: "f", 4: "f", 5: "i", 6: "n", 7: "d", 8: "o", 9: "r"}') {
     gryffindor = JSON.parse('{0: "G", 1: "r", 2: "y", 3: "f", 4: "f", 5: "i", 6: "n", 7: "d", 8: "o", 9: "r"}');
     let house = gryffindor;
  }
  if (json = '{0: "S", 1: "l", 2: "y", 3: "t", 4: "h", 5: "e", 6: "r", 7: "i", 8: "n"}') {
     slytherin = JSON.parse('{0: "S", 1: "l", 2: "y", 3: "t", 4: "h", 5: "e", 6: "r", 7: "i", 8: "n"}');
     let house = slytherin;
  }
  if (json = '{0: "R", 1: "a", 2: "v", 3: "e", 4: "n", 5: "c", 6: "l", 7: "a", 8: "w"}') {
     ravenclaw = JSON.parse('{0: "R", 1: "a", 2: "v", 3: "e", 4: "n", 5: "c", 6: "l", 7: "a", 8: "w"}');
     let house = ravenclaw;
  }
  if (json = '{0: "H", 1: "u", 2: "f", 3: "f", 4: "l", 5: "e", 6: "p", 7: "u", 8: "f", 9: "f"}') {
     hufflepuff = JSON.parse('{0: "H", 1: "u", 2: "f", 3: "f", 4: "l", 5: "e", 6: "p", 7: "u", 8: "f", 9: "f"}');
     let house = hufflepuff;
   }
  textFont(font);
  textSize(50);
}

function draw() {
  background(51);
  fill(255);
  noStroke();
  text(json, 10, 200);

}
