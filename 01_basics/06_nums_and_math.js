    // Number

const gameScore = 450;
console.log(gameScore);         // Number

const newBalance = new Number(125);
console.log(newBalance);         // Object


console.log(newBalance.toString().length);
console.log(newBalance.toFixed(2));


const otherNum = 349.4662;

console.log(otherNum.toPrecision(4));

const number = 49920532;

console.log(number.toLocaleString());
console.log(number.toLocaleString('en-IN'));


   // Math

   console.log(Math);
   console.log(Math.abs(-65));
   console.log(Math.round(98.93));
   console.log(Math.ceil(98.93));
   console.log(Math.floor(98.93));
   

   console.log(Math.random());
   console.log((Math.random() * 10) + 1);
   console.log(Math.floor(Math.random() * 10 ) + 1);
   

   const minValue = 20;
   const maxValue = 30;

   console.log(Math.floor(Math.random() * (maxValue - minValue +1) ) + minValue);
   