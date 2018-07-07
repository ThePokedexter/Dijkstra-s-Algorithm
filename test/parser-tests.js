const expect = require('chai').expect;

const Parser = require('../parser');

describe('Parser', function() {
  let parser;

  beforeEach(function() {
    parser = new Parser();
  });

  describe('parseDistanceOfRoute', function() {
    it('should parse the route', function() {
      let testLine = '1. The distance of the route A-B-C.';
      let expected = {
        prefix: testLine,
        function: 'lengthOfPath',
        args: ['ABC']
      };
      expect(parser.parseDistanceOfRoute(testLine)).to.be.eql(expected);
    });
  });

  describe('parseMaxNumberOfStops', function() {
    it('should parse the start, end and number of stops', function() {
      let testLine = '7. The number of trips starting at A and ending at C with exactly 4 stops.';
      let expected = {
        prefix: testLine,
        function: 'numPathsMaxStops',
        args: ['A', 'C', 4]
      };
      expect(parser.parseMaxNumberOfStops(testLine)).to.be.eql(expected);
    });
  });

  describe('parseExactNumberOfStops', function() {
    it('should parse the start, end and number of stops', function() {
      let testLine = '6. The number of trips starting at C and ending at C with a maximum of 3 stops.';
      let expected = {
        prefix: testLine,
        function: 'numPaths',
        args: ['C', 'C', 3]
      };
      expect(parser.parseExactNumberOfStops(testLine)).to.be.eql(expected);
    });
  });

  describe('parseShortestPath', function() {
    it('should parse the start and end', function() {
      let testLine = '8. The length of the shortest route (in terms of distance to travel) from A to C.';
      let expected = {
        prefix: testLine,
        function: 'shortestPath',
        args: ['A', 'C']
      };
      expect(parser.parseShortestPath(testLine)).to.be.eql(expected);
    });
  });

  describe('parseNumPossibleRoutesUnderDistance', function() {
    it('should parse the start, end and distance', function() {
      let testLine = '10. The number of different routes from C to C with a distance of less than 30';
      let expected = {
        prefix: testLine,
        function: 'numPathsMaxDistance',
        args: ['C', 'C', 30]
      };
      expect(parser.parseNumPossibleRoutesUnderDistance(testLine)).to.be.eql(expected);
    });
  });

});