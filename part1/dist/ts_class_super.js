"use strict";
(() => {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        bark() {
            alert("the Animal is barking!");
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            super(name);
            this.age = age;
        }
        dogBark() {
            super.bark();
        }
    }
    const dog = new Dog("小白", 1);
    console.log(dog);
    dog.bark();
    dog.dogBark();
})();
