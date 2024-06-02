let score = "33abc";
let null1 = null;
let undefined1 = undefined;
//const{score} = req.body
console.log(typeof score);
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

let valueInNumber1 = Number(null1);
console.log(typeof valueInNumber1);
console.log(valueInNumber1);

let valueInNumber2 = Number(undefined1);
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

// 33 => 33
// "33ba"=> Nan( not a numebr)
// true => 1; false => 0


let isLoggedIn = "jack";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

// 1=> true
// 0=> false
//""=> false
//"jack"=> true


let someNumber = 33

let stringNumber = String(someNumber);
console.log(typeof(stringNumber))
console.log(stringNumber);  //33 will become string type



