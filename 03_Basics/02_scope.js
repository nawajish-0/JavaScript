var c = 300;
let a = 300;

if(true){
    let a = 10;         // this is
    var c = 30;         // block
    const b = 20;       // scope
    console.log("Inner:", a);
    
}

console.log(a);
// console.log(b);
console.log(c);    // output 30 , avoid using var in js

// golabl scope in console(browser) is difference from global scope in vscode.


function one() {
    const username = "nawajish";

    function two() {
        const website = "youtube";
        console.log(username);
    }
    // console.log(website); website limited to function two, outside fn two throw error
    two();
}
// one();

if(true){
    const username = "nawajish";
    if(username ==="nawajish"){
        const website = " youtube";
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ************************************ interesting **********************

// only declaration
console.log(addone(5));  
function addone(num){          
    return num +1;
}

// declaration with holding in a variable
addTwo(5);  // throw an error " cannot access addTwo before initialization"
const addTwo = function(num){
    return num+2;
}