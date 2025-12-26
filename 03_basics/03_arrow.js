

    const user = {
        userName: "Aminur",
        price: 687,

        welcomeMessage: function(){
            console.log(`Welcome to my portfolio ${this.userName}.`); 
            // console.log(this);
        }
    };

    user.welcomeMessage()

    user.userName = "Rahman"
    user.welcomeMessage()

    // console.log(this);    -> {}


    function tea(){
        console.log(this);
    }

   // tea()






   const coffee = function(){
        let userName = "Aminthenics"
        console.log(this.userName);
   };

//    coffee()   -> undefined



   const sumTwo = (num1, num2) => {
        return num1 + num2
   };

   console.log(sumTwo(9, 7));

    const addTwo = (num1, num2) => num1 + num2;     // Implicit return
    console.log(addTwo(8, 9));


    const nameReturn = () => ({name: "Rahmanthenics"});
    console.log(nameReturn());
    
    