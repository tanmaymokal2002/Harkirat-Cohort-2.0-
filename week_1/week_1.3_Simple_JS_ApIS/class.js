"use strict";

class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }
  info() {
    console.log(
      `${this.name} has ${this.legCount} legs and it speaks ${this.speaks}`
    );
  }
}

let dog = new Animal("Dog", 4, "bow bow");
let cat = new Animal("Cat", 4, "meow meow");
dog.info();
cat.info();
