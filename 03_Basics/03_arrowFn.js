const user = {
    username : "nawajish",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);  // current contex ke liye this use kiya hai, taki koi bahar se username na le
        // basically, this refers to current context

        // console.log(this);
    }
}
user.welcomeMessage();
user.username = "lmao";
user.welcomeMessage();

console.log(this);  // o/p = {} in compilers, but o/p = window in console

// function chai (){
//     let username = "nawajish"
//     console.log(this.username);  // o/p undefined -> ye jo context hai object me kaam kr rha hai, as a function me aake this use ni ho para hai.
// }
// chai();

// const chai = function(){
//     let username = "nawajish"
//     console.log(this.username);
// }

// chai();     // still undefined

//arrow function
const chai = ()=>{
    let username = "nawajish"
    console.log(this.username); // still undefined
}

// basic(explicit return)
// const addTwo = (num1,num2)=> {
//     return num1 + num2;
// }

//implicit return ( no use of paranthesis)

// const addTwo = (num1,num2) => num1+num2;
// const addTwo = (num1,num2) => (num1+num2);


// to return object
const addTwo = (num1,num2)=> ({username:"nawajish"});
console.log(addTwo(3,4));

// const myArray = [2,5,6,7];

// myArray.forEach(function(){});
// myArray.forEach(()=>{}); 