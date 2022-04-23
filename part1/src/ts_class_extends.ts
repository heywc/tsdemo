(() => {
  class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    bark() {
      alert("the Animal is barking!");
    }
  }
  class Dog extends Animal {
    bark() {
      alert(`${this.name} is barking`);
    }
  }
  class Cat extends Animal {
    bark() {
      alert(`${this.name} is barking`);
    }
  }
  const dog = new Dog("小白", 1);
  const cat = new Cat("小黑", 2);
  console.log(dog);
  console.log(cat);
  dog.bark();
  cat.bark();
})();
