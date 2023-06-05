let countLetters = function(string) {  //takes in a string
  let results = {};
  for (let letter of string) {
    if (letter !== " ") {
      if (results[letter]) { // an if statement that just check is something exists
        results[letter] += 1; //if it exists add one
      } else {
        results[letter] = 1; // if its the first time, start it at one
      }
    }
  }
  return results;       //returns an object
};
module.exports = countLetters;

