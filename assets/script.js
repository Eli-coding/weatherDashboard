//git commit before anything

var apiKey = "fd9d2a26a731af77c92b99159b6ac1e4";

function getIvuIndex(latEl, lonEl) {
  var otherQueryUrl =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    latEl +
    "&lon=" +
    lonEl +
    "&exclude=minutely,hourly,alerts&units=imperial&appid=" +
    apiKey;

  fetch(otherQueryUrl)
    .then(function (responses) {
      return responses.json();
    })
    .then(function (datas) {
      console.log("this is uvindex data ", datas);

      var uviEl = document.getElementById("uvIndex");
      uviEl.textContent = "Uv Inex: " + datas.current.uvi + "%";


      var icon1Code = datas.daily[0].weather[0].icon;
      var icon1El = document.getElementById("icon1");
      icon1El.src = "http://openweathermap.org/img/w/" + icon1Code + ".png";

      var dateConvert = moment.unix(datas.daily[0].dt).format("MM/DD/YYYY");
      var date1El = document.getElementById("date1");
      date1El.textContent = dateConvert;

      var temp1El = document.getElementById("temp1");
      temp1El.textContent = "Temp: " + datas.daily[0].temp.day + "°F";

      var wind1El = document.getElementById("wind1");
      wind1El.textContent = "Windspeed: " + datas.daily[0].wind_speed + " MPH";

      var humidity1El = document.getElementById("hum1");
      humidity1El.textContent = "Humidity: " + datas.daily[0].humidity + "%";



      

      var icon2Code = datas.daily[1].weather[0].icon;
      var icon2El = document.getElementById("icon2");
      icon2El.src = "http://openweathermap.org/img/w/" + icon2Code + ".png";

      var dateConvert = moment.unix(datas.daily[1].dt).format("MM/DD/YYYY");
      var date2El = document.getElementById("date2");
      date2El.textContent = dateConvert;

      var temp2El = document.getElementById("temp2");
      temp2El.textContent = "Temp: " + datas.daily[1].temp.day + "°F";

      var wind2El = document.getElementById("wind2");
      wind2El.textContent = "Windspeed: " + datas.daily[1].wind_speed + " MPH";

      var humidity2El = document.getElementById("hum2");
      humidity2El.textContent = "Humidity: " + datas.daily[1].humidity + "%";
});
}


var searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", function () {
  var city = document.getElementById("cityName").value;
  console.log(city);

  var queryUrl =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    apiKey +
    "&units=imperial"; 

  fetch(queryUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //console.log(data);
      console.log("city " + data.name);
      console.log("temp " + data.main.temp);
      console.log("wind " + data.wind.speed);
      console.log("humidity " + data.main.humidity);
      console.log("lat: " + data.coord.lat);
      console.log("lon:" + data.coord.lon);

      //curent city weather
      var iconCode = data.weather[0].icon;
      var iconEl = document.getElementById("weatherIcon");
      iconEl.src = "http://openweathermap.org/img/w/" + iconCode + ".png";

      var cityEl = document.getElementById("city");
      cityEl.textContent = data.name;

      var dateConvert = moment.unix(data.dt).format("MM/DD/YYYY");
      var dateEl = document.getElementById("currentDate");
      dateEl.textContent = dateConvert;

      var tempEl = document.getElementById("temp");
      tempEl.textContent = "Temperature: " + data.main.temp + "°F";

      var windEl = document.getElementById("wind");
      windEl.textContent = "Windspeed: " + data.wind.speed + " MPH";

      var humidityEl = document.getElementById("humidity");
      humidityEl.textContent = "Humidity: " + data.main.humidity + "%";

      getIvuIndex(data.coord.lat, data.coord.lon);
    });
});
