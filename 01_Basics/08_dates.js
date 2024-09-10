// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)  // month started from 0 index, jan == 0, feb == 1
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
let myCreatedDate3 = new Date("2023-01-14")
let myCreatedDate4 = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate2.toLocaleString());
console.log(myCreatedDate3.toLocaleString());
console.log(myCreatedDate4.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp); // miliseconds
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); // to convert to seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // adding 1, to avoid 0th index for months
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})