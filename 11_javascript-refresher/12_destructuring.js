const person = {
    name: "Aljon",
    age: 30,
}

const hobbies = ["Exploring", "Discovery", "coding"]

function printName(person){
    console.log(person.name)
}

const { name: firstName, age: yearsOld} = person

const [firstHobby, secondHobby, thirdHobby] = hobbies

console.log(firstName)
console.log(yearsOld)
console.log(firstHobby)
console.log(secondHobby)
console.log(thirdHobby)


