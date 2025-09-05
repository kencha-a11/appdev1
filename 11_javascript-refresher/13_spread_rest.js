const numbers = [1,2,3]
const user = { name: "Aljon", age: 20}

const newNumber = [...numbers]
const newUser = {...user}


function sum(a,b) {
    return a+b
}

console.log(newNumber)
console.log(newUser)