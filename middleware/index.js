const middleware = require('./middleware')
let data = require('./data.json')



let x = Number(data.nums[0])
let y = Number(data.nums[1])

function sumar(x, y) {
    return middleware(x + y)
}

function restar(x, y) {
    return middleware(x - y)
}


function multiplicar(x, y) {
    return middleware(x * y)
}

console.log(`${x} + ${y} =>`, sumar(x, y))
console.log(`${x} - ${y} =>`, restar(x,y))
console.log(`${x} * ${y} =>`, multiplicar(x, y))
