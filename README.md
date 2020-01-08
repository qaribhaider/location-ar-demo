# Location based AR Demo

Built on top of AR.js v2, to test the location based augemented reality functionality using web browsers. 

### Behind the scenes
* [Ar.js](https://github.com/jeromeetienne/AR.js) - Augmented Reality for web apps
* [Tutorial](https://medium.com/chialab-open-source/build-your-location-based-augmented-reality-web-app-c2442e716564) - Build your Location-Based Augmented Reality Web App

### Setup

Clone the repo on your machine, and update `js/script.js` based on your preferences, details below;

| Function | Details |
| ------ | ------ |
| loadPlaces() | Change `method` constant to `static` or `api`. API is used if you want to get nearest places automatically, if static is used then places defined in `loadPlaceStatic` will be picked |
| loadPlaceStatic() | If you are using static places option then add the places here, in the `PLACES` constant  |

