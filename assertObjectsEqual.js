const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line

    if (actual === expected) {
      console.log(`Assertion Passed: ✅ ${actual} === ${expected}`)
    } else if (actual !== expected) {
      console.log(`Assertion Failed: ❌ ${actual} !== ${expected}`)
    }
  };
  ///console.log(`Example label: ${inspect(actual)}`


  const eqArrays = function(arr1, arr2){
    let result
    for (let i in arr1){
      if (arr1[i] !== arr2[i]){
      result = false
    } else {
    result = true }
    }   
    return result
  }
  ///
  // Returns true if both objects have identical keys with identical values.
  // Otherwise you get back a big fat false!
  const eqObjects = function(object1, object2) {
    let listOfKeys1 = Object.keys(object1)
    let listOfKeys2 = Object.keys(object2)
    if(listOfKeys1.length !== listOfKeys2.length){
      return false
    } else {
      for (let key in object1) {
        if(eqArrays(object1[key], object2[key])) {
          return true
        }
      }
    }
  };

  const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
assertObjectsEqual(eqObjects(shirtObject , anotherShirtObject), true); // => true
 
const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
assertObjectsEqual(eqObjects(shirtObject , longSleeveShirtObject), false); // => false
