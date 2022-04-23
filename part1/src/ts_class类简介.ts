class Person {
  // 实例属性 通过实例对象进行访问 可修改
  name: string = "ywc";
  age: number = 25;
  // 只读属性 通过实例对象进行访问 无法被修改
  readonly collage: string = "南开大学";
  // 静态属性（类属性） 通过类进行访问
  static type: string = "animal";
  // 静态只读
  static readonly hh: string = "haha";

  // 实例方法 通过实例对象进行调用
  sayHello() {
    console.log("hello");
  }
  // static 类型方法 通过类进行调用
  static walk() {
    console.log("walking");
  }
}
const per = new Person();
console.log(per);
per.name = "hhh";
console.log(per);
console.log(Person.type);
Person.type = "animal hh";
console.log(Person.type);
