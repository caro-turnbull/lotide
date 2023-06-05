const assertEqualArrays = require('../assertArraysEqual')

assertEqualArrays([1, 2, 3], [1, 2, 3], true); // => should PASS
assertEqualArrays([1, 2, 3], [3, 2, 1], false); // => false

assertEqualArrays(["1", "2", "3"], ["1", "2", "3"], true); // => true
assertEqualArrays(["1", "2", "3"], ["1", "2", 3], false); // => false