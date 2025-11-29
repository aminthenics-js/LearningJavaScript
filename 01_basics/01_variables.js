// Variables


const accountId = 23947   // Use for everything that doesn't need to change... Cannot reassign...

let accoutnEamil = "aminthenics@google.com"  // Use this for values that need to be updated... Can reassign...

var accountPassword = "jhrof!33"  //Avoid unless working in old codebases... Can reassign but shouldn't rely on it...

accountCity = "Dhaka"  // Readability should be high...

let accountState;     // Undefined, not an error just means "value not assigned yet"...



// accountId = 223 // Assignment to constant variable. 

console.log(accountId);
console.table([accoutnEamil, accountPassword, accountCity, accountState])

accoutnEamil = "nothing@yahoo.com"
accountPassword = "394209!%"
accountCity = "Rangpur"


console.table([accoutnEamil, accountPassword, accountCity])

// A block is anything inside {}


var myName = "Aminur";
var myName = "Rahman"; // works

console.log(myName);  // Rahman
console.log(myName);  // Rahman      

/*
Prefer not to use var, 
because of block-scoped & functional-scoped.
 */


{
  // let Name = "Aminthenics";
  var Name = "Choudhury";
}
console.log(Name);
