//! Question #2: Array Deduping
// Write an algorithm that removes duplicates from an array. ////!Do not use a function like filter() to solve this. 
//Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

//! Example
// Input: [7, 9, "hi", 12, "hi" 7, 53]

// Output: [7, 9, "hi", 12, 53]

function removeDupl(arr) { 
  if (typeof arr != "object") {
    return 0;
  }
  let unique = []; //create empty array
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) { //check to see if unique array does not include element in array, if that is the case, push it
      unique.push(arr[i]);
    }
  }
  return unique;
}

//with filter
function removeDupl(arr) {
  if(typeof arr != "object") {
    return 0;
  }
  return arr.filter((elem, index) => 
     arr.indexOf(elem) == index) //first time elem is encountered, elem should equal index, next time is encountered, index will be different
  }


// function removeDupl(arr) {
//   return arr.filter((i) => {
//     for(let i = 0; i<arr.length; i++) {
//       return 
//     }
//   });
// }