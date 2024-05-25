console.log("Nawajish")
const accountId = 1490
let accoutnEmail ="lol@gmail.com"
var accountPass = "12345"
accountCity = "Delhi" // variable can be declared like this but bad practice
let accountState;  // undefined

//accountId = 2 // not allowed , as accountId is const

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
 
*/
console.table([accountPass,accountState,accoutnEmail,accountId])