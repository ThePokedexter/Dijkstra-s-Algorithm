module.exports = class PriorityQueue {
  constructor() {
    this.heap = []
  }

  insert(value) {
    // Add the value to the end
    this.heap.push(value);
    let index = this.heap.length - 1;
    let parentIndex = Math.floor(index/2);
    // If the new value is larger than its parent, swap
    while (this.heap[index] > this.heap[parentIndex]) {
      let parentValue = this.heap[parentIndex];
      // Swap parent and new value
      this.heap[parentIndex] = value;
      this.heap[index] = parent;
      index = parentIndex;
      parentIndex = Math.floor(index/2);
    }
  }

  pop() {

  }
}
