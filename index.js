var args = process.argv.slice(2);

const Graph = require('./graph.js');
const MinHeapMap = require('./min-heap-map');

var g = new Graph();
g.addVertex('A', {'B': 3});
g.addVertex('B', {'C': 5});

console.log(g.shortestPath('A', 'C'));