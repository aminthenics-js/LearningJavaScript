    /*
     Conversion

Type conversion is changing a value from one type to another.
JavaScript does this automatically sometimes, but you can also do it manually, which is safer.

Implicit Conversion (Type Coercion) → JS does it automatically.

Explicit Conversion → You tell JS exactly what type you want.
     */
     
    
let score = 66;
console.log(typeof score);

let newScore = "66";
console.log(typeof newScore);


let valueInNumber = Number(700);
console.log(typeof valueInNumber);
console.log(valueInNumber);


let newNumber = String(600);
console.log(typeof newNumber);
console.log(newNumber);

score = Number("59Amin");
console.log(typeof score);
console.log(score);

let num1 = parseInt(score);
console.log(num1);

let num2 = parseFloat(score);
console.log(num2);


let anotherScore = null
console.log(anotherScore);

let testScore = undefined
console.log(testScore);



let isLoggedIn = "";


let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);


let loggedIn = 1;

let booleanloggedIn = Boolean(loggedIn);
console.log(booleanloggedIn);



    console.log();

         // Operations

// Operations are simply actions done on values using operators.

let age = 20;
let negValueOfAge = -age;
console.log(negValueOfAge);


let gameCount = 99;
gameCount++
console.log(gameCount);


// Arithmetic Operations (Math). Used for calculations.

console.log(4 + 4);
console.log(4 - 4);
console.log(4 * 4);
console.log(4 ** 4);  // exponent
console.log(4 / 4);
console.log(4 % 4);  // remainder



// Assignment Operations. Used to store values.

let valueOfx = 10;  // Assign
valueOfx += 4;      // Add then Assign
console.log(valueOfx);

let newValue = 50;
newValue **= 2;   // Exponent then assign
console.log(newValue);

let modulus = 19;
modulus %= 3;     // Modulus then assign
console.log(modulus);


