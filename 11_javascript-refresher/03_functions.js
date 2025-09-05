function greet(name) {
    console.log(`Hello ${name}`)
}

const square = (num) => {
    return num * 2
}

function calculator(num1, num2) {
    const sum = num1 + num2
    const product = num1 * num2
    return { sum, product }
}

greet('aljon')
console.log(square(8))
console.log(calculator(6, 4))