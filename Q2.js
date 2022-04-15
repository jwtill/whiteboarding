//! Question #2: Array Deduping
// Write an algorithm that removes duplicates from an array. ////!Do not use a function like filter() to solve this. 
//Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

//! Example
// Input: [7, 9, "hi", 12, "hi" 7, 53]

// Output: [7, 9, "hi", 12, 53]

function removeDupl(arr) { //[1, 4, sandwich, 1]
  result = []; 
  for(let i = 0; i < arr.length; i++) { //loop 4 times
      for(let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j+1]) {
          result.push(arr[i]);
        }
      }
  }
  return result;
}

// function removeDupl(arr) {
//   return arr.filter((i) => {
//     for(let i = 0; i<arr.length; i++) {
//       return 
//     }
//   });
// }