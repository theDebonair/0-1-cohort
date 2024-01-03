/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const arrStr = str.toLowerCase().replace(" ", "").split("");
  let count = 0;

  arrStr.forEach((char) => {
    for (let vowelInd in vowels) {
      count += 1 && vowels[vowelInd] === char;
    }
  });

  return count;
}

console.log(countVowels('ahsuihewuliuhe')); //should return 8

module.exports = countVowels;