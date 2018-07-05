const MinHeapMap = require('./min-heap-map');

module.exports = class Graph {
  constructor() {
    this.vertices = {};
  }

  addVertex(route) { // ex. AB5
    let start = route[0];
    let end = route[1];
    let distance = parseInt(route.substring(2));
    this.vertices[start] = {...this.vertices[start], [end]: distance}; //ex. ('A', {'B': 1})
  }

  shortestPath(start, finish) {
    // stores the vertex and shortest distance from start
    let distances = {}; // ex. {'A': 0, 'B': 2}
    // stores the parent of every vertex in shortest distance
    let parents = {}; // ex. {'A': null, 'B': 'A'}
    // unvisted vertex and their distances, initialize to Inifinity
    let unvisited = {}; // ex. {'A': Inifinity, 'B': Inifinity}

    for (let vertex of Object.keys(this.vertices)) {
      if (vertex === start) {
        distances[vertex] = 0;
        parents[vertex] = null;
        unvisited[vertex] = 0;
      } else {
        // Initialize distances to Max Number
        unvisited[vertex] = Number.MAX_SAFE_INTEGER;
      }
    }

    while (Object.keys(unvisited).length > 0) {
      // Get the min vertex
      let currentVertex = this.getMinUnvisted(unvisited);
      // Delete the min vertex
      delete unvisited[currentVertex];
      let distance = distances[currentVertex];
      // Get the direct connections
      let children = this.vertices[currentVertex];
      for (let vertex of Object.keys(children)) {
        let newDistance = distance + children[vertex];
        if (distances[vertex] === undefined) {
          distances[vertex] = newDistance;
          parents[vertex] = currentVertex;
        } else if (newDistance < distances[vertex]) {
          distances[vertex] = newDistance;
          parents[vertex] = currentVertex;
        }
      }
    }
    return distances[finish];
  }

  getMinUnvisted(unvisited) {
    return Object.keys(unvisited).reduce((minKey, currentKey) => {
      if (unvisited[currentKey] < unvisited[minKey]) {
        return currentKey;
      }
      return minKey;
    })
  }
}