// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) // adds in the end
// myArr.push(7)
// myArr.pop()  //popped out last element

// myArr.unshift(9)  //adds in the begin
// myArr.shift()     //remove first element

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()  // convert to string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  // 3th index not included
console.log(myn1);
console.log("sliced ", myArr);  

const myn2 = myArr.splice(1, 3) // 3th index included also modified original array, resulted array is remaining elements
console.log(myn2);
console.log("spliced ", myArr);