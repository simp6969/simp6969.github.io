let lat = "";
let lng = "";
function getvalue(data) {
  if (data.list[0].temp.day > 10) {
    document.getElementById("outside").style.backgroundImage =
      "url(https://www.wallpaperflare.com/static/1006/43/819/desert-nature-sun-landscape-wallpaper-preview.jpg)";
    document.getElementById("outside").style.backgroundSize = "cover";
    console.log("its hot " + data.list[0].temp.day);
  }
  if (data.list[0].temp.day < 10) {
    console.log("its cold " + data.list[0].temp.day);
    document.getElementById("outside").style.backgroundImage =
      "url(data:image/jpeg;base64,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)";
    document.getElementById("outside").style.backgroundSize = "cover";
  }
  lat = "";
  lng = "";
}

function main() {
  lat += document.getElementById("input1").value;
  lng += document.getElementById("input2").value;

  fetch(
    `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lng}&cnt=1&appid=58b6f7c78582bffab3936dac99c31b25&units=metric`
  )
    .then((res) => res.json())
    .then((data) => getvalue(data));
}
function reveal() {
  document.getElementById("outside").style.display = "flex";
  document.getElementById("weather").style.display = "none";
}
// {
//   "city": {
//       "id": 2032593,
//       "name": "Bayanbaraat",
//       "coord": {
//           "lon": 106,
//           "lat": 47
//       },
//       "country": "MN",
//       "population": 1000,
//       "timezone": 28800
//   },
//   "cod": "200",
//   "message": 6.0317355,
//   "cnt": 1,
//   "list": [
//       {
//           "dt": 1691989200,
//           "sunrise": 1691963462,
//           "sunset": 1692015048,
//           "temp": {
//               "day": 22.69,
//               "min": 17.23,
//               "max": 25.25,
//               "night": 17.55,
//               "eve": 22.01,
//               "morn": 17.71
//           },
//           "feels_like": {
//               "day": 22.53,
//               "night": 17.4,
//               "eve": 21.91,
//               "morn": 17.68
//           },
//           "pressure": 1003,
//           "humidity": 58,
//           "weather": [
//               {
//                   "id": 500,
//                   "main": "Rain",
//                   "description": "light rain",
//                   "icon": "10d"
//               }
//           ],
//           "speed": 6.5,
//           "deg": 313,
//           "gust": 10.51,
//           "clouds": 73,
//           "pop": 0.72,
//           "rain": 1.95
//       }
//   ]
// }
