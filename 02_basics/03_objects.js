   
   // Object literals

   const ranSym = Symbol("Corn Balls")

const userJS = {
    name: "Aminur",
    age: 20,
    [ranSym]: "mySymbol",
    location: "Bangladesh",
    email: "aminthenics@google.com",
    isLoggedIn: true,
    lastLoginDays: ["Friday", "Tuesday"]
}

console.log(userJS.name);
console.log(userJS["email"]);
console.log(userJS[ranSym]);


userJS.email = "newemail@reddit.com";
//Object.freeze(userJS);
userJS.email = "random@gmail.com";  // ignored

console.log(userJS);
 


userJS.greeting = function(){
    console.log("Hello JS user");
};

userJS.greetingTwo = function(){
    console.log(`Hello JS user, ${this.location}`);  
};


console.log(userJS.greeting());
console.log(userJS.greetingTwo());
