let hobbies = ["Reading", "Drawing", "Swimming"];

hobbies.map(function(hobby) {
  console.log(hobby);
});

let student = { name: "Sara", age: 18 };
let { name, age } = student;

console.log("Name: " + name);
console.log("Age: " + age);
 
let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4, 5]; // destructing array

console.log(newNumbers);
