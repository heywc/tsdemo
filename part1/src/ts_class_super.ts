(() => {
  class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    bark() {
      alert("the Animal is barking!");
    }
  }
  class Dog extends Animal {
    age: number;
    constructor(name: string, age: number) {
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
