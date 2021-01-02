const fs = require('fs');
const changeMin = require('./changeMin.ts');
const changeMax = require('./changeMax.ts');

const dayFiveInput = fs.readFileSync('../AOC/inputFiles/dayFiveInput.txt', 'utf-8');

function dayFive(dayFiveInput : Array<string>) : object {
  let highestSeatId : number = 0;
  let seats = [];

  for (const seat of input) {
    const seatRow = {
      min: 0,
      max: 127
    };
    const seatColumn = {
      min: 0,
      max: 7
    };
    for (const direction of seat) {
      seatRow.min = direction === 'B' ? changeMin(seatRow.min, seatRow.max) : seatRow.min;
      seatRow.max = direction === 'F' ? changeMax(seatRow.min, seatRow.max) : seatRow.max;
      seatColumn.min = direction === 'R' ? changeMin(seatColumn.min, seatColumn.max) : seatColumn.min;
      seatColumn.max = direction === 'L' ? changeMax(seatColumn.min, seatColumn.max) : seatColumn.max;
    }
    const potentialId : number = seatRow.min * 8 + seatColumn.min;
    seats.push(potentialId);
    highestSeatId = highestSeatId < potentialId ? potentialId : highestSeatId;
  }
  return {highestSeatId, seats};
}

const inputArray = input.split('\n').slice(0, -1);

module.exports = dayFive(inputArray);

export{}