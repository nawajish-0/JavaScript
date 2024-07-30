// console.log(2>1);  
// console.log(2>=1);  
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

//*******************
//avoide these comparisons
console.log("2">1);
console.log("02">1);

console.log(null>0);  //false
console.log(null==0); //false
console.log(null>=0); //true , quality check == and comparisons >< >= <= work differently , comparisons convert null to a number, treating it as 0.

console.log(undefined>0);  //false
console.log(undefined==0); //false
console.log(undefined<0); //false

// strict check
console.log("2"===2); //false bcs different datatype