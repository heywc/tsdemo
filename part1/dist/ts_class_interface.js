"use strict";
(() => {
    const obj = {
        name: "ywc",
        age: 12,
    };
    console.log(obj);
    const obj2 = {
        name: "小鱼",
        age: 25,
    };
    console.log(obj2);
    class Person {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log("hello");
        }
    }
    const man1 = new Person("ywc");
    console.log(man1);
    man1.sayHello();
})();
