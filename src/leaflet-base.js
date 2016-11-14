/*** Constructor ***/
baseMaps = {};
var countriesLayer;


var map = L.map('map').setView([40.198868, 29.057695], 5);
countriesLayer = L.geoJson(countries).addTo(map);