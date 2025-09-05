class Person {
    constructor(name) {
        this.name = name
    }

    sayHello(){
        console.log("Hi, I am " + this.name)
    }
}

class Student extends Person {
    constructor(name){
        super(name)
    }
    study(){
        console.log(`${this.name} is studying`)
    }
}

const person = new Person("aljon")
person.sayHello()

const student = new Student("Aljon")
student.sayHello()
student.study()