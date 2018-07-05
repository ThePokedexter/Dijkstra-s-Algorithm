const expect = require('chai').expect;

const MinHeapMap = require('../min-heap-map');

describe('insert()', function() {
  it('should insert a vertex', function() {
    let minHeapMap = new MinHeapMap();

    minHeapMap.insert('A', 5);
    expect(minHeapMap.heap).to.be.eql([{vertex: 'A', distance: 5}]);
  })
});
