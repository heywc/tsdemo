class Dog {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    console.log(this);
  }
}
const dog = new Dog("小黑", 3);
