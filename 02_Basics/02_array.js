const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  // push another array into array as a single element

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) // to concat two arrays
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] //spreading  // to concat multiple arrays(good practice)

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)  // to concat into a recursively array of all subarrays of the array
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))     // create an array from iterable object
console.log(Array.from({name: "hitesh"})) // interesting(returns empty array kyunki btaya ni ki key ya value ke bases pr array bnaye)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //Returns a new array from a set of elements.