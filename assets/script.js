//git commit before anything

var apiKey = "fd9d2a26a731af77c92b99159b6ac1e4";

function getIvuIndex (latEl,lonEl){
   

    var otherQueryUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latEl + "&lon=" + lonEl + "&exclude=minutely,hourly,alerts&units=imperial&appid=" + apiKey;

    fetch(otherQueryUrl).then(function (responses) {
        return responses.json()
    }).then(function (datas) {
        console.log("this is uviindex data ",datas);

        var uvIEl =document.getElementById("uvIndex");
        uvIEl.textContent = "UV Index: " + datas.current.uvi; 

    });
};




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

        var iconCode = data.weather[0].icon;
        var iconEl = document.getElementById("weatherIcon");
        iconEl.src = "http://openweathermap.org/img/w/" + iconCode + ".png";

        var cityEl = document.getElementById("city");
        cityEl.textContent =  data.name;
        
        var dateConvert = moment.unix(data.dt).format("MM/DD/YYYY");
        var dateEl = document.getElementById("currentDate");
        dateEl.textContent = "Date: "+dateConvert;

        var tempEl = document.getElementById("temp");
        tempEl.textContent = "Temperature: " + data.main.temp + "°F";

        var windEl = document.getElementById("wind");
        windEl.textContent ="Windspeed: " + data.wind.speed + " MPH";

        var humidityEl = document.getElementById("humidity");
        humidityEl.textContent = "Humidity: " + data.main.humidity + "%";

        
        getIvuIndex(data.coord.lat,data.coord.lon );
       
    }); //repeat steps 

    

    
});



  //this one has the uv index and five day forcast
//use coor for lat and log

