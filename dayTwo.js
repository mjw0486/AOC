const fs = require('file-system');
const input = fs.readFileSync('./inputFiles/dayTwoInput.txt', 'utf-8');
const inputArray = input.split('\n').slice(0, -1);

const dayTwo = function(inputArray) {
  let count = 0;
  for (const line of inputArray) {
    const min = line.slice(0, line.indexOf('-'));
    const max = line.slice(line.indexOf('-') + 1, line.indexOf(' '));
    const target = line.slice(line.indexOf(' ') + 1, line.indexOf(':'));
    const password = line.slice(line.indexOf(':') + 2);
    let tempCount = 0;
    for (const char of password) {
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

console.log(dayTwo(inputArray));

const dayTwoPartTwo = function(inputArray) {
  let count = 0;
  for (const line of inputArray) {
    const min = line.slice(0, line.indexOf('-'));
    const max = line.slice(line.indexOf('-') + 1, line.indexOf(' '));
    const target = line.slice(line.indexOf(' ') + 1, line.indexOf(':'));
    const password = line.slice(line.indexOf(':') + 2);
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