let countLetters = function(string){
  let results = {}
  for (let letter of string){
    if (letter !== " "){
      if (results[letter]){ // an if statement that just check is something exists
      results[letter] += 1 //if it exists add one
      } else{
        results[letter] = 1 // if its the first time, start it at one
      }
    }
  }
  return results
}

/* /// not sure how to do assert equal, it shoudl equal an object
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ✅ ${actual} === ${expected}`)
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ❌ ${actual} !== ${expected}`)
  }
};
assertEqual(countLetters("LHL")), {L:2, H:1}
*/