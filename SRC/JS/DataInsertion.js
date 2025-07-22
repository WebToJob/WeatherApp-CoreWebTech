import {organizeWeatherData} from "./Dataorganizer.js";
// this insert data into the HTML file dynamically from the API.

// Targeting the HTML elements

const weatherIcon = document.getElementById('weather-icon-img');
const weatherCondition = document.getElementById('Weather-Condition');
const temperature = document.getElementById('weather-temp');
const windInfo = document.getElementById('wind');


// The city name is hardcoded as "Jaipur" for now, but you can change it to any city you want.
let city = "Jaipur";

// Adding the searching functionality to the search bar
const searchButton = document.getElementById('search-btn');

async function search() {
    const inputField = await document.getElementById('city-input');
    city = await inputField.value;
    console.log(city);
    // Function to insert data into the HTML file
// First Get the data from the API in an Array form using DataOrganization.js file.
    const result = await organizeWeatherData(city);
    weatherIcon.src = result['icon'];
    weatherCondition.innerText = result['condition'];
    temperature.innerHTML = `${result['temperature']}&deg;C`;
    windInfo.innerHTML = `Wind Speed: ${result['windSpeedKph']} kph`;

// inserting remaining details on forecast section
// insert the remaining details on forecast section like humidity, pressure, visibility, etc. from the result object. into the forecast-item div tag
    const forecastItem = document.getElementById('forecast-item');
    forecastItem.innerHTML = `
        <p>City: ${result['city']}</p>
        <p>Region: ${result['region']}</p>
        <p>Country: ${result['country']}</p>
        <p>Time: ${result['localTime']}</p>
        <p>Humidity: ${result['humidity']}%</p>
        <p>Air Quality (PM2.5): ${result['airQuality']}</p>
`;

}

searchButton.addEventListener('click', search);
const result = await organizeWeatherData("Rajkot")
weatherIcon.src = result['icon'];
weatherCondition.innerText = result['condition'];
temperature.innerHTML = `${result['temperature']}&deg;C`;
windInfo.innerHTML = `Wind Speed: ${result['windSpeedKph']} kph`;