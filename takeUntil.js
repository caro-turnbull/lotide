const takeUntil = function(array, callback) {
  for(let i = 0; i <array.length; i++) {
    if(callback(array[i])) {
       return array.slice(0, i);  //testing if slicing is working
                    // testing if it founfd the irhg spot
    }
  }
}  



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);  // expected reult [1,2,5,7,2]

// console.log('---');  

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);   // expected result [I've, been, to, Hollywood]