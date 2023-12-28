"use strict";

function objectMethods(obj) {
  let keys = Object.keys(obj);
  console.log(keys);

  let values = Object.values(obj);
  console.log(values);

  let entries = Object.entries(obj);
  console.log(entries);

  let hasprop = obj.hasOwnProperty("firstName");
  console.log("After hasOwnProperty: ", hasprop);

  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj);
}

const Person = {
  firstName: "Tanmay",
  lastName: "Mokal",
  age: 21,
  job: "SDE",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
// objectMethods(Person);
