/*** Constructor ***/
var layers = [];
var countriesLayer;
var weatherControl;
var iconLayerControl;
var locateControl;
var logoControl;
var measureControl;

var map = L.map('map', {
    zoomControl: false,
    visualClick: true,
    visualClickEvents: 'dblclick'
}).setView([40.1670987, 29.1081638], 4);

/*** Tile Layers ***/
for (var providerId in providers) {
    layers.push(providers[providerId]);
}

countriesLayer = L.geoJson(countries).addTo(map);

/*** Controls ***/
iconLayerControl = L.control.iconLayers(layers).addTo(map);
weatherControl = L.control.weather(weatherOptions).addTo(map);
logoControl = L.control.logo(logoOptions).addTo(map);
locateControl = L.control.locate(locateOptions).addTo(map);
measureControl = L.control.measure(measureOptions).addTo(map);