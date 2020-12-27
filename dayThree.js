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

const inputArray = input.split('\n').slice(0, -1);
dayThree(inputArray);
