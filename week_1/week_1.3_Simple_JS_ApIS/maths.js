"use strict";

function mathMethods(value) {
  console.log("original value: ", value);

  let rounded = Math.round(value);
  // console.log("After rounded: ", rounded);

  let ceiling = Math.ceil(value);
  // console.log("After ceiling: ", ceiling);

  let flooring = Math.floor(value);
  // console.log("After flooring: ", flooring);

  let random = Math.random();
  // console.log("Random num: ", random);

  let maxi = Math.max(23, -1, 13);
  // console.log(maxi);

  let mini = Math.min(23, -1, 13);
  // console.log(mini);

  let power = Math.pow(value, 3);
  console.log(power);

  let sqrt = Math.sqrt(value);
  console.log(sqrt);
}

// mathMethods(2);
