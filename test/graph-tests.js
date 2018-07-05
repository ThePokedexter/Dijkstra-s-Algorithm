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

})