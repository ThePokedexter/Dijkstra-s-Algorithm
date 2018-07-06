const expect = require('chai').expect;

const Graph = require('../graph');

describe('Graph', function() {
  let graph;

  beforeEach(function() {
    graph = new Graph();
  });

  describe('addVertex', function() {
    it('should add a vertex', function() {
      graph.addVertex('AB5');

      expect(graph.vertices).to.be.eql({A: {B: 5}});
    });

    it('should add two vertices', function() {
      graph.addVertex('AB5');
      graph.addVertex('AD2');

      expect(graph.vertices).to.be.eql({A: {B: 5, D: 2}});
    });


    it('should add several vertices', function() {
      graph.addVertex('AB5');
      graph.addVertex('BC4');
      graph.addVertex('CD8');
      graph.addVertex('DC8');
      graph.addVertex('DE6');
      graph.addVertex('AD5');
      graph.addVertex('CE2');
      graph.addVertex('EB3');
      graph.addVertex('AE7');

      expect(graph.vertices).to.be.eql({
        A: {B: 5, D: 5, E: 7},
        B: {C: 4},
        C: {D: 8, E: 2},
        D: {C: 8, E: 6},
        E: {B: 3}
      });
    });
  });

  describe('shortestPath', function() {
    beforeEach(function() {
      graph.addVertex('AB5');
      graph.addVertex('BC4');
      graph.addVertex('CD8');
      graph.addVertex('DC8');
      graph.addVertex('DE6');
      graph.addVertex('AD5');
      graph.addVertex('CE2');
      graph.addVertex('EB3');
      graph.addVertex('AE7');
    });

    it('should get the shortest path to a direct child', function() {
      expect(graph.shortestPath('A', 'B')).to.be.equal(5);
    });

    it('should get the shortest path', function() {
      expect(graph.shortestPath('A', 'C')).to.be.equal(9);
    });

    it('should get the shortest path', function() {
      expect(graph.shortestPath('B', 'D')).to.be.equal(12);
    });

    it('should get NO SUCH ROUTE', function() {
      expect(graph.shortestPath('B', 'A')).to.be.equal('NO SUCH ROUTE');
    });
  });

  describe('lengthOfPath', function() {
    beforeEach(function() {
      graph.addVertex('AB5');
      graph.addVertex('BC4');
      graph.addVertex('CD8');
      graph.addVertex('DC8');
      graph.addVertex('DE6');
      graph.addVertex('AD5');
      graph.addVertex('CE2');
      graph.addVertex('EB3');
      graph.addVertex('AE7');
    });

    it('should get the length of the path with no stops starting at A', function() {
      expect(graph.lengthOfPath('ABC')).to.be.equal(9);
    });

    it('should get the length of the path with no stops starting at A', function() {
      expect(graph.lengthOfPath('AD')).to.be.equal(5);
    });

    it('should get the length of the path with no stops starting at A', function() {
      expect(graph.lengthOfPath('ADC')).to.be.equal(13);
    });

    it('should get the length of the path with no stops starting at A', function() {
      expect(graph.lengthOfPath('AEBCD')).to.be.equal(22);
    });

    it('should return a message when the route does not exist', function() {
      expect(graph.lengthOfPath('AED')).to.be.equal('NO SUCH ROUTE');
    });

    it('should return a message when the route does not exist', function() {
      expect(graph.lengthOfPath('DA')).to.be.equal('NO SUCH ROUTE');
    });

    it('should get the length of the path with no stops starting at B', function() {
      expect(graph.lengthOfPath('BCE')).to.be.equal(6);
    });
  });

  describe('getMinUnvisted', function() {
    it('should get the key with the minimum value in the object', function() {
      let unvistedTest = {
        A: 5,
        B: 1,
        C: 100
      };
      expect(graph.getMinUnvisted(unvistedTest)).to.be.equal('B');
    });

    it('should get the key with the minimum value in the object', function() {
      let unvistedTest = {
        A: 900,
        B: 901,
        C: 899
      };
      expect(graph.getMinUnvisted(unvistedTest)).to.be.equal('C');
    });
  });

  describe('numPaths', function() {
    beforeEach(function() {
      graph.addVertex('AB5');
      graph.addVertex('BC4');
      graph.addVertex('CD8');
      graph.addVertex('DC8');
      graph.addVertex('DE6');
      graph.addVertex('AD5');
      graph.addVertex('CE2');
      graph.addVertex('EB3');
      graph.addVertex('AE7');
    });

    it('should get the number of possible paths from  A to C with exactly 4 stops', function() {
      expect(graph.numPaths('A', 'C', 4)).to.be.equal(3);
    });

    it('should get the number of possible paths from D to E with exactly 2 stops', function() {
      expect(graph.numPaths('D', 'E', 2)).to.be.equal(1);
    });

    it('should should return 0 when no path exists', function() {
      expect(graph.numPaths('D', 'A', 3)).to.be.equal(0);
    });
  });

  describe('numPathsMaxStops', function() {
    beforeEach(function() {
      graph.addVertex('AB5');
      graph.addVertex('BC4');
      graph.addVertex('CD8');
      graph.addVertex('DC8');
      graph.addVertex('DE6');
      graph.addVertex('AD5');
      graph.addVertex('CE2');
      graph.addVertex('EB3');
      graph.addVertex('AE7');
    });

    it('should get the number of possible paths from C to C with a maximum of three stops', function() {
      expect(graph.numPathsMaxStops('C', 'C', 3)).to.be.equal(2);
    });

    it('should get the number of possible paths from A to C with a maximum of 4 stops', function() {
      expect(graph.numPathsMaxStops('A', 'C', 4)).to.be.equal(6);
    });
  });

})