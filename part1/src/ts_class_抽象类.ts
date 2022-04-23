(() => {
  abstract class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    abstract bark(): void;
  }
  class Dog extends Animal {
    bark() {
      alert("dog is barking!");
    }
  }
  const dog = new Dog("小白");
  console.log(dog);
  dog.bark();
})();
