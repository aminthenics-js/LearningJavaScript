 
    var thirdVariable = 1234;      // Global scope(dangerous)
    let firstVariable = 111;


 if (true) {
    let firstVariable = 100;
    const secondVariable = 400;
    // var thirdVariable = 600;
        
    console.log("Inner: ", firstVariable);
        
    // Block is anything inside {}
 }


    console.log("Outer: ", firstVariable);
    // console.log(secondVariable);
   // console.log(thirdVariable);     // Function-scoped(AVOID)
    


   // for loop 😜
    
    for (let i = 0; i < 10; i++) {
        console.log("Aminthenics");
    }