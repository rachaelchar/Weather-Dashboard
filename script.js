
var city = "Boston, US";
var apiKey = "97c7846983898e7f83478c1bb1403a57";

var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=imperial`;
var forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&APPID=${apiKey}&units=imperial`;




// function renderCurrentConditions();
// function render5DayForecast();
// function renderSearchHistory();
// function renderUVIndex();

var icon = $("<img>");
var currentCity = $("#city-name");
currentCity.text(city);


$.ajax({
    url: url,
    method: "GET"
}).done(function (response) {
    console.log(response);
    var iconcode = response.weather[0].icon;

    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    icon.attr('src', iconurl);
    currentCity.append(icon);

    $("#city-temp").text("Temperature: " + response.main.temp);
    $("#city-humidity").text("Humidity: " + response.main.humidity);
    $("#city-wind-speed").text("Wind Speed: " + response.wind.speed);



});







