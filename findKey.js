
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ✅ ${actual} === ${expected}`)
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ❌ ${actual} !== ${expected}`)
  }
};

const findKey = function(object, callback){
  let returnKey = ''

  for (let key in object){
    console.log('this is callback', callback(object[key]))
    if(callback(object[key]) == true){     
      // console.log(key); //this prints the correct answer
      // console.log(object[key])
      returnKey = key
      break;
    }

  }
  console.log('this is returnKey', returnKey)
  return returnKey;
}

let findKeys = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

assertEqual(findKeys, "noma");   