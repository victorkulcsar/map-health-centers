import 'ol/ol.css';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorSource from 'ol/source/Vector';
import { Icon, Style } from 'ol/style';
import Vector from 'ol/layer/Vector';
import * as olProj from 'ol/proj';

module.exports = {
  generatePoints(lat, lon) {
    console.log(lat);
    const iconFeature = new Feature({
      geometry: new Point(olProj.transform([lon, lat], 'EPSG:4326', 'EPSG:3857')),
      name: 'Null Island',
      population: 4000,
      rainfall: 500,
    });

   const iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: '../src/data/images/icon.png',
      }),
    });

    iconFeature.setStyle(iconStyle);

    const vectorSource = new VectorSource({
      features: [iconFeature],
    });

    const vectorLayer = new Vector({
      source: vectorSource,
    });

    return vectorLayer;
  }
}











