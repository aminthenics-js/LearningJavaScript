const marvel_villains = ["Thanos", "Magneto", "Ultron", "Carnage", "Bullseye"];
const dc_villains = ["Darkseid", "Joker", "Riddler", "General-Zod"];

//marvel_villains.push(dc_villains)

//console.log(marvel_villains);
//console.log(marvel_villains[5]);
//console.log(marvel_villains[4][0]);



const all_villains = marvel_villains.concat(dc_villains)     // Merging arrays together without modifying original.
console.log(all_villains);


const allNew_villains = [...marvel_villains, ...dc_villains];  // Spread => expands arrays into individual elements, Merge array better than concat.
console.log(allNew_villains);


const numberArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
console.log(numberArr.flat(Infinity));              // Flatten nested arrays.


console.log(Array.isArray("Aminur"));     // Checks if a value is an actual array.
console.log(Array.from("Aminur"));         // Converts array-like or iterable data into a real array.
console.log(Array.from({name: "Aminur"}));     // Interesting



const score1 = 199;
const score2 = 299;
const score3 = 399;

console.log(Array.of(score1, score2, score3));    // Creates an array from individual arguments.
