"use strict";
(() => {
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        bark() {
            alert("dog is barking!");
        }
    }
    const dog = new Dog("小白");
    console.log(dog);
    dog.bark();
})();
