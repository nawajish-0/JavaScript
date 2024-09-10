const name = "nawajish"
const repoCount = 5

//console.log(name + repoCount + "value"); // not recommended

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

//string declaration
const gameName = new String('level');
console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('v'));

const newString = gameName.substring(0,2); // index 2 excluded // le

console.log(newString);

const newString2 = gameName.slice(-5,5);  //level

console.log(newString2);

const string2 = "   level  "

console.log(string2);
console.log(string2.trim());  // removes whitespaces

const url = "https://www.google.com/level%40jack"
console.log(url.replace("%40","-"));

console.log(url.includes('hello')); // hello isnt present in the url


const arr = "hello-how-are-you";

console.log(arr.split("-")); // string to array on the basis of (condition)

