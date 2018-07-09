# Trains Solution

An implementation of finding paths in a weighted directed graph. Including finding the shortest path from one point to another, the maximum number of paths possible between two points and the length of a path given the nodes. 

## Description

This project creates a directed graph from graph.txt or a custom file. 

The graph file has the format 'AB5' where A is the starting node, B is the ending node and 5 is the distance from A to B. The distances are unidirectional, AB5 does NOT imply that there is a route between B and A. 

The inputs file has human-readable instructions on what to output. Each line is parsed and the output is displayed along with the input in the console.

Please see graph.txt and input.txt for an example of the format the graph and input files must be in.

## Run

The following steps assume you already have npm and Node.js installed on your machine. Otherwise, you can download them here: https://nodejs.org/

``` bash
# 1. navigate to the root of this project in the terminal

# 2. install dependencies
npm install

# 3. run unit tests
npm test

# 4. to run this project with the default graph and input (graph.txt and input.txt)
node index.js

# 5. to run this project with a custom graph and input file
node index.js [path/to/graphfile] [path/to/inputfile]
