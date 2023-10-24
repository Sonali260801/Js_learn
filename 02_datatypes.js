"use strict";// treat all the JS code as newer version

// alert(3+3)------we are using node not the browser
console.log(typeof null)


// Conversions
let score="23"
let score1="23sc"
console.log(typeof score)

let valueIntNumber=Number(score)
console.log(typeof valueIntNumber)

// but if its alpha numerical it gives NaN value
let valueIntNumber1=Number(score1)
console.log(typeof valueIntNumber1)
console.log(valueIntNumber1)

// Number(score)
// String(score)
// Boolean(score)