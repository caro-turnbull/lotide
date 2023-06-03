
const without = function(sourceArray, itemsToRemove){
  let returnArray = [...sourceArray]
  for (let i = 0; i < returnArray.length; i++) {      //loops throught he source
    for(let j = 0; j < itemsToRemove.length; j++) {   //loops through the itemstoremove
      if(returnArray[i] === itemsToRemove[j]) {   
        returnArray.splice(i,1)           //splices any matches?
        console.log(returnArray)
      }                                           
    }
  }
return returnArray                               //do i need to return twice for two for loops?
}



//tests
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
//assertArraysEqual(words, ["hello", "world", "lighthouse"]);