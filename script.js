// script.js

class Forest {
    constructor(lat, lng, prediction, value) { 
        this.lat = lat
        this.lng = lng
        this.prediction = prediction
        this.value = value
     }
  }
// Initialize the Leaflet map
var map = L.map('map').setView([38.9637, 35.2433], 6.3); // Default center (New York City)

// Add a base map layer (you can use any tileset)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function getMarkerIcon(value) {
    if (value < 50) {
        return L.divIcon({ className: 'custom-marker custom-green' });
    }
    else if(value < 75){
        return L.divIcon({ className: 'custom-marker custom-orange' });
    }
    else {
        return L.divIcon({ className: 'custom-marker custom-red' });
    }
}

function displayPredictions() {
    var Trabzon = new Forest(38.6742, 29.4059, 50, "High Risk", 80); // Trabzon
    var Kahramanmarash = new Forest(41.1956, 32.6227, "Low Risk", 30); // Kahramanmarash
    var Isparta = new Forest(37.7819, 30.5665, "Medium Risk", 56); // Isparta

    var TrabzonIcon = getMarkerIcon(Trabzon.value);
    var KahramanmarashIcon = getMarkerIcon(Kahramanmarash.value);
    var IspartaIcon = getMarkerIcon(Isparta.value);

    var TrabzonMarker = L.marker([Trabzon.lat, Trabzon.lng], { icon: TrabzonIcon }).addTo(map);
    var KahramanmarashMarker = L.marker([Kahramanmarash.lat, Kahramanmarash.lng], { icon: KahramanmarashIcon }).addTo(map);
    var Isparta3 = L.marker([Isparta.lat, Isparta.lng], { icon: IspartaIcon }).addTo(map);

    TrabzonMarker.bindPopup(`Region: Trabzon<br>Prediction: ${Trabzon.prediction}<br>Value: ${Trabzon.value}`).openPopup();
    KahramanmarashMarker.bindPopup(`Region: Kahramanmarash<br>Prediction: ${Kahramanmarash.prediction}<br>Value: ${Kahramanmarash.value}`).openPopup();
    Isparta3.bindPopup(`Region: Isparta<br>Prediction: ${Isparta.prediction}<br>Value: ${Isparta.value}`).openPopup();
}

var customMarkerStyles = `
    .custom-marker {
        width: 10px;
        height: 10px;
        border-radius: 50%;
    }
    .custom-green {
        background-color: green;
    }
    .custom-orange {
        background-color: orange;
    }
    .custom-red {
        background-color: red;
    }
`;

var markerStyle = document.createElement('style');
markerStyle.innerHTML = customMarkerStyles;
document.head.appendChild(markerStyle);

displayPredictions();
