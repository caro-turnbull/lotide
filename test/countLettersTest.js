const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("returns L:2, H:1 for LHL", () => {
    assert.deepEqual(countLetters("LHL"), {L:2, H:1});
  });
  it("returns t:2, a:2, c:2, o:1 for taco cat", () => {
    assert.deepEqual(countLetters('taco cat'), {t:2, a:2, c:2, o:1});
  });
});