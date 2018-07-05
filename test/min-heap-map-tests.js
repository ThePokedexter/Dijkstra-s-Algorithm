const expect = require('chai').expect;

const MinHeapMap = require('../min-heap-map');

describe('insert()', function() {
  it('should insert a vertex', function() {
    let minHeapMap = new MinHeapMap();
    let vertex = {name: 'A', distance: 5};

    minHeapMap.insert(vertex);
    expect(minHeapMap.heap).to.be.equal([vertex]);
  })
});
