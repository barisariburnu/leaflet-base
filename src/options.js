var weatherOptions;
var pulsingIconOptions;
var locateOptions;
var logoOptions;
var measureOptions;

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

/*** Logo ***/
logoOptions = {
    position: 'topleft',
    height: '50px',
    width: '50px',
    target: '_blank',
    image: 'http://openweathermap.org/img/w/04d.png',
    link: 'http://barisariburnu.github.io'
};

/*** Measure ***/
measureOptions = {
    position: 'topleft',
    primaryLengthUnit: 'meters',
    secondaryLengthUnit: 'kilometers',
    primaryAreaUnit: 'sqmeters', secondaryAreaUnit: 'acres',
    activeColor: '#ABE67E',
    completedColor: '#C8F2BE',
    popupOptions: {className: 'leaflet-measure-resultpopup', autoPanPadding: [10, 10]},
    localization: 'tr',
    decPoint: '.',
    thousandsSep: ','
};