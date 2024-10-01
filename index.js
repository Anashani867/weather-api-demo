// function renderWeather(weather){
//     console.log(weather)
//     var resultsContainer = document.querySelector("#weather-results")
// //creat h2 for name

// var city = document.createElement("h2")
// city.textContent = weather.name;
// resultsContainer.append(city);
// // creat p for humidity, wind, description, temp

// var temp = document.createElement("p")
// temp.textContent ="Temp " + weather.main.temp +" F";
// resultsContainer.append(temp);

// var humidity = document.createElement("p")
// humidity.textContent ="humidity " + weather.main.humidity +" %";
// resultsContainer.append(humidity);


// var wind = document.createElement("p")
// wind.textContent ="wind " + weather.main.temp_max +" mph " +weather.main.temp_min +" ° ";
// resultsContainer.append(wind);


// var weatherDetails = weather.weather[0];
// if (weatherDetails && weatherDetails.description)
// var description = document.createElement("p");
// description.textContent = weatherDetails.description
// resultsContainer.append(description);

// }



// function fetchWeather(name){

//     var url ="https://api.openweathermap.org/data/2.5/weather?q=" +name+ ",units=imperial,uk&appid=fd4f516ce586698c325884ed37339fe8"

//          fetch(url)
//         .then((response) => response.json())
//         .then((data) => renderWeather(data));
    

// }

// fetchWeather("jordan");


function renderWeather(weather) {
    console.log(weather);

    var resultsContainer = document.querySelector("#weather-results");
    
    resultsContainer.innerHTML = '';

    var city = document.createElement("h2");
    city.textContent = weather.name;
    resultsContainer.append(city);

    var temp = document.createElement("p");
    temp.textContent = "Temp: " + weather.main.temp + " F";
    resultsContainer.append(temp);

    var humidity = document.createElement("p");
    humidity.textContent = "Humidity: " + weather.main.humidity + " %";
    resultsContainer.append(humidity);

    var wind = document.createElement("p");
    wind.textContent = "Wind Speed: " + weather.wind.speed + " mph";
    resultsContainer.append(wind);

    var weatherDetails = weather.weather[0];
    if (weatherDetails && weatherDetails.description) {
        var description = document.createElement("p");
        description.textContent = "Description: " + weatherDetails.description;
        resultsContainer.append(description);
    }
}

function fetchWeather(name) {
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=imperial&appid=fd4f516ce586698c325884ed37339fe8`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => renderWeather(data))
        .catch((error) => console.error("Error fetching weather data:", error));
}

fetchWeather("Amman");



document.getElementById('weather-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var cityName = document.getElementById('city-name').value;
    fetchWeather(cityName);
});
