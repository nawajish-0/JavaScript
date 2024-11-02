function sayMyName(){
    console.log("L");
    console.log("E");
    console.log("V");
    console.log("E");
    console.log("L");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

console.log("Result: ", result);


function loginUserMessage(username){
    if(!username){                // !username is also same as username === undefined
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("jack"))


/*-------------------------------------------------------------------*/


function calculateCartPrice(val1, val2, ...num1){     // rest operator (...)
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))


function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}


const user = {
    username: "level",
    prices: 199
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));