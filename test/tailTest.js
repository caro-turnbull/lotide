const assert = require('chai').assert
const tail = require('../tail');


describe("#tail", () => {
  it("returns [6, 7] for [5, 6, 7]", () => {
    assert.deepEqual(tail([5, 6, 7]), [6,7]);
  }); 
})

// assertEqual(tail([5,6,7]), [6, 7]);
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
// assertEqual(tail([0,9,8,7,6,5,4,3,2,1]), [9,8,7,6,5,4,3,2,1]);
