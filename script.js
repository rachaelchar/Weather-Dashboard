
// openweather API info for current conditions
var apiKey = "97c7846983898e7f83478c1bb1403a57";

var city = "";

// set an array of searched cities to be appended as buttons later
var searchedCities = [];





// create an img element for the icons provided by openweather
var icon = $("<img>");

// select the space for the name of the current city
var currentCity = $("#city-name");

// define date with moment.js
var currentDate = moment().format("MM/DD/YYYY");
console.log(currentDate);


currentCity.text(city);


// function render5DayForecast();
// function renderSearchHistory();
// function renderUVIndex();

// click event for search btn
$("#search-btn").on("click", function (event) {
    event.preventDefault();

    // get the value of the user's search
    city = $("#searched-city").val();
    alert(city);
    // add searched city to searchedCities array
    searchedCities.push(city);
    localStorage.setItem("searchedCities", searchedCities);

    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=imperial`;
    
    currentCity.text(city + " " + currentDate + " ");

    $.ajax({
        url: url,
        method: "GET"
    }).done(function (response) {
        console.log(response);

        function renderCurrentConditions() {

            var iconcode = response.weather[0].icon;

            var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
            icon.attr('src', iconurl);
            currentCity.append(icon);

            
            $("#city-temp").text("Temperature: " + response.main.temp);
            $("#city-humidity").text("Humidity: " + response.main.humidity);
            $("#city-wind-speed").text("Wind Speed: " + response.wind.speed);

        }

        var latitude = response.coord.lat;
        var longitude = response.coord.lon;

        var uvIndexUrl = `https://api.openweathermap.org/data/2.5/uvi?lat=${latitude}&;lon=${longitude}&APPID=${apiKey}`;
        renderCurrentConditions();

        $.ajax({
            url: uvIndexUrl,
            method: "GET"
        }).done(function (response) {
            console.log(response);
            $("#city-uv-index").text("UV Index: " + response.value);
        });

        // openweather API info for 5 day forecast
        // var forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&APPID=${apiKey}&units=imperial`;


    });

});











