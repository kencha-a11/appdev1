let x = 5;
let y = "5";

console.log(x == y);  // true (values are equal, type is not checked)
console.log(x === y); // false (checks value AND type)

let a;
let b = null;

console.log(a); // undefined (not assigned any value)
console.log(b); // null (intentionally set to "nothing")


let name = 'aljon'

let person = {
    name: "Aljon",
    regularFunction: function () {
        console.log("regularFunction this.name:", this.name);
    },
    arrowFunction: () => {
        console.log("arrowFunction this.name:", this.name);
    }
};

person.regularFunction(); // 'Aljon' — 'this' refers to person
person.arrowFunction();   // undefined — 'this' refers to outer scope (not the object)
