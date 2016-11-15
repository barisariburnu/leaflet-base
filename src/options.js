var weatherOptions;
var pulsingIconOptions;
var locateOptions;

/*** Weather ***/
weatherOptions = {
    lang: "tr",
    units: "metric",
    position: "bottomright",
    appId: "6363ab9cb278e1e1c5d190abbc673bf9"
};

/*** Pulse Icon ***/
pulsingIconOptions = {
    iconSize: [15, 15],
    color: 'red',
    animate: true,
    heatbeat: 1
};

/*** Locate ***/
locateOptions = {
    position: 'topleft',
    drawCircle: false,
    showPopup: true,
    strings: {
        title: "Konumum",
        metersUnit: "metre",
        feetUnit: "feet",
        popup: "Bu noktaya {distance} {unit} çapta uzaklıktasın!",
        outsideMapBoundsMsg: "Haritanın sınırlarının dışında görünüyorsun!"
    }
};
