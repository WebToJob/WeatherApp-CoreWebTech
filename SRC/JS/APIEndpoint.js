// Loading the API key from file js.
import {API_KEY} from './Key.js';

// function to fetch weather data from the API and create a array of objects
export async function fetchWeatherData(city) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}
