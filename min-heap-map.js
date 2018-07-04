module.exports = class MinHeapMap {
  constructor() {
    // Min heap
    this.heap = []
  }

  // O(log(n))
  insert(edge) { // ex. {vertex: 'A', distance: '5'}
    // Add the value to the end
    this.heap.push(edge);
    let index = this.heap.length - 1;
    let parentIndex = Math.floor(index/2);
    // If the new distance is smaller than its parent, swap
    while (this.heap[index].distance < this.heap[parentIndex].distance) {
      let parentValue = this.heap[parentIndex];
      // Swap parent and new value
      this.heap[parentIndex] = value;
      this.heap[index] = parent;
      index = parentIndex;
      parentIndex = Math.floor(index/2);
    }
  }

  // O(log(n))
  removeMin() {

  }
}
