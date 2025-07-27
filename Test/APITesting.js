// fetching the API

fetch("https://api.weatherapi.com/v1/forecast.json?key=b09b9058c0214631a4391713252107&q=Rajkot&aqi=yes")
    .then((response) => response.json())
    .then((data) => {
        data = data.forecast.forecastday.map((day) => {
            return "Date: " + day.date + ", Condition: " + day.day.condition.text + ", Max Temp: " + day.day.maxtemp_c + "°C, Min Temp: " + day.day.mintemp_c + "°C" + ", Humidity: " + day.day.avghumidity + "%" + ", Icon: " + day.day.condition.icon;
        });
        console.log(data);
    })
    .catch((error) => {
        console.error("There has been a problem with your fetch operation:", error);
    });
