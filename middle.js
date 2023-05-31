

const eqArrays = function(aghrr1, arr2){
  let result
  for (let i in arr1){
    if (arr1[i] !== arr2[i]){
    result = false
  } else {
  result = true }
  }   
  return result
}




const assertEqualArrays = function(eqArrays, expected) {
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
*/
///////

const middle = function(array){

  let result = []
  let middleIndex =0

  //if array is 2 or less, return empty array
   if (array.length <=2){
    return result
  }
   //see if array length is even number (then return 2 values)
   else if (array.length %2 === 0) {
    middleIndex = (array.length / 2)
    result.push (array[middleIndex], array[middleIndex+1])
    console.log(result)
   }
   //if array is odd number in length, return 1 values
   else if (array.length %2 === 1) {
    middleIndex = (Math.ceil(array.length / 2))
    result.push(array[middleIndex])
    return result
   }
   }

console.log (middle([1, 2]))