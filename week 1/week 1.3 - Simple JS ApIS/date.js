"use strict";

function dateMethods() {
  const currDate = new Date();
  console.log("CurrDate: ", currDate);

  //Getting various components of the date:
  console.log("Date: ", currDate.getDate());
  console.log("Month: ", currDate.getMonth());
  console.log("Year: ", currDate.getFullYear());
  console.log("Hour: ", currDate.getHours());
  console.log("Minutes: ", currDate.getMinutes());
  console.log("Seconds: ", currDate.getSeconds());

  //Setting components of the date:
  currDate.setFullYear(2022);
  currDate.setDate(21);
  currDate.setMonth(11);
  console.log("After setting full year: ", currDate);

  //Getting and setting time in Millseconds since 1970:
  console.log("Time in milliseconds since 1970: ", currDate.getTime());

  //new Date:
  const newDate = new Date(2024, 9, 25);
  console.log("New Date: ", newDate);
}
dateMethods();

//Usecase of getTime():
function calcSum() {
  let sum = 0;
  for (let i = 0; i < 10000000; ++i) {
    sum += 1;
  }
}

const beforeDate = new Date();
const beforeTimeinMS = beforeDate.getTime();

calcSum();

const afterDate = new Date();
const afterTimeinMS = afterDate.getTime();

console.log(afterTimeinMS - beforeTimeinMS);
