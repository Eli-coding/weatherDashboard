

var apiKey = "fd9d2a26a731af77c92b99159b6ac1e4";

var searchButton = document.getElementById("searchButton");  //don't touch
searchButton.addEventListener("click", function () {

    //console.log("click");
    var city = document.getElementById("cityName").value;
    // console.log(city);

    var queryUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial"; //look for display temp units

    fetch(queryUrl).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data);
        console.log("city " + data.name)
        console.log("temp " + data.main.temp)
        console.log("wind " + data.wind.speed)
        console.log("humidity " + data.main.humidity)
        console.log("lat: " + data.coord.lat);
        console.log("lon:" + data.coord.lon);

        var latEl=document.getElementById("lat");
        var latEl.textContent = data.coord.lat

        var tempEl = document.getElementById("temp");
        tempEl.textContent = data.main.temp

        var windEl = document.getElementById("wind");
        windEl.textContent = data.wind.speed

        var humidityEl = document.getElementById("humidity");
        humidityEl.textContent = data.main.humidity
    }) //repeat steps 

    

    var lonEl= data.coord.lon;

    var otherQueryUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latEl + "&lon=" + lonEl + "&exclude={part}&appid=" + apiKey;

    fetch(otherQueryUrl).then(function (responses) {
        return responses.json()
    }).then(function (datas) {
        console.log(datas);

    })
});



  //this one has the uv index and five day forcast
//use coor for lat and log

