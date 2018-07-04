const MinHeapMap = require('./min-heap-map');

module.exports = class Graph {
  constructor() {
    this.vertices = {};
  }

  addVertex(name, edges) {
    this.vertices[name] = edges; //ex. ('A', {'B': 1})
  }

  shortestPath(start, finish) {
    // stores the vertex and shortest distance from start
    let distances = {}; // ex. {'A': 0, 'B': 2}
    // stores the parent of every vertex in shortest distance
    let parents = {}; // ex. {'A': null, 'B': 'A'}
    // unvisted vertex and their distances, initialize to Inifinity
    let unvisted = {}; // ex. {'A': Inifinity, 'B': Inifinity}

    for (vertex of this.vertices) {
      if (vertex === start) {
        distances[vertex] = 0;
        parents[vertex] = null;
      } else {
        // Initialize distances to Inifinity
        distances[vertex] = Infinity;
      }
    }
  }
}