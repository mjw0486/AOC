const fs = require('fs');

function dayFour(input: Array<string>): number {
  let count : number = 0;
  for (const passport of input) {
    const validSet = new Set(['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'])
    const passportArray : Array<string> = passport.split(/[\n\r\s]+/);
    for (const field of passportArray) {
      const fieldKey : string = field.split(':')[0];
      validSet.delete(fieldKey);
    }
    if (!validSet.size) {
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
    const set = new Set();
    set.add('cid');
    for (const key in passportFields) {
      set.add(key);
      const value = passportFields[key];
      if ((key === 'byr' || key === 'iyr' || key === 'eyr') && value.length === 4) {
        if (validateYear(key, Number(value))) {
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
    if (tempCount === 7 && set.size === 8) {
      count += 1;
    }
  }
  return count;
};

function validateYear(key : string, value : number) : boolean {
  if (key === 'byr') {
    if (value >= 1920 && value <= 2002) {
      return true;
    }
  } else if (key === 'iyr') {
    if (value >= 2010 && value <= 2020) {
      return true;
    }
  } else if (key === 'eyr') {
    if (value >= 2020 && value <= 2030) {
      return true;
    }
  }
  return false;
}

const input = fs.readFileSync('./inputFiles/dayFourInput.txt', 'utf-8');
const inputArray = input.split("\n\n").slice();

dayFour(inputArray);
dayFourPartTwo(inputArray);
// console.log(dayFourPartTwo(inputArray));
console.log(dayFour(inputArray));