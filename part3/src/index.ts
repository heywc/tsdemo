import { hi } from "./m1";

function hello(name: string) {
  console.log(`${name}-hello`);
}

let gg: string = "hello";
hello("ywc");
console.log("haha");
console.log("haha", 11);
console.log(hi);

const obj: { name: string; age: number } = {
  name: "ywc",
  age: 25,
};
console.log(obj);
console.log(Promise);
