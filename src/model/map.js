import 'ol/ol.css';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import * as olProj from 'ol/proj';

export default {
    map: new Map({
        layers: [
            new TileLayer({
                source: new OSM(),
            })],
        target: document.getElementById('map'),
        view: new View({
            center: olProj.transform([-46.6388, -23.5489], 'EPSG:4326', 'EPSG:3857'),
            zoom: 13,
        }),
    }),


}