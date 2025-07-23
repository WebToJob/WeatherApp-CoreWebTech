navigator.geolocation.getCurrentPosition((location) => {
    console.log("Getted " + location.coords.latitude + " " + location.coords.longitude);
}, (error) => {
    console.error("Error getting location: " + error)
});