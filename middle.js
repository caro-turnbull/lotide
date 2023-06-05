
const middle = function(array) {
  let actual = [];
  let middleIndex = 0;

  //if array is 2 or less, return empty array
  if (array.length <= 2) {
    return [];
  }
  //see if array length is even number (then return 2 values)
  else if (array.length % 2 === 0) {
    middleIndex = (array.length / 2);
    actual.push(array[middleIndex - 1], array[middleIndex]);
    return actual;
  }
  //if array is odd number in length, return 1 values
  else if (array.length % 2 === 1) {
    middleIndex = (Math.floor(array.length / 2));
    actual.push(array[middleIndex]);
    return actual;
  }
};

module.exports = middle;