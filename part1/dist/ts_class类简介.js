"use strict";
class Person {
    constructor() {
        // 实例属性 通过实例对象进行访问 可修改
        this.name = "ywc";
        this.age = 25;
        // 只读属性 通过实例对象进行访问 无法被修改
        this.collage = "南开大学";
    }
    // 实例方法 通过实例对象进行调用
    sayHello() {
        console.log("hello");
    }
    // static 类型方法 通过类进行调用
    static walk() {
        console.log("walking");
    }
}
// 静态属性（类属性） 通过类进行访问
Person.type = "animal";
// 静态只读
Person.hh = "haha";
const per = new Person();
console.log(per);
per.name = "hhh";
console.log(per);
console.log(Person.type);
Person.type = "animal hh";
console.log(Person.type);
