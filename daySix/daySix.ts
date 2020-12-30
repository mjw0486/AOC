const fs = require('fs');
const daySixInput = fs.readFileSync('../inputFiles/daySixInput.txt', 'utf-8');


const groups = daySixInput.split('\n\n');

function daySix(groups : Array<string>) : number{
  let result : number = 0;
  for (const group of groups) {
    const groupAnswerSet = new Set();
    const answers = group.split('\n');
    for (const answer of answers) {
      for (let i = 0; i < answer.length; i += 1) {
        groupAnswerSet.add(answer[i]);
      }
    }
    result += groupAnswerSet.size;
  }
  return result;
}

function daySixPartTwo(groups : Array<string>) : number{
  let result : number = 0;
  for (const group of groups) {
    const groupAnswerMap = {};
    const answers = group.split('\n');
    let sizeOfGroup : number = 0;
    for (const answer of answers) {
      for (let i = 0; i < answer.length; i += 1) {
        const char : string = answer[i];
        if (groupAnswerMap[char] === undefined) {
          groupAnswerMap[char] = 1;
        } else {
          groupAnswerMap[char] += 1;
        }
      }
      sizeOfGroup += 1;
    }
    let allYes : number = 0;
    for (const value of Object.values(groupAnswerMap)) {
      allYes = value === sizeOfGroup ? allYes + 1  : allYes;
    }
    result += allYes;
  }
  return result;
}

daySix(groups)
// console.log(daySix(groups));
// console.log(daySixPartTwo(groups));

export {}