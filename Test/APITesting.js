// fetching the API

fetch("https://api.weatherapi.com/v1/current.json?key=q=London&aqi=yes")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error("There has been a problem with your fetch operation:", error);
    });
