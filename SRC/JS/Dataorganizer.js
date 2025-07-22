// this will organize the data from the API and fetch related data from the API
import {fetchWeatherData} from './APIEndpoint.js';

export async function organizeWeatherData(city) {
    try {
        const data = await fetchWeatherData(city);
        return {
            city: data.location.name,
            region: data.location.region,
            country: data.location.country,
            localTime: data.location.localtime,
            temperature: data.current.temp_c,
            condition: data.current.condition.text,
            icon: data.current.condition.icon,
            windSpeedKph: data.current.wind_kph,
            humidity: data.current.humidity,
            windSpeed: data.current.wind_kph,
            airQuality: data.current.air_quality.pm2_5
        };
    } catch (error) {
        console.error('Error organizing weather data:', error);
        throw error;
    }
}
