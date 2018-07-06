module.exports = class Parser {
  constructor() {
  }

  parse(text) {
    let textSplit = text.split(/\r?\n/); // Split text into lines using regex to be usable for Windows and Unix
    for (let line of textSplit) {
      return this.parseLine(line);
    }
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
    let stringBeforeVerticesIndex = str.indexOf(stringBeforeVertices) + stringBeforeVertices.length;
    let vertices = line.substring(stringBeforeVerticesIndex);
    // Remove non-letters from vertices
    vertices.replace(/\W/g, '');
    return {
      function: 'lengthOfPath',
      args: [vertices]
    };
  }

  parseMaxNumberOfStops(line) {
    let stringBeforeStart = 'number of trips starting at ';
    let stringBeforeStartIndex = line.indexOf(stringBeforeStart) + stringBeforeStart.length;
    let start = line.substring(stringBeforeStartIndex, stringBeforeStartIndex + 2);

    let stringBeforeEnd = 'and ending at ';
    let stringBeforeEndIndex = line.indexOf(stringBeforeEnd) + stringBeforeEnd.length;
    let end = line.substring(stringBeforeEndIndex, stringBeforeEndIndex + 2);

    let stringBeforeNumStops = 'with a maximum of ';
    let stringBeforeStopsIndex = line.indexOf(stringBeforeNumStops) + stringBeforeNumStops.length;
    let numStops = line.substring(stringBeforeStartIndex, stringBeforeStartIndex + 2);

    return {
      function: 'numPathsMaxStops',
      args: [start, end, numStops]
    };
  }

  parseExactNumberOfStops(line) {
    let stringBeforeStart = 'number of trips starting at ';
    let stringBeforeStartIndex = line.indexOf(stringBeforeStart) + stringBeforeStart.length;
    let start = line.substring(stringBeforeStartIndex, stringBeforeStartIndex + 2);

    let stringBeforeEnd = 'and ending at ';
    let stringBeforeEndIndex = line.indexOf(stringBeforeEnd) + stringBeforeEnd.length;
    let end = line.substring(stringBeforeEndIndex, stringBeforeEndIndex + 2);

    let stringBeforeNumStops = ' with exactly ';
    let stringBeforeStopsIndex = line.indexOf(stringBeforeNumStops) + stringBeforeNumStops.length;
    let numStops = line.substring(stringBeforeStartIndex, stringBeforeStartIndex + 2);

    return {
      function: 'numPaths',
      args: [start, end, numStops]
    };
  }

  parseShortestPath(line) {
    let stringBeforeStart = 'length of the shortest route (in terms of distance to travel) from ';
    let stringBeforeStartIndex = line.indexOf(stringBeforeStart) + stringBeforeStart.length;
    let start = line.substring(stringBeforeStartIndex, stringBeforeStartIndex + 2);

    let end = line.substring(stringBeforeStartIndex + 5);
    end.replace(/\W/g, '');
    
    return {
      function: 'shortestPath',
      args: [start, end]
    }
  }

  parseNumPossibleRoutesUnderDistance(line) {
    let stringBeforeStart = 'number of different routes from ';
    let stringBeforeStartIndex = line.indexOf(stringBeforeStart) + stringBeforeStart.length;
    let start = line.substring(stringBeforeStartIndex, stringBeforeStartIndex + 2);

    let end = line.substring(stringBeforeStartIndex + 5, stringBeforeStartIndex + 6);
    
    let stringBeforeDistance = 'with a distance of less than ';
    let stringBeforeDistanceIndex = line.indexOf(stringBeforeDistance) + stringBeforeDistance.length;
    let distance = line.substring(stringBeforeDistanceIndex);
    distance.replace(/\D/g,'');

    return {
      function: 'numPathsMaxDistance',
      args: [start, end, distance]
    }
  }
}