// Immediately Invoked Function Expressions (IIFE)

(function one(){  // named IIFE
    console.log(`db connected`);
})();

//iife -> global scope ke pollution se problem hoti hai kayi baar,
//toh us global scope ke variabl/declaration uske pollution ko htane k liye iife ka use kiya 
//()()  // first paran -> fn defination , second para -> execution call

//using arrow fn

( (name)=>{    // unnamed IIFE
    console.log(`db connected two ${name}`);
})("nawajish");

//important-> always put a semicolon to end an IIFE
