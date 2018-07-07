module.exports = class Parser {
  constructor() {
  }

  parse(text) {
    let textSplit = text.split(/\r?\n/); // Split text into lines using regex to be usable for Windows and Unix
    let result = [];
    for (let line of textSplit) {
      result.push(this.parseLine(line));
    }
    return result;
  }

  parseLine(line) {
    if (line.includes('The distance of the route ')) {
      return this.parseDistanceOfRoute(line);
    } else if (line.includes('The number of trips starting at')) {
      if (line.includes('with a maximum of')) {
        return this.parseMaxNumberOfStops(line);
      } else if (line.includes('with exactly')) {
        return this.parseExactNumberOfStops(line);
      }
    } else if (line.includes('The length of the shortest route (in terms of distance to travel) from')) {
      return this.parseShortestPath(line);
    } else if (line.includes('The number of different routes')) {
      return this.parseNumPossibleRoutesUnderDistance(line);
    }
  }

  parseDistanceOfRoute(line) {
    let stringBeforeVertices = 'distance of the route';
    let stringBeforeVerticesIndex = line.indexOf(stringBeforeVertices) + stringBeforeVertices.length;
    let vertices = line.substring(stringBeforeVerticesIndex);
    // Remove non-letters from vertices
    vertices = vertices.replace(/[^A-Z]/g, '')
    return {
      prefix: line,
      function: 'lengthOfPath',
      args: [vertices]
    };
  }

  parseMaxNumberOfStops(line) {
    let stringBeforeStart = 'number of trips starting at ';
    let stringBeforeStartIndex = line.indexOf(stringBeforeStart) + stringBeforeStart.length;
    let start = line.substring(stringBeforeStartIndex, stringBeforeStartIndex + 1);

    let stringBeforeEnd = 'and ending at ';
    let stringBeforeEndIndex = line.indexOf(stringBeforeEnd) + stringBeforeEnd.length;
    let end = line.substring(stringBeforeEndIndex, stringBeforeEndIndex + 1);

    let stringBeforeNumStops = 'with a maximum of ';
    let stringBeforeStopsIndex = line.indexOf(stringBeforeNumStops) + stringBeforeNumStops.length;
    let numStops = line.substring(stringBeforeStopsIndex);
    numStops = numStops.replace(/[^0-9]/g,'');
    numStops = parseInt(numStops);

    return {
      prefix: line,
      function: 'numPathsMaxStops',
      args: [start, end, numStops]
    };
  }

  parseExactNumberOfStops(line) {
    let stringBeforeStart = 'number of trips starting at ';
    let stringBeforeStartIndex = line.indexOf(stringBeforeStart) + stringBeforeStart.length;
    let start = line.substring(stringBeforeStartIndex, stringBeforeStartIndex + 1);

    let stringBeforeEnd = 'and ending at ';
    let stringBeforeEndIndex = line.indexOf(stringBeforeEnd) + stringBeforeEnd.length;
    let end = line.substring(stringBeforeEndIndex, stringBeforeEndIndex + 1);

    let stringBeforeNumStops = ' with exactly ';
    let stringBeforeStopsIndex = line.indexOf(stringBeforeNumStops) + stringBeforeNumStops.length;
    let numStops = line.substring(stringBeforeStopsIndex);
    numStops = numStops.replace(/[^0-9]/g,'');
    numStops = parseInt(numStops);

    return {
      prefix: line,
      function: 'numPaths',
      args: [start, end, numStops]
    };
  }

  parseShortestPath(line) {
    let stringBeforeStart = 'length of the shortest route (in terms of distance to travel) from ';
    let stringBeforeStartIndex = line.indexOf(stringBeforeStart) + stringBeforeStart.length;
    let start = line.substring(stringBeforeStartIndex, stringBeforeStartIndex + 1);

    let end = line.substring(stringBeforeStartIndex + 5);
    end = end.replace(/[^A-Z]/g, '');
    
    return {
      prefix: line,
      function: 'shortestPath',
      args: [start, end]
    }
  }

  parseNumPossibleRoutesUnderDistance(line) {
    let stringBeforeStart = 'number of different routes from ';
    let stringBeforeStartIndex = line.indexOf(stringBeforeStart) + stringBeforeStart.length;
    let start = line.substring(stringBeforeStartIndex, stringBeforeStartIndex + 1);

    let end = line.substring(stringBeforeStartIndex + 5, stringBeforeStartIndex + 6);
    
    let stringBeforeDistance = 'with a distance of less than ';
    let stringBeforeDistanceIndex = line.indexOf(stringBeforeDistance) + stringBeforeDistance.length;
    let distance = line.substring(stringBeforeDistanceIndex);
    distance = distance.replace(/[^0-9]/g,'');
    distance = parseInt(distance);

    return {
      prefix: line,
      function: 'numPathsMaxDistance',
      args: [start, end, distance]
    }
  }
}