module.exports = function(currentMin : number, currentMax : number) : number {
  return currentMax - (Math.floor((currentMax - currentMin) / 2)) - 1;
}