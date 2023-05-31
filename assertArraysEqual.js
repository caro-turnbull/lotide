const assertEqualArrays = function(arr1, arr2, expected) {
  for (let i in arr1){
    if (arr1[i] !== arr2[i]){
    actual = false
  } else {
  actual = true }
  }   
  if (actual === expected) {
    console.log(`Assertion Passed: ✅ ${actual} === ${expected}`)
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ❌ ${actual} !== ${expected}`)
  }
}


assertEqualArrays([1, 2, 3], [1, 2, 3], true); // => should PASS
assertEqualArrays([1, 2, 3], [3, 2, 1], false); // => false

assertEqualArrays(["1", "2", "3"], ["1", "2", "3"], true); // => true
assertEqualArrays(["1", "2", "3"], ["1", "2", 3], false); // => false