// alert("Hello world");

// What you will learn in this course
// 0. Intro programming logic

// 1. Variables & Data Types

// Variables
// var age = 30;
// console.log(age);

// let name = "Anpan";
// name = "Olaf";
// console.log(name);

// const value = 10;
// // value = 10;
// console.log(value);

// // Data Types
// // String, Number, Boolean, null, undefined
let meesage = "Welcome";
const weight = 30;
const rating = 4.5;
const isShow = true;
const x = null;
const y = undefined;
let z;
// const z = "test";

console.log(typeof meesage, meesage);
// console.log(typeof weight, weight);
// console.log(typeof rating, rating);
// console.log(typeof isShow, isShow);
// console.log(typeof x, x);
// console.log(typeof y, y);
// console.log(typeof z, z);

meesage = "wow";
console.log(typeof meesage, meesage);

// // Concatenation of string
// const text = "My name is" + name + ".";
// console.log("text", text);

// // Template String
// const helloMessage = `My name is ${name}.`;
// console.log("helloMessage", helloMessage);

// // 2. Arrays
// // 3. Object Literals
// // 4. Methods for strings, arrays, objects, etc
// // 5. Loops - for, while, for..of, forEach, map
// // 6. Conditionals (if, ternary & switch)
// // 7. Functions (normal & arrow)

// // 8. OOP (prototypes & classess)
// // 9. DOM Selection
// // 10. DOM manipulation
// // 11. Events
// // 12. Basic Form Validation

// let text = 'a';
// const input = 10;

// for(let i=1; i <= input; i++){
//     text = text + '*'
// }

// print()
// print('Pan')

// function print(text) {
//     console.log(text)
// }

//fizzbuzz
// '2'== 2 => true
// '2' === 2 => false
let number = 2;
if (number % 3 == 0 && number % 5 == 0) {
  console.log("FizzBuzz");
} else if (number % 3 == 0) {
  console.log("Fizz");
} else if (number % 5 == 0) {
  console.log("Buzz");
} else {
  console.log(number);
}

function isDivisibleByThree(input) {
  return input % 3 == 0;
}

function isDivisibleByFive(input) {
  return input % 5 == 0;
}

let number = 2;
if (isDivisibleByThree(number) && isDivisibleByFive(number)) {
  console.log("FizzBuzz");
} else if (isDivisibleByThree(number)) {
  console.log("Fizz");
} else if (isDivisibleByFive(number)) {
  console.log("Buzz");
} else {
  console.log(number);
}

const fruits = ["apple", "banana"];
fruits.forEach(function printIndex(value) {
  console.log(value);
});

// normal function
function printIndex(value) {
  console.log(value);
}

// arrow function'
(value) => {
  console.log(value);
};

fruits.forEach((value) => {
  console.log(value);
});

const people = [
  { name: "Pan", age: 20 },
  { name: "Kade", age: 30 },
];
people[0];
