// script.js

// Define a custom icon for your marker
var customIcon = L.icon({
    iconUrl: 'icon.png',  // Specify the path to your custom icon image
    iconSize: [32, 32],               // Set the size of the icon
    iconAnchor: [16, 32],             // Set the anchor point of the icon
    popupAnchor: [0, -32]             // Set the popup anchor of the icon
});

// Initialize the Leaflet map
var map = L.map('map').setView([38.9637, 35.2433], 6.3); // Default center (New York City)

// Add a base map layer (you can use any tileset)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function getMarkerIcon(value) {
    if (value < 50) {
        return L.divIcon({ className: 'custom-marker custom-green' });
    }  else {
        return L.divIcon({ className: 'custom-marker custom-red' });
    }
}

function displayRandomPredictions() {
    var prediction1 = generateRandomPrediction(38.6742, 29.4059); // Trabzon
    var prediction2 = generateRandomPrediction(41.1956, 32.6227); // Kahramanmaraş
    var prediction3 = generateRandomPrediction(37.7819, 30.5665); // Isparta

    var markerIcon1 = getMarkerIcon(prediction1.value);
    var markerIcon2 = getMarkerIcon(prediction2.value);
    var markerIcon3 = getMarkerIcon(prediction3.value);

    var marker1 = L.marker([prediction1.lat, prediction1.lng], { icon: markerIcon1 }).addTo(map);
    var marker2 = L.marker([prediction2.lat, prediction2.lng], { icon: markerIcon2 }).addTo(map);
    var marker3 = L.marker([prediction3.lat, prediction3.lng], { icon: markerIcon3 }).addTo(map);

    marker1.bindPopup(`Region: Trabzon<br>Prediction: ${prediction1.prediction}<br>Value: ${prediction1.value}`).openPopup();
    marker2.bindPopup(`Region: Kahramanmaraş<br>Prediction: ${prediction2.prediction}<br>Value: ${prediction2.value}`).openPopup();
    marker3.bindPopup(`Region: Isparta<br>Prediction: ${prediction3.prediction}<br>Value: ${prediction3.value}`).openPopup();
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
    .custom-yellow {
        background-color: yellow;
    }
    .custom-red {
        background-color: red;
    }
`;

var markerStyle = document.createElement('style');
markerStyle.innerHTML = customMarkerStyles;
document.head.appendChild(markerStyle);

function generateRandomPrediction(lat, lng) {
    var rawValue = Math.random() * 100; // Replace this with your actual value calculation logic
    var value = rawValue.toFixed(2); // Format the value to two decimal places
    var prediction = value > 50 ? 'High risk' : 'Low risk';

    return { lat, lng, prediction, value };
}

// Trigger the random prediction function on page load
displayRandomPredictions();
