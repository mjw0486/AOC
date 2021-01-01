const fs = require('fs');
const input = fs.readFileSync('../inputFiles/daySevenInput.txt', 'utf-8');
const rules = input.split('\n').slice(0, -1);

function daySeven(rules : Array<string>) : number{
  let ruleMap = {};
  for (const rule of rules) {
    const parentIndex = rule.indexOf(' contain');
    const parentBag = rule.slice(0, parentIndex);
    const children = rule.match(/(?<=[0-9][ ])(.*?)(?=[,.])/g);
    ruleMap[parentBag] = children;
  }
  let countSet = new Set();
  function recursion(targetBags : string) : void {
    Object.keys(ruleMap).forEach((key) => {
      if (ruleMap[key] !== null && ruleMap[key].indexOf(targetBags) !== -1) {
        countSet.add(key);
        recursion(key);
        recursion(key.slice(0,-1))
      }
    })
  }
  recursion('shiny gold bags')
  recursion('shiny gold bag')
  return countSet.size;
}

daySeven(rules);
console.log(daySeven(rules));

export {}