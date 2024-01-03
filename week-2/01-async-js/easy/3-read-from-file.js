// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs  = require('fs');

function readFile() {
  fs.readFile("./1-counter.js", "utf-8", (err, data) => {
    console.log(!err ? `File contents are below: \n${data}` : err);
  });
}

const val = 10000000000;
let sum = 0;

for (let index = 0; index < val; index++) {
  sum += index;
}

console.log(`Sum of ${val} is ${sum}.\n`);

readFile();
//This comment have been appended by "4-write-to-file.js" using appendFile method of fs.