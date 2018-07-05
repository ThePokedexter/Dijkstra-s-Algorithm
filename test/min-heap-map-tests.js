const expect = require('chai').expect;

const MinHeapMap = require('../min-heap-map');

describe('MinHeapMap', function() {
  let minHeapMap;
  
  beforeEach(function() {
    minHeapMap = new MinHeapMap(); 
  });

  describe('insert', function() {
    it('should insert a vertex', function() {
      minHeapMap.insert('A', 5);
      expect(minHeapMap.heap).to.be.eql([{vertex: 'A', distance: 5}]);
    });
  
    it('should insert several vertices and arrange them into a min heap', function() {
      minHeapMap.insert('A', 5);
      minHeapMap.insert('B', 2);
      minHeapMap.insert('C', 10);
      minHeapMap.insert('D', 2);
      minHeapMap.insert('E', 1);
  
      expect(minHeapMap.heap).to.be.eql([
        {vertex: 'E', distance: 1},
        {vertex: 'B', distance: 2},
        {vertex: 'D', distance: 2},
        {vertex: 'A', distance: 5},
        {vertex: 'C', distance: 10}
      ]);
    });
  });
  
  describe('swap', function() {
    beforeEach(function() {
      minHeapMap.insert('A', 5);
      minHeapMap.insert('B', 2);
      minHeapMap.insert('C', 10);
      minHeapMap.insert('D', 2);
      minHeapMap.insert('E', 1);
    });
  
    it('should swap the values in index 0 and 1', function() {
      minHeapMap.swap(0, 1);
      expect(minHeapMap.heap).to.be.eql([
        {vertex: 'B', distance: 2},
        {vertex: 'E', distance: 1},
        {vertex: 'D', distance: 2},
        {vertex: 'A', distance: 5},
        {vertex: 'C', distance: 10}
      ]);
    });
  
    it('should swap the values in index 0 and 3', function() {
      minHeapMap.swap(0, 3);
      expect(minHeapMap.heap).to.be.eql([
        {vertex: 'A', distance: 5},
        {vertex: 'B', distance: 2},
        {vertex: 'D', distance: 2},
        {vertex: 'E', distance: 1},
        {vertex: 'C', distance: 10}
      ]);
    });
  });
  
  describe('getLeftChildIndex', function() {
    it('should return index*2 + 1', function() {
      expect(minHeapMap.getLeftChildIndex(0)).to.be.equal(1);
      expect(minHeapMap.getLeftChildIndex(2)).to.be.equal(5);
      expect(minHeapMap.getLeftChildIndex(8)).to.be.equal(17);
    });
  });
  
  describe('getRightChildIndex', function() {
    it('should return index*2 + 2', function() {
      expect(minHeapMap.getRightChildIndex(0)).to.be.equal(2);
      expect(minHeapMap.getRightChildIndex(2)).to.be.equal(6);
      expect(minHeapMap.getRightChildIndex(8)).to.be.equal(18);
    });
  });

  describe('getParentIndex', function() {
    it('should return index*2 + 2', function() {
      expect(minHeapMap.getParentIndex(0)).to.be.equal(0);
      expect(minHeapMap.getParentIndex(2)).to.be.equal(1);
      expect(minHeapMap.getParentIndex(8)).to.be.equal(4);
      expect(minHeapMap.getParentIndex(3)).to.be.equal(1);
    });
  });

  describe('heapify', function() {
    it('should rearrange the array into a min heap', function() {
      let nonMinHeapArray = [
        {name: 'E', distance: 5}, 
        {name: 'A', distance: 2}, 
        {name: 'C', distance: 6},
        {name: 'F', distance: 10},
        {name: 'G', distance: 16},
        {name: 'H', distance: 7}
      ];
      minHeapMap.heap = nonMinHeapArray;
      minHeapMap.heapify();
      expect(minHeapMap.heap).to.be.eql([
        {name: 'A', distance: 2},
        {name: 'E', distance: 5},
        {name: 'C', distance: 6},
        {name: 'F', distance: 10},
        {name: 'G', distance: 16},
        {name: 'H', distance: 7}
      ]);
    });

    it('should not rearrange the array because its already a min heap', function() {
      let minHeapArray = [
        {name: 'A', distance: 2},
        {name: 'E', distance: 5},
        {name: 'C', distance: 6},
        {name: 'F', distance: 10},
        {name: 'G', distance: 16},
        {name: 'H', distance: 7}
      ];
      minHeapMap.heap = minHeapArray;
      minHeapMap.heapify();
      expect(minHeapMap.heap).to.be.eql([
        {name: 'A', distance: 2},
        {name: 'E', distance: 5},
        {name: 'C', distance: 6},
        {name: 'F', distance: 10},
        {name: 'G', distance: 16},
        {name: 'H', distance: 7}
      ]);
    });
  });

  describe('removeMin', function() {
    beforeEach(function() {
      minHeapMap.insert('A', 5);
      minHeapMap.insert('B', 2);
      minHeapMap.insert('C', 10);
      minHeapMap.insert('D', 2);
      minHeapMap.insert('E', 1);
    });

    it('should remove the root and heapify', function() {
      minHeapMap.removeMin();
      expect(minHeapMap.heap).to.be.eql([
        {vertex: 'B', distance: 2},
        {vertex: 'A', distance: 5},
        {vertex: 'D', distance: 2},
        {vertex: 'C', distance: 10}
      ]);
    });
  });
});
