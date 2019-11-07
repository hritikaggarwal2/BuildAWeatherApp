/*
1. write a function called pow that takes in two numbers (a,b)
and returns a^b

Example: 
let val = pow(3,4) // val is 81

2. call pow(2,10) and print it to the console

*/

function pow(a,b) {
    let out = a
    for (let i = 0; i < b - 1; i++) {
        out = out * a
    }
    return out
}

console.log(pow(2,10))