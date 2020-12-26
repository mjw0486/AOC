const fs = require('file-system');

const input = fs.readFileSync('./inputFiles/dayTwoInput.txt', 'utf-8');

const dayTwo = function passwordVerification(inputArray) {
  let count = 0;
  inputArray.forEach((line) => {
    const dashIndex = line.indexOf('-');
    const spaceIndex = line.indexOf(' ');
    const colonIndex = line.indexOf(':');
    const min = line.slice(0, dashIndex);
    const max = line.slice(dashIndex + 1, spaceIndex);
    const target = line.slice(spaceIndex + 1, colonIndex);
    const password = line.slice(colonIndex + 2);
    let tempCount = 0;
    password.split('').forEach((char) => {
      if (char === target) {
        tempCount += 1;
      }
    });
    if (tempCount >= min && tempCount <= max) {
      count += 1;
    }
  });
  return count;
};

const dayTwoPartTwo = function passwordVerification(inputArray) {
  let count = 0;
  inputArray.forEach((line) => {
    const dashIndex = line.indexOf('-');
    const spaceIndex = line.indexOf(' ');
    const colonIndex = line.indexOf(':');
    const min = line.slice(0, dashIndex);
    const max = line.slice(dashIndex + 1, spaceIndex);
    const target = line.slice(spaceIndex + 1, colonIndex);
    const password = line.slice(colonIndex + 2);
    let tempCount = 0;
    if (password[min - 1] === target) {
      tempCount += 1;
    }
    if (password[max - 1] === target) {
      tempCount += 1;
    }
    if (tempCount === 1) {
      count += 1;
    }
  });
  return count;
};

const inputArray = input.split('\n').slice(0, -1);

dayTwo(inputArray);
dayTwoPartTwo(inputArray);

// console.log(dayTwo(inputArray));
// console.log(dayTwoPartTwo(inputArray));
