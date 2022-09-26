// This script displays his own name

// Possibility 1: (but seems "too easy")
//
// path = require("path");
// name = path.basename(__filename);
// console.log(name);


// Possibility 2:

path = module.filename          // returns home/keij/coding-accelerator/semaine2/terre/nom_de_programme.js
splitpath = path.split("/");
name = splitpath[6];

console.log(name);


// Possibility 3:
//
// name = process.argv[1];
// console.log(name);