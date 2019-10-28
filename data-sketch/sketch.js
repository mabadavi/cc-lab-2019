var mapimg;
var img;

var clat = 0;
var clon = 0;

//31.2304° N, 121.4737° E

var lat = 31.2304;
var lon = 121.4737;

var zoom = 1;

var aliens;

function preload() {
  mapimg = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1,0,0/1024x512?access_token=pk.eyJ1IjoibWFyeWFubmJhZCIsImEiOiJjazJhZ3dxYjMxYWh2M2lwYmV5ZjR2dDZlIn0.WanU8gK7BhGIFkpBcq3yiw');
  aliens = loadStrings('ufo_sighting_data.csv');
  // img = loadImage('alien.png');
}

function mercX(lon) {
  lon = radians(lon);
  var a = (256 / PI) * pow(2, zoom);
  var b = lon + PI;
  return a * b;
}

function mercY(lat) {
  lat = radians(lat);
  var a = (256 / PI) * pow(2, zoom);
  var b = tan(PI/4 + lat/2);
  var c = PI - log(b);
  return a * c;
}

function setup() {
  createCanvas(1024,512);
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(mapimg,0,0);

  var cx = mercX(clon);
  var cy = mercY(clat);

  for (var i = 0; i < aliens.length; i++) {
    var data = aliens[i].split(/,/);
    // console.log(data);
    var lat = data[11];
    var lon = data[12];

    var x = mercX(lon) - cx;
    var y = mercY(lat) - cy;

    fill(90, 147, 74);
    ellipse(x, y, 10, 10);
  }



  // image(img, x, y, 20, 20);
}

// function draw(){
//
//
// }
