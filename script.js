// script.js

function addLegend(map) {
  var legend = L.control({ position: "bottomright" });

  legend.onAdd = function () {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h4>Risk Legend</h4>";
    div.innerHTML +=
      '<div class="legend-item"><div class="circle" style="background-color: green;"></div class=""> <p>Low Risk<p></div>';
    div.innerHTML +=
      '<div class="legend-item"><div class="circle" style="background-color: orange;"></div class=""> <p>Medium Risk</p></div>';
    div.innerHTML +=
      '<div class="legend-item"><div class="circle" style="background-color: red;"></div class=""> <p>High Risk</div><p>';
    return div;
  };

  legend.addTo(map);
}

class Forest {
  constructor(lat, lng, prediction, value) {
    this.lat = lat;
    this.lng = lng;
    this.prediction = prediction;
    this.value = value;
  }
}
// Initialize the Leaflet map
var map = L.map("map").setView([38.9637, 35.2433], 6.3); // Default center (New York City)

// Add a base map layer (you can use any tileset)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

function getMarkerIcon(value) {
  if (value < 50) {
    return L.divIcon({ className: "custom-marker custom-green" });
  } else if (value < 75) {
    return L.divIcon({ className: "custom-marker custom-orange" });
  } else {
    return L.divIcon({ className: "custom-marker custom-red" });
  }
}

function displayPredictions() {
    var Usak = new Forest(38.7742, 29.4059, 50, "High Risk", 80); // Usak
    var Kahramanmarash = new Forest(41.1956, 32.6227, "Low Risk", 30); // Kahramanmarash
    var Isparta = new Forest(37.7419, 30.5665, "Medium Risk", 56); // Isparta
    var Istanbul = new Forest(41.15082, 28.9784, "Low Risk", 15); // Istanbul
    var Antalya = new Forest(36.8969, 30.5133, "Medium Risk", 45); // Antalya
    var Ankara = new Forest(39.8334, 32.8597, "Low Risk", 20); // Ankara
    var Bursa = new Forest(40.1724, 29.0570, "Medium Risk", 50); // Bursa
    var Adana = new Forest(37.1004, 35.3893, "Low Risk", 35); // Adana
    var Izmir = new Forest(38.4237, 27.2928, "Low Risk", 15); // Izmir
    var Mersin = new Forest(36.7959, 34.3179, "Low Risk", 25); // Mersin

    var UsakIcon = getMarkerIcon(Usak.value);
    var KahramanmarashIcon = getMarkerIcon(Kahramanmarash.value);
    var IspartaIcon = getMarkerIcon(Isparta.value);
    var IstanbulIcon = getMarkerIcon(Istanbul.value);
    var AntalyaIcon = getMarkerIcon(Antalya.value);
    var AnkaraIcon = getMarkerIcon(Ankara.value);
    var BursaIcon = getMarkerIcon(Bursa.value);
    var AdanaIcon = getMarkerIcon(Adana.value);
    var IzmirIcon = getMarkerIcon(Izmir.value);
    var MersinIcon = getMarkerIcon(Mersin.value);

  var UsakMarker = L.marker([Usak.lat, Usak.lng], {
    icon: UsakIcon,
  }).addTo(map);

  var KahramanmarashMarker = L.marker(
    [Kahramanmarash.lat, Kahramanmarash.lng],
    { icon: KahramanmarashIcon }
  ).addTo(map);
  var IspartaMarker = L.marker([Isparta.lat, Isparta.lng], {
    icon: IspartaIcon,
  }).addTo(map);
  var IstanbulMarker = L.marker([Istanbul.lat, Istanbul.lng], {
    icon: IstanbulIcon,
  }).addTo(map);
  var AntalyaMarker = L.marker([Antalya.lat, Antalya.lng], {
    icon: AntalyaIcon,
  }).addTo(map);
  var AnkaraMarker = L.marker([Ankara.lat, Ankara.lng], {
    icon: AnkaraIcon,
  }).addTo(map);
  var BursaMarker = L.marker([Bursa.lat, Bursa.lng], {
    icon: BursaIcon,
  }).addTo(map);
  var AdanaMarker = L.marker([Adana.lat, Adana.lng], {
    icon: AdanaIcon,
  }).addTo(map);
  var IzmirMarker = L.marker([Izmir.lat, Izmir.lng], {
    icon: IzmirIcon,
  }).addTo(map);
  var MersinMarker = L.marker([Mersin.lat, Mersin.lng], {
    icon: MersinIcon,
  }).addTo(map);

    UsakMarker.bindPopup(`Region: Usak , Value: ${Usak.value}%`).openPopup();
    KahramanmarashMarker.bindPopup(`Region: Kahramanmarash , Value: ${Kahramanmarash.value}%`).openPopup();
    IspartaMarker.bindPopup(`Region: Isparta , Value: ${Isparta.value}%`).openPopup();

    IstanbulMarker.bindPopup(`Region: Istanbul , Value: ${Istanbul.value}%`).openPopup();
    AntalyaMarker.bindPopup(`Region: Antalya , Value: ${Antalya.value}%`).openPopup();
    AnkaraMarker.bindPopup(`Region: Ankara , Value: ${Ankara.value}%`).openPopup();
    BursaMarker.bindPopup(`Region: Bursa , Value: ${Bursa.value}%`).openPopup();
    AdanaMarker.bindPopup(`Region: Adana , Value: ${Adana.value}%`).openPopup();
    IzmirMarker.bindPopup(`Region: Izmir , Value: ${Izmir.value}%`).openPopup();
    MersinMarker.bindPopup(`Region: Mersin , Value: ${Mersin.value}%`).openPopup();

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

var markerStyle = document.createElement("style");
markerStyle.innerHTML = customMarkerStyles;
document.head.appendChild(markerStyle);

displayPredictions();
addLegend(map);
