import ObjMap from '/src/model/map.js';
const { PointsLayer } = require ('/src/usecases/PointsLayer.js');
import Overlay from 'ol/Overlay';
import 'ol/ol.css';



const Points = PointsLayer.generatePointsLayer();
ObjMap.map.addLayer(Points);
var element = document.getElementById('popup');


var popup = new Overlay({
  element: element,
  positioning: 'bottom-center',
  stopEvent: false,
  offset: [0, -50],
});
ObjMap.map.addOverlay(popup);

// display popup on click
ObjMap.map.on('click', function (evt) {    
    var feature = ObjMap.map.forEachFeatureAtPixel(evt.pixel, function (feature) {
    return feature;
  });
  if (feature) {   
    jQuery(element).popover('dispose');
 
    var coordinates = feature.getGeometry().getCoordinates();
    popup.setPosition(coordinates); 
    
    var nome = feature.get('name');
    console.log(nome);

    jQuery(element).popover({
      placement: 'top',
      html: true,
      content: nome,
    });
    
    jQuery(element).popover('show');
    
  } else {
    jQuery(element).popover('dispose');
  }
});

// change mouse cursor when over marker
ObjMap.map.on('pointermove', function (e) {
  if (e.dragging) {
    jQuery(element).popover('dispose');   
    return;
  }
  feature = null;
  var pixel = ObjMap.map.getEventPixel(e.originalEvent);
  var hit = ObjMap.map.hasFeatureAtPixel(pixel);  
  ObjMap.map.getTarget().style.cursor = hit ? 'pointer' : '';
});
