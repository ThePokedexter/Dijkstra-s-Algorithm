var args = process.argv.slice(2);

const Graph = require('./graph.js');

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
console.log('1. The distance of the route A-B-C: ' + g.lengthOfPath('ABC'));
console.log('2. The distance of the route A-D: ' + g.lengthOfPath('AD'));
console.log('3. The distance of the route A-D-C: ' + g.lengthOfPath('ADC'));
console.log('4. The distance of the route A-E-B-C-D: ' + g.lengthOfPath('AEBCD'));
console.log('5. The distance of the route A-E-D: ' + g.lengthOfPath('AED'));
console.log('6. The number of trips starting at C and ending at C with a maximum of 3 stops: ' + g.numPathsMaxStops('C', 'C', 3));
console.log('7. The number of trips starting at A and ending at C with exactly 4 stops: ' + g.numPaths('A', 'C', 4));
console.log('8. The length of the shortest route (in terms of distance to travel) from A to C: ' + g.shortestPath('A', 'C'));
console.log('9. The length of the shortest route (in terms of distance to travel) from B to B: ' + g.shortestPath('B', 'B'));
console.log('10. The number of different routes from C to C with a distance of less than 30: ' + g.numPathsMaxDistance('C', 'C', 30));
