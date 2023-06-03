const assertEqualArrays = function(actual, expected) {
  for (let i in actual){
    if (actual[i] == expected[i]){
    console.log(`Assertion Passed: ✅ ${actual[i]} === ${expected[i]}`)
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ❌ ${actual[i]} !== ${expected[i]}`)
  }
  }
}

const maps = function(array, callback){
  const results = [];
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const results1 = maps(words, word => word[0]);

const numbers = [[1,2,3,4], [5,6,7], [8,9,4,4,9], [2,2,2]]
const results2 = maps(numbers, num => num[0]);

assertEqualArrays(results1, [ 'g', 'c', 't', 'm', 't' ])
assertEqualArrays(results2, [1,5,8,2])

