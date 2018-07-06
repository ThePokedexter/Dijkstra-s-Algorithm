const fs = require('fs');
const Graph = require('./graph');
const Parser = require('./parser');

const g = new Graph();
const p = new Parser();

const graphFile = process.argv[2];
const inputFile = process.argv[3];

function main() {
  readGraphAndInput();
}

function readGraphAndInput(g) {
  fs.readFile(graphFile, 'utf-8', readFileCallback)
};

function readFileCallback(error, data) {
  if (error) throw error;
  const graphData = data.split(', ');

  for (let connection of graphData) {
    g.addVertex(connection);
  }

  readInputFile();
}

function readInputFile() {
  fs.readFile(inputFile, 'utf-8', readInputFileCallback);
}

function readInputFileCallback(error, data) {
  if (error) throw error;

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
}

main();