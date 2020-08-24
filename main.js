import ObjMap from '/src/model/map.js';

const { PointsLayer } = require ('/src/usecases/PointsLayer.js');

//console.log(ObjMap.map.getLayers());
const Point = PointsLayer.generatePointsLayer();
//console.log(Point);
ObjMap.map.addLayer(Point);


