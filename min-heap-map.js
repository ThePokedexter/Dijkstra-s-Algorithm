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
    if (this.heap.length < 2) {
      return this.heap.pop();
    }
    // Min is the first item
    let min = this.heap[0];
    let lastItem = this.heap[this.heap.length-1];

    // Swap the root with the last leaf
    this.heap[this.heap.length-1] = min;
    this.heap[0] = lastItem;

    // Remove the last item which is the min now
    this.heap.pop();

    this.heapify();

    return min;
  }

  heapify() {
    let index = 0;
    let leftChildIndex = this.getLeftChildIndex(index);
    let rightChildIndex = this.getRightChildIndex(index);

    // What if right or left child doesn't exist?
    while (
      this.heap[index].distance < this.heap[leftChildIndex].distance ||
      this.heap[index].distance < this.heap[rightChildIndex].distance
    ) {
      let indexValue = this.heap[index];
      // left child is larger
      if (this.heap[leftChildIndex].distance > this.heap[rightChildIndex].distance) {
        // Swap index with left child
        this.heap[index] = this.heap[leftChildIndex];
        this.heap[leftChildIndex] = indexValue;
        index = leftChildIndex;
        leftChildIndex = this.getLeftChildIndex(index);
        rightChildIndex = this.getRightChildIndex(index);
      } else { // right child is larger
        this.heap[index] = this.heap[rightChildIndex];
        this.heap[rightChildIndex] = indexValue;
        index = rightChildIndex;
        leftChildIndex = this.getLeftChildIndex(index);
        rightChildIndex = this.getRightChildIndex(index);
      }
    }
  }

  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  getRightChildIndex(index) {
    return index * 2 + 2;
  }
}
