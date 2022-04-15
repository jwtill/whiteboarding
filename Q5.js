//! Question #5: Array Sorting
// Write an algorithm that sorts an array without using the sort() method. There are many different sorting algorithms - take the time to read about the following:

// Quick sort
// Merge sort
// Heap sort
// Insertion sort
// Bubble sort
// Selection sort

// You may implement any of the above algorithms (or your own) to solve the problem - as long as it doesn't use sort().

// Example
// Input: [9, 2, 7, 12]

// Output: [2, 7, 9, 12]

function sortArray(input) {
  let output = [];
  let times = input.length;
  for(let i = 0; i<times; i++) {
    output.push(Math.min(...input)); //add smallest
    input = input.filter(e => e != (Math.min(...input))); //remove smallest from input
  }
  return output;
}