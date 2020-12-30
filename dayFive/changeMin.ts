export const changeMin = function(currentMin : number, currentMax : number) : number {
  return Math.floor((currentMax - currentMin) / 2) + currentMin + 1;
}
