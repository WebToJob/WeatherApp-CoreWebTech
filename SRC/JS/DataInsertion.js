import {organizeWeatherData} from "./Dataorganizer.js";
// this insert data into the HTML file dynamically from the API.

// Targeting the HTML elements

const weatherIcon = document.getElementById('weather-icon-img');
const weatherCondition = document.getElementById('Weather-Condition');
const temperature = document.getElementById('weather-temp');
const windInfo = document.getElementById('wind');


// Function to insert data into the HTML file
// First Get the data from the API in an Array form using DataOrganization.js file.
const result = await organizeWeatherData("Rajkot")
weatherIcon.src = result['icon'];
weatherCondition.innerText = result['condition'];
temperature.innerHTML = `${result['temperature']}&deg;C`;
windInfo.innerHTML = `Wind Speed: ${result['windSpeedKph']} kph`;