"use strict";

function jsonMethods(jsonString) {
  console.log("Original JSON Str: ", jsonString);

  //Parsing JSON string to JS Object:
  let parsedObj = JSON.parse(jsonString);
  console.log("After parsing: ", parsedObj);
  let jsonStringyfied = JSON.stringify(jsonString);
  console.log("After stringifying: ", jsonStringyfied);
}
const sampleJSONstr =
  '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';
jsonMethods(sampleJSONstr);
