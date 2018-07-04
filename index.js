var args = process.argv.slice(2);

class Graph {
  vertices;

  constructor() {
    this.vertices = {};
  }

  addVertex(name, edges) {
    this.vertices[name] = edges;
  }
}
