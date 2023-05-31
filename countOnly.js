
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ✅ ${actual} === ${expected}`)
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ❌ ${actual} !== ${expected}`)
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

let countOnly = function(allItems, itemsToCount) {
//let keys = Object.keys(itemsToCount)  //array of keys/names from items to count

  const results = {};
  for (let item of allItems) {
    if (itemsToCount[item]){
      if (results[item]) { //if there is already a name in the new object "result" add 1 to its value
        results[item] += 1;
      } else {            // if there is not already that name, created a new property/key
        results[item] = 1;
      }
    } 
  }
return results;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);