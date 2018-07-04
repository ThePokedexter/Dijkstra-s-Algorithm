var args = process.argv.slice(2);

const Graph = require('./graph.js');

var g = new Graph();
g.addVertex('A', {'B': 3});