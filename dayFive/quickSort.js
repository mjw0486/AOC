module.exports = function quicksort(array) {
  if (array.length <= 1) {
    return array;
  }
  let result = [];
  const pivot = [array[array.length - 1]];
  let lessThanNumbers = [];
  let greaterThanNumbers = [];
  for (let i = 0; i < array.length - 1; i += 1) {
    if (array[i] < pivot[0]) {
      lessThanNumbers.push(array[i]);
    } else if (array[i] === pivot[0]) {
      pivot.push(array[i]);
    } else {
      greaterThanNumbers.push(array[i]);
    }
  }
  if (lessThanNumbers.length >= 1) {
    lessThanNumbers = quicksort(lessThanNumbers);
  }
  if (greaterThanNumbers.length >= 1) {
    greaterThanNumbers = quicksort(greaterThanNumbers);
  }
  result = lessThanNumbers.concat(pivot, greaterThanNumbers);
  return result;
};
