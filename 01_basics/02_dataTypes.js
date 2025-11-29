"use strict";  // treat all JS code as newer version.

let myName = "Aminthenics";
let myAge = 20;
let myCity = "Dhaka";
let myState;
let isLoggedIn = true;
let theTemp = null;

console.table([myName, myAge, myCity, myState, theTemp]);

console.log(typeof myName);  // string
console.log(typeof myAge);  // number
console.log(typeof myState); // undefined
console.log(typeof isLoggedIn);  // false
console.log(typeof null);  // object


// Some important notes...


// Primitive Types


//  1. String -> Text data, always wrapped in ' ', " ", or ` `.

let name = "Aminur";
let channel = 'Chai Aur Code';
let greeting = `Hello ${name}`;   // template literal


// 2. Number
// JS uses double precision floating point for all numbers. No integer type like C, Java.

let age = 20;
let price = 99.99;


// 3. Boolean
// Either true or false. Everything in authentication, authorization, and conditions runs on booleans. If you mess this up, security breaks.

let isLoggedOut = false;


// 4. Undefined
// A variable declared but not assigned. You should avoid returning undefined from backend functions. It makes debugging harder.

let score;
console.log(score); // undefined


// 5. Null
// A deliberate empty value. You assign it manually.

let data = null;

/**Important difference:

undefined → system assigned
null → developer assigned */


// 6. Symbol
// Used to create unique identifiers. Extremely useful for avoiding name collisions in large backend codebases.

const id1 = Symbol("userID");
const id2 = Symbol("userID");

console.log(id1 === id2); // false

// Even if they “look” same, they are unique.


// 7. BigInt
// For numbers larger than Number.MAX_SAFE_INTEGER (≈ 9e15). Use BigInt when handling large database IDs or cryptographic operations.

let big = 12345678901234567890n;


// Non-Primitive Type 
// Non-Primitive Type


// Object
// Objects are copied by reference, not value. 

const user = {
  name: "Aminur",
  age: 20,
};


// Arrays

const numbers = [1, 2, 3];


// Functions

function add(a, b) {
  return a + b;
}
