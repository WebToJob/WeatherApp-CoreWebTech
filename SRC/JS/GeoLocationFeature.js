export function getLocationCoords() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const coordinates = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };
                resolve(coordinates);
            },
            (error) => {
                console.error('Unable to retrieve your location');
                reject(error);
            }
        );
    });
}