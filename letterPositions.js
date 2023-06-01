const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i< sentence.length; i++){
    let letter = sentence[i];
    if (letter !== " "){  //check that its not a space
      if (!results[letter]){ //if there is not already a property/key for this letter
        results[letter] = [] //if not, create an empty array
      }
      results[letter].push(i) //  push a index into an array
    } 
  }
  return results;
}

console.log(letterPositions("lighthouse in the house"))