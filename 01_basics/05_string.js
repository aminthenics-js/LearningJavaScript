   // String and ProtoType:

const myName = "Aminthenics";
const repoCount = 2;

console.log(`Hello, my name is ${myName} and my github repo count is ${repoCount}`);  //  Variable Interpolation

const gameName = new String('CyberPunk');

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.charAt(4));
console.log(gameName.indexOf('n'));

const stringNew = gameName.substring(3, 7);
console.log(stringNew);

const otherSring = gameName.slice(-1235, 5)
console.log(otherSring);


const myNameString = "                 Aminthenics  ";
console.log(myNameString);
console.log(myNameString.trim());


const myGithubURL = "https://github.com/aminthenics4398%%js";
console.log(myGithubURL);
console.log(myGithubURL.replace('4398%%', '-'));

console.log(myGithubURL.includes("meatball"));



const discName = "new-disc_commin"
console.log(discName.split('-'));
