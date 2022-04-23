"use strict";
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log(this);
    }
}
const dog = new Dog("小黑", 3);
