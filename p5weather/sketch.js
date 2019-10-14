// Exercise in Loading Weather Data from Open Weather Map
// Debug the code and add to it, be creative!

// Dan Schiffman video on API's:
// https://www.youtube.com/watch?v=ecT42O6I_WI&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r&index=6&t=0s


// We're going to store the temperature
let temperature = 0;
// We're going to store text about the weather
let weather = "";

var forecast, imageBrush;

var forecastIcons = {
'01d': 'http://openweathermap.org/img/wn/01d@2x.png',
'02d': 'http://openweathermap.org/img/wn/02d@2x.png',
'03d': 'http://openweathermap.org/img/wn/03d@2x.png',
'04d': 'http://openweathermap.org/img/wn/04d@2x.png',
'09d': 'http://openweathermap.org/img/wn/09d@2x.png',
'10d': 'http://openweathermap.org/img/wn/10d@2x.png',
'11d': 'http://openweathermap.org/img/wn/11d@2x.png',
'13d': 'http://openweathermap.org/img/wn/13d@2x.png',
'50d': 'http://openweathermap.org/img/wn/50d@2x.png',
'01n': 'http://openweathermap.org/img/wn/01n@2x.png',
'02n': 'http://openweathermap.org/img/wn/02n@2x.png',
'03n': 'http://openweathermap.org/img/wn/03n@2x.png',
'04n': 'http://openweathermap.org/img/wn/04n@2x.png',
'09n': 'http://openweathermap.org/img/wn/09n@2x.png',
'10n': 'http://openweathermap.org/img/wn/10n@2x.png',
'11n': 'http://openweathermap.org/img/wn/11n@2x.png',
'13n': 'http://openweathermap.org/img/wn/13n@2x.png',
'50n': 'http://openweathermap.org/img/wn/50n@2x.png'
}

let json;

function preload() {
  // The URL for the JSON data (replace "imperial" with "metric" for celsius)

  let url = "https://api.openweathermap.org/data/2.5/weather?q=New%20York&units=imperial&APPID=ec867d0fbf1b967a0d2276796ccaf410";
  json = loadJSON(url);
}

function setup() {
  createCanvas(400, 200)
  console.log(json);
  // Get the temperature
  temperature = json.main.temp;
  min_temp = json.main.temp_min;
  max_temp = json.main.temp_max;

  // Grab the description, look how we can "chain" calls.
  weatherdesc = json.weather[0].description;
  console.log(json.weather[0].icon);
  imageBrush = loadImage(forecastIcons[json.weather[0].icon]);

}

function draw() {
  background(255);
  fill(0);

  // Display all the stuff we want to display
  text("City: New York", 10, 50);
  text("Current temperature: " + temperature, 10, 70);
  text("High of: " + max_temp, 10, 90);
  text("Low of: " + min_temp, 10, 110);
  text("Forecast: " + weatherdesc, 10, 130);
  if (mouseIsPressed) {
    image(imageBrush, mouseX - imageBrush.width/2, mouseY - imageBrush.height/2);
  }
}
