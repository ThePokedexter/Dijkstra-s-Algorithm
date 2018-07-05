const expect = require('chai').expect;

const MinHeapMap = require('../min-heap-map');

describe('insert()', function() {
  let minHeapMap;

  beforeEach(function() {
    minHeapMap = new MinHeapMap(); 
  });

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

describe('swap()', function() {
  let minHeapMap;

  beforeEach(function() {
    minHeapMap = new MinHeapMap();
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
})

describe('getLeftChildIndex()', function() {
  let minHeapMap;

  beforeEach(function() {
    minHeapMap = new MinHeapMap();
  });

  it('should return index*2 + 1', function() {
    expect(minHeapMap.getLeftChildIndex(0)).to.be.equal(1);
    expect(minHeapMap.getLeftChildIndex(2)).to.be.equal(5);
    expect(minHeapMap.getLeftChildIndex(8)).to.be.equal(17);
  });
})
