// loading env variables
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.API_KEY;
// function to fetch weather data from the API and create a array of objects
export async function fetchWeatherData(city) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${"london"}&aqi=yes`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
}
