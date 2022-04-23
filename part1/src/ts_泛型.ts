(() => {
  // 单个泛型
  function fn<T>(a: T): T {
    console.log(a);
    return a;
  }
  fn(12); // 未指定属性类型，则根据传参类型自动推断
  fn<string>("1299999"); // 指定属性类型

  // 指定多个泛型
  function fn2<T, K>(a: T, b: K): T {
    console.log(b);
    let res: T = a;
    return res;
  }
  fn2("ywc", "yyy");
  console.log(fn2("ywc", "yyy"));

  // 泛型可以是接口的子类
  interface Inter {
    length: number;
  }
  function getLength<T extends Inter>(a: T): number {
    return a.length;
  }
  const target = {
    length: 11,
    name: "hh",
  };
  console.log(getLength(target)); // 11
  // 泛型在类中的使用
  class Person<T> {
    name: T;
    constructor(name: T) {
      this.name = name;
    }
  }
  const person1 = new Person("ywc");
  const person2 = new Person<string>("yyy");
  console.log(person1); // Person {name: 'ywc'}
  console.log(person2); // Person {name: 'yyy'}
})();
