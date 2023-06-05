const eqArrays = require('./eqArrays');

const assertEqualArrays = function(arr1, arr2, expected) {
  let actual;
  if (eqArrays(arr1, arr2) === true) {
    actual = true;
  } else {
    actual =  false;
  }

  if (actual === expected) {
    console.log(`Assertion Passed: ✅ ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ❌ ${actual} !== ${expected}`);
  }
};
module.exports = assertEqualArrays;