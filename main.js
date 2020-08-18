import ObjMap from '/src/model/map.js';

const { generatePoints } = require ('/src/usecases/generatePoints.js');

//console.log(ObjMap.map.getLayers());
const Point = generatePoints(-23.5489,-46.6388);
//console.log(Point);
ObjMap.map.addLayer(Point);


