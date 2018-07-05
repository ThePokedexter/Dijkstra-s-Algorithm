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

  shortestPath(start, end) {
    // stores the vertex and shortest distance from start
    let distances = {}; // ex. {'A': 0, 'B': 2}
    // stores the parent of every vertex in shortest distance
    let parents = {}; // ex. {'A': null, 'B': 'A'}
    // unvisited vertex and their distances, initialize to MAX INT
    let unvisited = {}; // ex. {'A': 0, 'B': MAX_INT}

    // Initialize distances, parents and unvisited
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

        // If the distances vertex hasn't been set or the new distance is shorter than the stored one
        if (distances[vertex] === undefined || newDistance < distances[vertex]) {
          distances[vertex] = newDistance;
          parents[vertex] = currentVertex;
        }
      }
    }
    return distances[end];
  }

  lengthOfPath(path) { // ex. 'ABC'
    let result = 0;
    for (let i=0; i<path.length-1; i++) {
      let children = this.vertices[path[i]];
      let nextDistance = children[path[i+1]];
      if (nextDistance === undefined) {
        return 'NO SUCH ROUTE';
      } else {
        result += nextDistance;
      }
    }
    return result;
  }

  getMinUnvisted(unvisited) {
    return Object.keys(unvisited).reduce((minKey, currentKey) => {
      if (unvisited[currentKey] < unvisited[minKey]) {
        return currentKey;
      }
      return minKey;
    })
  }

  numPaths(start, end, numStops) {
    if (numStops === 0) {
      if (start === end) {
        return 1; // Found one path
      } else {
        return 0; // No path here
      }
    }
    let totalPaths = 0;
    let children = this.vertices[start];
    for (let child of Object.keys(children)) {
      totalPaths += this.numPaths(child, end, numStops - 1);
    }
    return totalPaths;
  }

  numPathsMaxStops(start, end, maxStops) {
    let result = 0;
    for (let i=1; i<=maxStops; i++) {
      result += this.numPaths(start, end, i);
    }
    return result;
  }

  numPathsMaxDistance(start, end, maxDistance) {
    return this.numPathsMaxDistanceHelper(start, end, maxDistance, 0, {});
  }

  numPathsMaxDistanceHelper(start, end, maxDistance, distance, memo) {
    let key = start.toString() + '-' + distance.toString();
    if (memo[key] !== undefined) {
      return memo[key];
    }
    if (distance >= maxDistance) {
      return 0;
    }
    let totalPaths = 0;
    if (start === end && distance > 0) {
      totalPaths = totalPaths + 1;
    }
    let children = this.vertices[start];
    for (let child of Object.keys(children)) {
      let subtotal = this.numPathsMaxDistanceHelper(child, end, maxDistance, distance + children[child], memo);
      totalPaths = totalPaths + subtotal;
    }

    memo[key] = totalPaths;
    return totalPaths;
  }
}