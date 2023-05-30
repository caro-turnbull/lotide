let tail = function(array){
  console.log(array.slice(1))  

}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ✅ ${actual} === ${expected}`)
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ❌ ${actual} !== ${expected}`)
  }
};

assertEqual(tail([5,6,7]), 5);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");

