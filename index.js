var args = process.argv.slice(2);

const Graph = require('./graph.js');
const MinHeapMap = require('./min-heap-map');

var g = new Graph();
g.addVertex('A', {'B': 3});


var test = new MinHeapMap();
test.insert({vertex: 'A', distance: '5'});
test.insert({vertex: 'B', distance: '1'});
test.insert({vertex: 'C', distance: '2'});
test.insert({vertex: 'D', distance: '5'});
test.insert({vertex: 'E', distance: '4'});
test.insert({vertex: 'F', distance: '7'});
test.insert({vertex: 'G', distance: '0'});

console.log(test.heap);

test.removeMin();
console.log('');

console.log(test.heap);

// test.removeMin();

// console.log(test.heap);

// test.removeMin();

// console.log(test.heap);