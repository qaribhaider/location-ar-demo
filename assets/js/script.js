window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Office End 1',
            linksto: 'http://akqa.com/',
            location: {
                lat: 25.0905208,
                lng: 55.1486314,
            }
        },
        {
            name: 'Office End 2',
            linksto: 'http://akqa.com/',
            location: {
                lat: 25.098015,
                lng: 55.156384,
            }
        },
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        const latitude = place.location.lat;
        const longitude = place.location.lng;

        // add place name
        const placeText = document.createElement('a-link');
        placeText.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        placeText.setAttribute('title', place.name);
        placeText.setAttribute('href', place.linksto);
        placeText.setAttribute('scale', '15 15 15');

        placeText.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(placeText);
    });
}