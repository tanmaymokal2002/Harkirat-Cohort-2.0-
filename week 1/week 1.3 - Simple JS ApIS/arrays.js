"use strict";
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let arr2 = ["Tanmay", "Amar", "Shivani"];
// Array handbook

/*
push(), => push element at end
pop(),  => remove element from end
shift(), => remove element from start
unshift(), => addd element at start
splice(), => splice(start, delcount, adding new elements)
slice(), => slice(start, end -> not including)
concat(), =>  join two arrays
forEach(), => loop through array
map(), 
filter(), 
reduce(), 
find(), 
sort()
*/
//push():
function pushEx(arr, element) {
  console.log("Original Array:", arr);
  arr.push(element);
  console.log("After push:", arr);
}

//pop()
function popEx(arr) {
  console.log("Original Array:", arr);
  arr.pop();
  console.log("After pop:", arr);
}

//shift()
function shiftEx(arr) {
  console.log("Original Array:", arr);
  arr.shift();
  console.log("After shift:", arr);
}

//unshift()
function shiftEx(arr, el) {
  console.log("Original Array:", arr);
  arr.unshift(el);
  console.log("After unshift:", arr);
}

//splice():
function spliceEx(arr, start, delCount) {
  console.log("Original Array:", arr);
  arr.splice(start, delCount, "adding something is possible");
  console.log("After splice:", arr);
}

//slice():
function sliceEx(arr, start, end) {
  console.log("Original Array:", arr);
  arr.slice(start, end);
  console.log("After slice:", arr);
}

//concat():
function concatEx(arr1, arr2) {
  console.log("Original Array:", arr1, arr2);
  let arr3 = arr1.concat(arr2);
  console.log("After concat: ", arr3);
}

//ForEach
arr2.forEach(function (item, index) {
  console.log(item, index);
});

// pushEx([1, 2, 3], 4);
// popEx([1, 2, 3]);
// shiftEx([1, 2, 3]);
// shiftEx([1, 2, 3], 69);
// spliceEx(arr, 1, 2);
// sliceEx(arr, 1, 3);
// concatEx(arr, arr2);
