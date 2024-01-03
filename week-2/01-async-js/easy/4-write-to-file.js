// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Appending here, write can using writeFile method with same params.
const fs = require("fs");

const content = `\n//This comment have been appended by \"4-write-to-file.js\" using appendFile method of fs.`;

const appendToFile = () => {
  fs.appendFile("./3-read-from-file.js", content, err => {
    console.log(!err ? `${content} appended in the file.` : err);
  })
};

const val = 10000000000;
let sum = 0;

for (let index = 0; index < val; index++) {
  sum += index;
}

console.log(`Sum of ${val} is ${sum}.\n`);

appendToFile();