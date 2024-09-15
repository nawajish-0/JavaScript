// singleton 
// Object.create

//object literals

const mySym = Symbol("og");

const JsUser = {
    name: "nawajish",
    "full name": "nawajish",
    age: 23,
    [mySym]:"key",      // use square brackets for key of symbol
    location: "delhi",
    email: "nawajish@gmail.com",
    LastLoginDays: ["mon","tues"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"])  
// console.log(JsUser["full name"]);  // this method to access value is used when the key name has whitespaces  
// console.log(JsUser[mySym]);  //also to access we use square brackets


JsUser.email = "nawajish@lmao.com"
// Object.freeze(JsUser); // prevents the modification of object

JsUser.email = "lmao@gmail.com"

console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());