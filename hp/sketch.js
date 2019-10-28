let font;
let house = "";
let json;
// let url = 'https://www.potterapi.com/v1/sortinghat';
// let gryffindor = "";
// let hufflepuff = "";
// let ravenclaw = "";
// let slytherin = "";


function preload() {
  // let url = 'https://www.potterapi.com/v1/sortinghat';
  // json = loadJSON(url);
  // font = loadFont('assets/lumos.ttf');
}

function buttonClick() {
  console.log("Clicked");
  let url = 'https://www.potterapi.com/v1/sortinghat';
  loadJSON(url, json);
  if (json["0"] == "G") {
     //gryffindor = JSON.parse('{0: "G", 1: "r", 2: "y", 3: "f", 4: "f", 5: "i", 6: "n", 7: "d", 8: "o", 9: "r"}');
     house ='Gryffindor!';
     console.log("Test");
  }
  if (json["0"] == "S") {
     //slytherin = JSON.parse('{0: "S", 1: "l", 2: "y", 3: "t", 4: "h", 5: "e", 6: "r", 7: "i", 8: "n"}');
     house = 'Slytherin!';
     console.log("Test2");
  }
  if (json["0"] == "R") {
     //ravenclaw = JSON.parse('{0: "R", 1: "a", 2: "v", 3: "e", 4: "n", 5: "c", 6: "l", 7: "a", 8: "w"}');
     house = 'Ravenclaw!';
     console.log("Test3");
  }
  if (json["0"] == "H") {
     //hufflepuff = JSON.parse('{0: "H", 1: "u", 2: "f", 3: "f", 4: "l", 5: "e", 6: "p", 7: "u", 8: "f", 9: "f"}');
     house = 'Hufflepuff';
     console.log("Test4");
   }
}

function setup() {
  createCanvas(800,300);
  // textFont(font);
  textSize(50);
}

function draw() {
  background(255);
  fill(0);
  noStroke();
  // textFont(font);
  buttonClick;
  text(house, 600, 200);
}
