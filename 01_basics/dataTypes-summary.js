  // Primitive

  // String, Number, Boolean, Null, Undefined, Symbol, BigInt

  const score = 99;
  const newScore = 99.97;

console.log(typeof score);
console.log(typeof newScore);

  const isLoggedIn = true;

console.log(typeof isLoggedIn);

  const outsideTemp = null;
  let accountId;

console.log(typeof outsideTemp);
console.log(accountId);

  const id = Symbol('3478');
  const newId = Symbol('3478');

console.log(id === newId);


  const bigNumber = 394082075854n;

console.log(typeof bigNumber);




  // Reference 

  // Array, Object, Function


  const myHeroes = ["Redhood", "Daredevil", "SilverSurfer"]
  const myHeroes2 = myHeroes
  myHeroes2.push("Venom")

console.log(myHeroes);
console.log(typeof myHeroes);

  const myObj = {
    name: "Aminur",
    age: 20
  }

console.log(myObj);
console.log(typeof myObj);
  

  const myFunction = function() {
    console.log(typeof myFunction);    
  }