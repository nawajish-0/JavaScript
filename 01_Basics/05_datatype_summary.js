//Primitive 
// 7 types:- string, boolean, boolean, bigInt, symbol, null, undefined

const score = 100
const scoreValue = 100.33
const isLoggedIn = false
const outsideTemp = null
let username;

const id = Symbol('hm');
const id2 = Symbol('hm');


console.log(id===id2); // false bcs each symbol id different wrt to their id's
const number    = 7979342397324092;  //  <=2^53
const bigNumber = 797934239732409238402342523532523235235325235n;

//Reference(Non-Primitive)
// array, objects, functions

const stages = ["one", "two","three"]  //array

let myObj = {
    name : "level",
    age : 23
}

const myFunction = function(){
    console.log("hi");
}
myFunction();


//  If val is undefined, return "undefined".
//  If val is null, return "object".
//  If val is a String, return "string".
//  If val is a Symbol, return "symbol".
//  If val is a Boolean, return "boolean".
//  If val is a Number, return "number".
//  If val is a BigInt, return "bigint".
//  Assert: val is an Object.
//  NOTE: This step is replaced in section B.3.6.3.
//  If val has a [[Call]] internal slot, return "function"
//  Return "object".



/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// stack(primitive) copy create krta hai | heap(non-primitive) reference leta hai

let name1 = "level";
let name2 = name1;
console.log(name1);  // level
console.log(name2);  // level


let user1 = {
    name: "level",
    age: 2
}
let user2 = user1;

user2.name = "jack";

console.log(user1); // 
console.log(user2);
