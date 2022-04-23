"use strict";
(() => {
    // 单个泛型
    function fn(a) {
        console.log(a);
        return a;
    }
    fn(12); // 未指定属性类型，则根据传参类型自动推断
    fn("1299999"); // 指定属性类型
    // 指定多个泛型
    function fn2(a, b) {
        console.log(b);
        let res = a;
        return res;
    }
    fn2("ywc", "yyy");
    console.log(fn2("ywc", "yyy"));
    function getLength(a) {
        return a.length;
    }
    const target = {
        length: 11,
        name: "hh",
    };
    console.log(getLength(target)); // 11
    // 泛型在类中的使用
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    const person1 = new Person("ywc");
    const person2 = new Person("yyy");
    console.log(person1); // Person {name: 'ywc'}
    console.log(person2); // Person {name: 'yyy'}
})();
