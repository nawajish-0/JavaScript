const score = 400  // undefined
// console.log(score);

const balance = new Number(100)  // Number
console.log(balance);

console.log(balance.toString().length); // to convert to string
console.log(balance.toFixed(1));   // 100.0
console.log(balance.toFixed(2));   // 100.00

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4)); //123.9

const hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());  // 0 to 1(always)
console.log((Math.random()*10) + 1);  // adding 1 to avoid 0 cases(0.04435)
console.log(Math.floor(Math.random()*10) + 1); // to round off to base // 4.6 = 4, 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)