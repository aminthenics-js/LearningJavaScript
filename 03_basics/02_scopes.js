 
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










         // Nested function




      function parent(){
         const userName = "Aminur";

         function child(){
            const website = "Github";
            console.log(userName);
         }
     //    console.log(website);

         child()
      }

      parent()




      if (true) {
         const userName = "Rahman";
         if (userName === "Rahman") {
            const website = " Youtube";
            console.log(userName + website);
         }
      //   console.log(website);
         
      }

   //   console.log(userName);
      


         console.log(addOne(7));
      function addOne(num){
         return num + 1;
      }

      console.log(addOne(7));





               // Expression  = function stored in variable


      const addTwo = function(num){
         return num + 2;
      }

      console.log(addTwo(4))