/*** Constructor ***/
var baseMaps = {};
var layers = [];
var map;
var countriesLayer;

/*** Layers ***/
for (var providerId in providers) {
    layers.push(providers[providerId]);
}
// Add layers all
L.control.iconLayers(layers).addTo(map);

map = L.map('map').setView([40.198868, 29.057695], 5);
countriesLayer = L.geoJson(countries).addTo(map);