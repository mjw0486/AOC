const fs = require('fs');
const input = fs.readFileSync('../inputFiles/dayEightInput.txt', 'utf-8');
const procedures = input.split('\n');
function dayEight(procedures : Array<string>) : number {
  let accumulator = 0;
  let procedureMap = {};

  for (let i = 0; i < procedures.length; i ++) {
    const procedureType : string = procedures[i].slice(0,3);
    const procedureDirection : string =  procedures[i].slice(4, 5);
    const procedureAmount : number = Number(procedures[i].slice(5));
    if(procedureMap[i] === true) {
      return accumulator;
    } else {
      procedureMap[i] = true;
    }

    if (procedureType === 'acc') {
      accumulator = procedureDirection === '+' ? accumulator + procedureAmount : accumulator - procedureAmount;
    } else if (procedureType === 'jmp') {
      i = procedureDirection === '+' ? i + procedureAmount - 1 : i - procedureAmount - 1;
    }
  }
  return accumulator;
}

console.log(dayEight(procedures));

export {};