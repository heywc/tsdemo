"use strict";
(() => {
    class Dog {
        constructor(_name, _age) {
            this._name = _name;
            if (_age > 0) {
                this._age = _age;
            }
            else {
                this._age = 0;
            }
        }
        // 原生js获取私有属性的方式
        getAge() {
            return this._age;
        }
        // 原生js设置私有属性的方式
        setAge(age) {
            if (age > 0) {
                this._age = age;
            }
        }
        get name() {
            return this._name;
        }
        set name(val) {
            this._name = val;
        }
        get age() {
            return this._age;
        }
        set age(val) {
            if (val > 0) {
                this._age = val;
            }
        }
    }
    const dog = new Dog("小白", 1);
    console.log(dog.getAge());
    dog.setAge(8);
    console.log(dog); // Dog {_name: '小白', _age: 8}
    dog._name = "小呵"; // 公共属性 修改成功
    // dog._age = 10; // 私有属性 访问报错
    // dog.age = -1; // 修改失败
    dog.age = 10; // 修改成功
    console.log(dog); // Dog {_name: '小呵', _age: 10}
    class A {
        constructor(age) {
            this.age = age;
        }
    }
    class B extends A {
        tellAge() {
            console.log(this.age);
        }
    }
    const smallB = new B(12);
    console.log(smallB);
    // console.log(smallB.age); // 属性“age”受保护，只能在类“A”及其子类中访问
    smallB.tellAge();
})();
