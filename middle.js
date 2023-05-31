const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ✅ ${actual} === ${expected}`)
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ❌ ${actual} !== ${expected}`)
  }
};

const eqArrays = function(actual, expected){
  let equalResult
  for (let i of actual){
    if (actual[i] !== expected[i]){
    equalResult = false
  } else {
  equalResult = true }
  }   
  return equalResult
}


///////

const assertEqualArrays = function(actual, expected) { //actual is the result of middle func and expected is given in the test 
  assertEqual(eqArrays(actual, expected), true)   // the eqArrays function returns true or false, so I should always compare to true to know if it worked???
}

////////

const middle = function(array){

  let actual = []
  let middleIndex =0

  //if array is 2 or less, return empty array
   if (array.length <=2){
    return actual
  }
   //see if array length is even number (then return 2 values)
   else if (array.length %2 === 0) {
    middleIndex = (array.length / 2)
    actual.push (array[middleIndex], array[middleIndex+1])
    return actual
   }
   //if array is odd number in length, return 1 values
   else if (array.length %2 === 1) {
    middleIndex = (Math.ceil(array.length / 2))
    actual.push(array[middleIndex])
    return actual
   }
   }


   //test cases pass an array through the middle function
   // and then that result along with the  expected result through assertEqualArray(which contacts eqArray)
assertEqualArrays(middle([1, 2, 3, 4]), [2, 3]);  
assertEqualArrays(middle([2, 3, 4, 5, 6, 7, 8]), [5]);
assertEqualArrays(middle([1]), []);
assertEqualArrays(middle(["a", "b", "c"]), ["b"]);