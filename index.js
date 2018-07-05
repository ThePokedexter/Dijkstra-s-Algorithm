var args = process.argv.slice(2);

const Graph = require('./graph.js');
const MinHeapMap = require('./min-heap-map');

var g = new Graph();
g.addVertex('A', {'B': 3});


var test = new MinHeapMap();
test.insert('A', 5);
test.insert('B', 1);
test.insert('C', 2);
test.insert('D', 5);
test.insert('E', 4);
test.insert('F', 7);
test.insert('G', 0);

console.log(test.heap);

test.removeMin();
console.log('');

console.log(test.heap);

test.removeMin();

console.log(test.heap);

test.removeMin();

console.log(test.heap);