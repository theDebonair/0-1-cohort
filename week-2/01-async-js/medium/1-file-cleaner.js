// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

fs.readFile("temp.txt", "utf-8", (err, data) => {
  console.log(`File before cleaning:\n${data}`);

  const cleanedData = data.replace(/\s+/g, " ");

  console.log(`File after cleaning:\n${cleanedData}`);

  fs.writeFile("temp.txt", cleanedData, err => {
    console.log(!err ? "Written to file." : err)
  })
})