const assertEqualArrays = require('../assertArraysEqual');
const middle = require('../middle');

assertEqualArrays((middle([1, 2, 3, 4])), [2, 3], true);
assertEqualArrays((middle([2, 3, 4, 5, 6, 7, 8])), [5], true);
assertEqualArrays((middle([1])), [], true);
assertEqualArrays((middle(["a", "b", "c"])), ["b"], true);