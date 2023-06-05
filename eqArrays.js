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

module.exports = eqArrays
