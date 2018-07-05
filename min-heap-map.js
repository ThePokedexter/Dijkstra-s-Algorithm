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
    let size = this.heap.length;
  
    while (index < size) {
      let leftChildIndex = this.getLeftChildIndex(index);
      let rightChildIndex = this.getRightChildIndex(index);
      let toSwapIndex = index;

      // If the left child is smaller than the root
      if (leftChildIndex < size && this.heap[leftChildIndex] < this.heap[index]) {
        toSwapIndex = leftChildIndex;
      }

      // If the right child is smaller than the root
      if (rightChildIndex < size && this.heap[rightChildIndex] < this.heap[index]) {
        toSwapIndex = rightChildIndex
      }

      // Root is smaller than left and right child
      if (toSwapIndex === index) {
        return;
      }

      swap(index, toSwapIndex);

      index = toSwapIndex;
    }
  }

  swap(index1, index2) {
    let temp = this.heap[index1];

    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  getRightChildIndex(index) {
    return index * 2 + 2;
  }
}
