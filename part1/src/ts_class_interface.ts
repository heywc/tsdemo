(() => {
  // 用type来定义对象的属性结构
  type myType = {
    name: string;
    age: number;
  };
  const obj: myType = {
    name: "ywc",
    age: 12,
  };
  console.log(obj);

  // 接口同样能实现type的功能来定义对象的属性结构
  interface myInterface {
    name: string;
    age: number;
  }
  const obj2: myInterface = {
    name: "小鱼",
    age: 25,
  };
  console.log(obj2);
  // 用接口定义类的结构,方法必须是抽象方法
  interface myInterf {
    name: string;
    sayHello(): void;
  }
  class Person implements myInterf {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    sayHello(): void {
      console.log("hello");
    }
  }
  const man1 = new Person("ywc");
  console.log(man1);
  man1.sayHello();
})();
