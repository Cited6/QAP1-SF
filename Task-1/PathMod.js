// The path module provides us with being able to work with files and directory paths.
// Provides us with ways of interacting with file paths in a "cross-platform" way.

const path = require("path");

// Parse filename into a object
var pathObj = path.parse(__filename);

// Display path object to the console
console.log(pathObj);

//
