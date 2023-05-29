
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed: ✅ " + actual + " === " + expected);
  } else if (actual !== expected) {
    console.log("Assertion Failed: ❌ " + actual + " !== " + expected);
  }
};


//Test Code
assertEqual("Lighthouse Labs", "BootCamp");
assertEqual(1,1);
assertEqual(1,1.5);
assertEqual("testing", "testing");

