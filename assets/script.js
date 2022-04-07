var apiKey = "fd9d2a26a731af77c92b99159b6ac1e4";
let keyCount = 0;

// Forloop for persisting the data onto HMTL page
// for (var i = 0; i < localStorage.length; i++) {
 
//   // Creates city list with local storage
//   var city = localStorage.getItem(i);
//   var cityName = (".list-group").addClass("list-group-item");
 
//   cityName.append("<li>" + city + "</li>");
//  }

function getIvuIndex(latEl, lonEl) {
  var otherQueryUrl =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    latEl +
    "&lon=" +
    lonEl +
    "&exclude=minutely,hourly,alerts&units=imperial&appid=" +
    apiKey;

    // // referencing the same cityName variable from the above for loop
    // let cityName = $(".list-group").addClass("list-group-item");
    // cityName.append("<li>" + response.name + "</li>");
    // // Local storage
    // let local = localStorage.setItem(keyCount, response.name);
    // keyCount = keyCount + 1;

  // gets uv index from api
  fetch(otherQueryUrl)
    .then(function (responses) {
      return responses.json();
    })
    .then(function (datas) {
      console.log("this is uvindex data ", datas);

      var uviEl = document.getElementById("uvIndex");
      uviEl.textContent = "Uv Index: " + datas.current.uvi + "%";

      //check uv index if it good, bad , moderate with color
      if (datas.current.uvi < 4) {
        uviEl.setAttribute("class", "badge-success");
      } else if (datas.current.uvi < 8) {
        uviEl.setAttribute("class", "badge-warning");
      } else {
        uviEl.setAttribute("class", "badge-danger");
      }

      //day 1 weather forcast
      var icon1Code = datas.daily[0].weather[0].icon;
      var icon1El = document.getElementById("icon1"); //weather icon
      icon1El.src = "https://openweathermap.org/img/w/" + icon1Code + ".png";

      var dateConvert = moment.unix(datas.daily[0].dt).format("MM/DD/YYYY");
      var date1El = document.getElementById("date1"); //display date
      date1El.textContent = dateConvert;

      var temp1El = document.getElementById("temp1");
      temp1El.textContent = "Temp: " + datas.daily[0].temp.day + "°F"; //display temp

      var wind1El = document.getElementById("wind1");
      wind1El.textContent = "Windspeed: " + datas.daily[0].wind_speed + " MPH"; // display wind

      var humidity1El = document.getElementById("hum1");
      humidity1El.textContent = "Humidity: " + datas.daily[0].humidity + "%"; //display humidity

      //day2 weather forcast

      var icon2Code = datas.daily[1].weather[0].icon;
      var icon2El = document.getElementById("icon2");
      icon2El.src = "https://openweathermap.org/img/w/" + icon2Code + ".png";

      var dateConvert = moment.unix(datas.daily[1].dt).format("MM/DD/YYYY");
      var date2El = document.getElementById("date2");
      date2El.textContent = dateConvert;

      var temp2El = document.getElementById("temp2");
      temp2El.textContent = "Temp: " + datas.daily[1].temp.day + "°F";

      var wind2El = document.getElementById("wind2");
      wind2El.textContent = "Windspeed: " + datas.daily[1].wind_speed + " MPH";

      var humidity2El = document.getElementById("hum2");
      humidity2El.textContent = "Humidity: " + datas.daily[1].humidity + "%";

      //day3 weather forcast

      var icon3Code = datas.daily[2].weather[0].icon;
      var icon3El = document.getElementById("icon3");
      icon3El.src = "https://openweathermap.org/img/w/" + icon3Code + ".png";

      var dateConvert = moment.unix(datas.daily[2].dt).format("MM/DD/YYYY");
      var date2El = document.getElementById("date3");
      date2El.textContent = dateConvert;

      var temp3El = document.getElementById("temp3");
      temp3El.textContent = "Temp: " + datas.daily[2].temp.day + "°F";

      var wind3El = document.getElementById("wind3");
      wind3El.textContent = "Windspeed: " + datas.daily[2].wind_speed + " MPH";

      var humidity3El = document.getElementById("hum3");
      humidity3El.textContent = "Humidity: " + datas.daily[2].humidity + "%";

      //day 4 weather forcast
      var icon4Code = datas.daily[3].weather[0].icon;
      var icon4El = document.getElementById("icon4");
      icon4El.src = "https://openweathermap.org/img/w/" + icon4Code + ".png";

      var dateConvert = moment.unix(datas.daily[3].dt).format("MM/DD/YYYY");
      var date4El = document.getElementById("date4");
      date4El.textContent = dateConvert;

      var temp4El = document.getElementById("temp4");
      temp4El.textContent = "Temp: " + datas.daily[3].temp.day + "°F";

      var wind3El = document.getElementById("wind4");
      wind3El.textContent = "Windspeed: " + datas.daily[3].wind_speed + " MPH";

      var humidity4El = document.getElementById("hum4");
      humidity4El.textContent = "Humidity: " + datas.daily[3].humidity + "%";

      //day 5 weather forcast
      var icon5Code = datas.daily[4].weather[0].icon;
      var icon5El = document.getElementById("icon5");
      icon5El.src = "https://openweathermap.org/img/w/" + icon5Code + ".png";

      var dateConvert = moment.unix(datas.daily[4].dt).format("MM/DD/YYYY");
      var date5El = document.getElementById("date5");
      date5El.textContent = dateConvert;

      var temp5El = document.getElementById("temp5");
      temp5El.textContent = "Temp: " + datas.daily[4].temp.day + "°F";

      var wind5El = document.getElementById("wind5");
      wind5El.textContent = "Windspeed: " + datas.daily[4].wind_speed + " MPH";

      var humidity5El = document.getElementById("hum5");
      humidity5El.textContent = "Humidity: " + datas.daily[4].humidity + "%";
    });

    
}

function getWeather(city) {
  var queryUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
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
}

//event listener for searching a city
 var searchButton = document.getElementById("searchButton");
 searchButton.addEventListener("click", function () {
  var city = document.getElementById("cityName").value;
   getWeather(city);

});


// function searchHistory(city) {
//   getWeather(city);
//   localStorage.setItem('city searched', city);
//   localStorage.getItem('city searched', city);
//   const cityBtn = document.createElemenet("button");
//   cityBtn.innerHTML = city;
//   document.body.appendChild(cityBtn);
// }

//get the city
// create a button with the name of the city
//set to local strorage the city
//when click city call a fetch again


//not my code ignore this just reference

// Get history from local storage if any
// searchEl.addEventListener("click", function () {
//   const searchTerm = cityEl.value;
//   getWeather(searchTerm); //
//   searchHistory.push(searchTerm);
//   localStorage.setItem("search", JSON.stringify(searchHistory));
//   renderSearchHistory();
// });
