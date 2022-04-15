// Write an algorithm that determines whether all the elements in a string are unique. 
//!You may not convert the string into an array or use array methods to solve this problem. 
//The algorithm should return a boolean.

// Example
// Input: "hello"

// Output: false

// Input: "copyright"

// Output: true

function uniqueElement(str) {
  return !/(.)\1/.test(str);
}
or 
function uniqueElement(str) {
  return str.includes("aa" etc)
}

//regex expression checks to see if any element is repeadted, returns true if so, then ! makes that false