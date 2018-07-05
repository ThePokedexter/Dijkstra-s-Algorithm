var args = process.argv.slice(2);

const Graph = require('./graph.js');
const MinHeapMap = require('./min-heap-map');

var g = new Graph();
g.addVertex('AB5');
g.addVertex('BC4');
g.addVertex('CD8');
g.addVertex('DC8');
g.addVertex('DE6');
g.addVertex('AD5');
g.addVertex('CE2');
g.addVertex('EB3');
g.addVertex('AE7');

console.log(g.vertices);
console.log(g.shortestPath('A', 'C'));