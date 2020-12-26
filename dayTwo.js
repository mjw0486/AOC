const fs = require('file-system');
const input = fs.readFileSync('/Users/michaelwetterauer/Desktop/Algos/adventOfCode/dayTwoInput.txt', 'utf-8');
const inputArray = input.split('\n').slice(0, -1);

const dayTwo = function(inputArray) {
  let count = 0;
  for (let line of inputArray) {
    let min = line.slice(0, line.indexOf('-'));
    let max = line.slice(line.indexOf('-') + 1, line.indexOf(' '));
    let target = line.slice(line.indexOf(' ') + 1, line.indexOf(':'));
    let password = line.slice(line.indexOf(':') + 2);
    let tempCount = 0;
    for (let char of password) {
      if (char === target) {
        tempCount ++;
      }
    }
    if (tempCount >= min && tempCount <= max) {
      count ++;
    }
  }
  return count;
}

// console.log(dayTwo(inputArray));

const dayTwoPartTwo = function(inputArray) {
  let count = 0;
  for (let line of inputArray) {
    let min = line.slice(0, line.indexOf('-'));
    let max = line.slice(line.indexOf('-') + 1, line.indexOf(' '));
    let target = line.slice(line.indexOf(' ') + 1, line.indexOf(':'));
    let password = line.slice(line.indexOf(':') + 2);
    let tempCount = 0;
    if (password[min - 1] === target) {
      tempCount ++;
    }
    if (password[max - 1] === target) {
      tempCount ++;
    }
    if (tempCount === 1) {
      count ++;
    }
  }
  return count;
}

console.log(dayTwoPartTwo(inputArray));