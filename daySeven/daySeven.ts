const fs = require('fs');
const input = fs.readFileSync('../inputFiles/daySevenInputC.txt', 'utf-8');
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

// daySeven(rules);
// console.log(daySeven(rules));

function daySevenPartTwo(rules : Array<string>) : number {
  let count : number = 0;
  let depth : number = 0;

  function recursion(parentNode : string, numberOfParentBags : number, depth : number) : void {
    children(parentNode, rules).forEach((child) => {
      console.log('parent, num of par bags: ', parentNode, numberOfParentBags);
      console.log('child: ', child);
      const numberOfChildrensBags = childrenBags(children(child.match(/(?<=[0-9][ ])(.*?)$/)[0], rules));
      console.log('numofChildrensbags: ', numberOfChildrensBags);
      // if (child !== 'no other bags') {
        count += numberOfParentBags + numberOfParentBags ** numberOfChildrensBags;
      // }
      if (child !== 'no other bags' && children(child.match(/(?<=[0-9][ ])(.*?)$/)[0], rules)) {
        recursion(child.match(/(?<=[0-9][ ])(.*?)$/)[0], numberOfBags(child), depth + 1);
      }
    })
  }
  recursion('shiny gold bags', 1, depth);
  return count;
}

function children(parent : string, rules : Array<string>) : Array<string> {
  for (const rule of rules) {
    const potentialParent = rule.match(/^(.*?)(?=[ ][c][o][n][t][a][i][n])/)[0];
    const children = rule.match(/(?<=[c][o][n][t][a][i][n][ ]|[,][ ])(.*?)(?=[,.])/g);
    if (parent === potentialParent) {
      return children;
    }
  }
  return null;
}

function childrenBags(children : Array<string>) : number {
  let childrenBagsCount = 0;
  console.log('children: ', children);
  if(children) {
    children.forEach((child) => {
      childrenBagsCount += numberOfBags(child);
    })
    return childrenBagsCount;
  }
  return 0;
}
function numberOfBags(node : string) : number {
  return Number(node.match(/^([0-9]*)(?=[ ])/)[0]);
}
console.log(daySevenPartTwo(rules));
export {}