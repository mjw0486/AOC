const fs = require('file-system');

const input = fs.readFileSync('./inputFiles/dayOneInput.txt', 'utf-8');

const dayOne = function differenceFinder(array) {
  const arrayMap = {};
  const target = 2020;
  let result;
  array.forEach((num) => {
    if (arrayMap[num] === undefined) {
      arrayMap[target - num] = num;
    }
    if (Object.prototype.hasOwnProperty.call(arrayMap, num)) {
      result = num * (target - num);
    }
  });
  return result;
};

const dayOnePartTwo = function differenceFinder(array) {
  const arrayMap = {};
  const target = 2020;
  for (let i = 0; i < array.length; i += 1) {
    for (let j = i + 1; j < array.length; j += 1) {
      // console.log(array[i]);
      if (Number(array[i]) + Number(array[j]) < target && i !== j) {
        arrayMap[target - array[i] - array[j]] = [i, j];
      }
    }
  }
  for (let i = 0; i < array.length; i += 1) {
    if (Object.prototype.hasOwnProperty.call(arrayMap, array[i])
    && i !== arrayMap[array[i]][0] && i !== arrayMap[array[i]][1]) {
      return array[i] * array[arrayMap[array[i]][0]] * array[arrayMap[array[i]][1]];
    }
  }
  return null;
};

const inputArray = input.split('\n').slice(0, -1);

dayOne(inputArray);
dayOnePartTwo(inputArray);
// console.log(dayOne(inputArray));
// console.log(dayOnePartTwo(inputArray));
