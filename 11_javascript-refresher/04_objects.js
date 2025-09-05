const aboutMe = {
    name: "Alice",
    age: 25,
    course: "Web Development",

    introduce: function () {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

aboutMe.hobby = "Painting";

aboutMe.introduce();

