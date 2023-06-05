const assert = require('chai').assert
const middle = require('../middle');

describe("#middle", () => {
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  }); 
  it("returns ['b'] for ['a', 'b', 'c']", () => {
    assert.deepEqual(middle(['a', 'b', 'c']), ['b']);
  }); 
})

// assertEqualArrays((middle([1, 2, 3, 4])), [2, 3], true);
// assertEqualArrays((middle([2, 3, 4, 5, 6, 7, 8])), [5], true);
// assertEqualArrays((middle([1])), [], true);
// assertEqualArrays((middle(["a", "b", "c"])), ["b"], true);