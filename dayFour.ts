const fs = require('fs');

function dayFour(input: Array<string>): number {
  const passportFields = {
    byr: 'byr',
    iyr: 'iyr',
    eyr: 'eyr',
    hgt: 'hgt',
    hcl: 'hcl',
    ecl: 'ecl',
    pid: 'pid'
  };
  let count : number = 0;
  for (const passport of input) {
    const passportArray : Array<string> = passport.split(':');
    let tempCount : number = 0;
    for (let i = 0; i < passportArray.length - 1; i ++) {
      if (passportArray[i].slice(passportArray[i].length - 3) in passportFields) {
        tempCount += 1;
      }
    }
    if (tempCount >= 7) {
      count += 1;
    }
  }
  return count;
};

function dayFourPartTwo(input: Array<string>): number {
  let count : number = 0;
  for (const passport of input) {
    const passportArray : Array<string> = passport.split(/[\n\r\s]+/);
    const passportFields = {};
    for (const field of passportArray) {
      if (field) {
        const fieldArray : Array<string> = field.split(':');
        passportFields[fieldArray[0]] = fieldArray[1];
      }
    }
    let tempCount : number = 0;
    for (const key in passportFields) {
      const value = passportFields[key];
      if (key === 'byr') {
        if (value.length === 4 && value >= 1920 && value <= 2002) {
          tempCount += 1;
        }
      } else if (key === 'iyr') {
        if (value.length === 4 && value >= 2010 && value <= 2020) {
          tempCount += 1;
        }
      } else if (key === 'eyr') {
        if (value.length === 4 && value >= 2020 && value <= 2030) {
          tempCount += 1;
        }
      } else if (key === 'hgt') {
        const height : number = Number(value.slice(0, -2));
        const unit : string = value.slice(-2);
        if (unit === 'cm') {
          if (height >= 150 && height <= 193) {
            tempCount += 1;
          }
        } else if (unit === 'in') {
          if (height >= 59 && height <= 76) {
            tempCount += 1;
          }
        }
      } else if (key === 'hcl') {
        if (/^[#][0-9a-f]{6}/.exec(value)) {
          tempCount += 1;
        }
      } else if (key === 'ecl') {
        if (/^(amb|blu|brn|gry|grn|hzl|oth)/.exec(value)) {
          tempCount += 1;
        }
      } else if (key === 'pid') {
        if (/^[0-9]{9}$/.exec(value)) {
          tempCount += 1;
        }
      }
    }
    if (tempCount === 7) {
      count += 1;
    }
  }
  return count;
};

const input = fs.readFileSync('./inputFiles/dayFourInput.txt', 'utf-8');
const inputArray = input.split("\n\n").slice();

dayFour(inputArray);
dayFourPartTwo(inputArray);
// console.log(dayFourPartTwo(inputArray));