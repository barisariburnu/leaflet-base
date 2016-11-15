/*** Constructor ***/
var layers = [];
var countriesLayer;
var weatherControl;
var iconLayerControl;

var map = L.map('map', { zoomControl: false }).setView([40.1670987,29.1081638], 10);

/*** Tile Layers ***/
for (var providerId in providers) {
    layers.push(providers[providerId]);
}

countriesLayer = L.geoJson(countries).addTo(map);

/*** Controls ***/
iconLayerControl = L.control.iconLayers(layers).addTo(map);
weatherControl = L.control.weather(weatherOptions).addTo(map);