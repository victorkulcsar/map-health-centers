import 'ol/ol.css';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorSource from 'ol/source/Vector';
import { Icon, Style } from 'ol/style';
import Vector from 'ol/layer/Vector';
import * as olProj from 'ol/proj';  

module.exports.PointsLayer = {

  generatePointsLayer() {

    let MapsPoint = [];   
    const selectPlaces  = require('../data/repository/places.json');  

    for(var i=0; i < selectPlaces.data.bairros[0].centros.length; i++) {
      MapsPoint.push(this.addPoint(selectPlaces.data.bairros[0].centros[i].local.lat , 
        selectPlaces.data.bairros[0].centros[i].local.lon,
        selectPlaces.data.bairros[0].centros[i].nome)        
        );
      }   

    const vectorSource = new VectorSource({
      features: MapsPoint,
    });

    
    const vectorLayer = new Vector({
      source: vectorSource,
    });  
    return vectorLayer;
  },

  addPoint(lat, lon, nome) {

    let iconFeature = new Feature({
      geometry: new Point(olProj.transform([lon, lat], 'EPSG:4326', 'EPSG:3857')),
      name: nome,     
    });

    let iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: '../src/data/images/icon-hospital.png',
      }),
    });

    iconFeature.setStyle(iconStyle);
    return iconFeature;

  },

  addPopUp(){

  }
}











