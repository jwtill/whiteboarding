//! Question #1: Turning Strings to URLs
//URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

//!With .map
function stringUrl(stringSpace) {
  let stringArr = stringSpace.split("");
  const addTwenty = stringArr.map((char) => {
    if (char === " ") {
      return "%20";
    } else {
      return char;
    }
  });
  return addTwenty.join("");
}

//!With Recursion work on this?????
function stringUrl(stringArr, i) {
  if (char[i] === " ") {
    stringUrl("%20", i++);
  } else {
    stringUrl(stringArr[i], i++);
  }
}
//