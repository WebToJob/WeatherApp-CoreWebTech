import {organizeWeatherData} from "./Dataorganizer.js";
import {getLocationCoords} from "./GeoLocationFeature.js";
// Asking for the geolocation of the user
// this insert data into the HTML file dynamically from the API.

// Targeting the HTML elements

const weatherIcon = document.getElementById('weather-icon-img');
const weatherCondition = document.getElementById('Weather-Condition');
const temperature = document.getElementById('weather-temp');
const windInfo = document.getElementById('wind');
const searchButton = document.getElementById('search-btn');
const inputField = document.getElementById('city-input');


async function updateWeatherData(city) {
    const forecastItem = document.getElementById('forecast-item');
    try {
        // Function to insert data into the HTML file
// First Get the data from the API in an Array form using DataOrganization.js file.
        const result = await organizeWeatherData(city)
        weatherIcon.src = result['icon'];
        weatherCondition.innerText = result['condition'];
        temperature.innerHTML = `${result['temperature']}&deg;C`;
        windInfo.innerHTML = `Wind Speed: ${result['windSpeedKph']} kph`;

// inserting remaining details on forecast section
// insert the remaining details on forecast section like humidity, pressure, visibility, etc. from the result object. into the forecast-item div tag
        forecastItem.innerHTML = `
        <p>City: ${result['city']}</p>
        <p>Region: ${result['region']}</p>
        <p>Coutry: ${result['country']}</p>
        <p>Coutry: ${result['localTime']}</p>
        <p>Humidity: ${result['humidity']}%</p>
        <p>Air Quality (PM2.5): ${result['airQuality']}</p>
`;
    } catch (error) {
        forecastItem.innerHTML = `<p style="color:red;">Could not fetch data. Please try again.</p>`
        weatherIcon.style.visibility = 'none';
    }
}

// Using async/await
async function useCoordinates() {
    try {
        const coords = await getLocationCoords();
        // use coords.latitude and coords.longitude here
        console.log(coords);
        // Call the updateWeatherData function with the coordinates
        const city = `${coords.latitude},${coords.longitude}`;
        await updateWeatherData(city);
    } catch (error) {
        // handle error
        console.log(error);
    }
}

// call the function
document.addEventListener('DOMContentLoaded', useCoordinates);


searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    const city = inputField.value.trim();
    if (city) {
        updateWeatherData(city).then(r => {
        })
    }
});
inputField.addEventListener('keydown', (e) => {

    if (e.key === "Enter") {
        e.preventDefault();
        const city = inputField.value.trim();
        if (city) {
            updateWeatherData(city).then(r => {
            })
        } else {
            alert("Please enter a city name");
        }
    }
});

// search how to do these
// logoImg.item(0).children.item(0).src = weatherIcon.src;
