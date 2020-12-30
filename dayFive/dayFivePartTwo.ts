const {seats} = require('./dayFive.ts');
const quickSort = require('./quickSort.js');


function dayFivePartTwo(seats : Array<number>) : number {
  const sortedSeats = quickSort(seats);
  const difference = sortedSeats[0];
  let currentMax = sortedSeats[sortedSeats.length - 1];
  let currentMin = sortedSeats[0];
  while(currentMax !== currentMin) {
    const middle = (currentMin) + Math.floor((currentMax - currentMin) / 2);
    const inTopHalf = sortedSeats[middle - difference] === middle
    currentMin = inTopHalf ? middle + 1 : currentMin;
    currentMax = inTopHalf ? currentMax : middle;
  }
  return currentMin;
}

dayFivePartTwo(seats);

// console.log(dayFivePartTwo(seats));
