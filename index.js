const fs = require('fs');
const Graph = require('./graph');
const Parser = require('./parser');

const g = new Graph();
const p = new Parser();

const graphFile = process.argv[2] || 'graph.txt';
const inputFile = process.argv[3] || 'input.txt';

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

  let functions = p.parse(data);

  for (let fun of functions) {
    if (fun.args.length === 1) {
      console.log(fun.prefix + ': ' + g[fun.function](fun.args[0]));
    } else {
      console.log(fun.prefix + ': ' + g[fun.function].apply(g, fun.args));
    }
  }
}

main();