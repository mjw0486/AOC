const fs = require('file-system');

const input = fs.readFileSync('./inputFiles/dayThreeInput.txt', 'utf-8');

function dayThree(array) {
  let count = 0;
  let columnIndex = 0;
  array.forEach((row, rowIndex) => {
    if (array[rowIndex][columnIndex] === '#') {
      count += 1;
    }
    columnIndex = (columnIndex + 3) % row.length;
  });
  return count;
}

function dayThreePartTwo(array) {
  let result = 1;
  const slopes = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];
  slopes.forEach((slope) => {
    let count = 0;
    let columnIndex = 0;
    const columnIncrement = slope[0];
    const rowIncrement = slope[1];
    for (let i = 0; i < array.length; i += rowIncrement) {
      if (array[i][columnIndex] === '#') {
        count += 1;
      }
      columnIndex = (columnIndex + columnIncrement) % array[i].length;
    }
    result *= count;
  });
  return result;
}

const inputArray = input.split('\n').slice(0, -1);

dayThree(inputArray);
dayThreePartTwo(inputArray);
