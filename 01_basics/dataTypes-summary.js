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
    console.log("Hello world!");    
  }

   console.log(typeof myFunction);



   // Stack Memory (Primitive) and Heap Memory (Reference)
   

   // 1. STACK MEMORY → fast, fixed, ordered
   // 2. HEAP MEMORY → flexible, dynamic, expandable
   
   let myInstaName = "instagram_user"
   let myFacebookName = myInstaName
myFacebookName = "facebook_user"

console.log(myInstaName);
console.log(myFacebookName);


  let firstUser = {
    email: "user@google.com",
    paypal: "user@paypal.com"
  }

  let secondUser = (firstUser);       // NOTE: Assigning objects like this copies the REFERENCE, not the data.
                                      // Any changes to 'secondUser' will also change 'firstUser'.
secondUser.email = ("newuser@google.com");
  
console.log(firstUser.email);
console.log(secondUser.email);       

let anotherUser = {
  email: "anotheruser@google.com",
}

let otherUser = {...anotherUser}  // Use {...firstUser} or Object.assign({}, firstUser) to create a real copy.
otherUser.email = "myuser@gmail.com";

console.log(anotherUser);
console.log(otherUser);
