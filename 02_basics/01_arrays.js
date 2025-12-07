           // Array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["Redhood", "Batman", "Sentry"]

console.log(myArr);
console.log(myHeroes[2]);

myHeroes.push("Quick-Silver")      // add to end
console.log(myHeroes);

myHeroes.pop()                  // remove from end
console.log(myHeroes);


myHeroes.unshift("Knull")      // add to start
console.log(myHeroes);


myHeroes.shift()             // remove from start
console.log(myHeroes);


console.log(myHeroes.includes("Knull"));
console.log(myHeroes.indexOf("Sentry"));


const newArr = myArr.join()

console.log(newArr);
console.log(typeof newArr);



console.log("A ", myArr);

const newArr1 = myArr.slice(1, 3)
console.log(newArr1);

console.log("B ", myArr);

const newArr2 = myArr.splice(2, 4);
console.log(newArr2);

console.log("C ", myArr);
console.log(newArr2);

