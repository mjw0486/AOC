const {seats} = require('./dayFive.ts');
const quickSort = require('./quickSort.js');


function dayFivePartTwo(seats : Array<number>) : number {
  const sortedSeats = quickSort(seats);
  const difference = sortedSeats[0];
  let currentMax = sortedSeats[sortedSeats.length - 1];
  let currentMin = sortedSeats[0];
  while(currentMax !== currentMin) {
    const middle = (currentMin) + Math.floor((currentMax - currentMin) / 2);
    currentMin = sortedSeats[middle - difference] === middle ? middle + 1 : currentMin;
    currentMax = sortedSeats[middle - difference] === middle ? currentMax : middle;
  }
  return currentMin;
}

dayFivePartTwo(seats);

// console.log(dayFivePartTwo(seats));