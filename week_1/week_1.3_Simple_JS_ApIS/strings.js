"use strict";
//Strinng handbook

/*
String :
length,
indexOf(),
lastIndexOf(),
replace(),
slice(),
substr(), - not used anymore
split(), => converts into array
trim(), => remove spaces
toUpperCase(),
toLowerCase(),
etc..
*/

let str = "Tanmay Mokal Mokal";
let str2 = "Tejas Mokal";

//length
function getLength(str) {
  console.log("Original String: ", str);
  console.log("Length: ", str.length);
}

//indexOf()
function getIndexOf(str, target) {
  console.log("Original String: ", str);
  console.log("Index: ", str.indexOf(target));
}

//lastIndexOf()
function getLastIndexOf(str, target) {
  console.log("Original String: ", str);
  console.log("Index: ", str.lastIndexOf(target));
}

//slice
function getSlice(str, start, end) {
  console.log("Original String: ", str);
  console.log("After Slicing: ", str.slice(start, end));
}

//cutIt = slice
function cutIT(str, s, e) {
  let ans = "";
  for (let i = s; i <= e; ++i) {
    ans += str[i];
  }
  console.log(ans);
}

//replace
function replaceString(firstStr, secondStr) {
  console.log("Original String: ", str);
  console.log("After Replacing: ", str.replace(str, str2));
}

//split
function getSplitStr(str, separator) {
  console.log("Original String: ", str);
  console.log("Final String: ", str.split(separator));
}

//trim
function trimString(str) {
  console.log("Original String:", str);
  console.log("After trim:", str.trim());
}

// toUpperCase
function toUpper(str) {
  console.log("Original String:", str);
  console.log("After toUpperCase:", str.toUpperCase());
}

// toLowerCase
function toLower(str) {
  console.log("Original String:", str);
  console.log("After toLowerCase:", str.toLowerCase());
}

// getLength(str);
// getIndexOf(str, "y");
// getLastIndexOf(str, "Mokal");
// getSlice(str, 0, 6);
// cutIT(str, 0, 6);
// getSplitStr(str, " ");
// trimString(" Hello World ");
// toUpper("Hello World");
// toLower("Hello World");
