

        function sayMyName(){
            console.log("H");
            console.log("E");
            console.log("I");
            console.log("S");
            console.log("N");
            console.log("B");
            console.log("E");
            console.log("R");
            console.log("G");
            
        }

    sayMyName()


       function sumTwoNumbers(number1, number2){
        console.log(number1 + number2);
       }

       sumTwoNumbers()
       sumTwoNumbers(9, "11")
        const result = sumTwoNumbers(9, 11);

        
        

          function sumTwoNumbers(number1, number2){
          let result = number1 + number2;
          // console.log("Aminthenics");
          return result
       }

       console.log("Result :", result);



      function loginUserMessage(username){
        return `${username} is logged in`
      }

      console.log(loginUserMessage());
      

         function loginUserMessage(username){
          if(!username) {
            console.log("Please enter a username");
            return
          }
        return `${username} is logged in`
      }

      console.log(loginUserMessage("Aminthenics"));


      function itemInCart(numberOfItems){
        if(!numberOfItems){
          return "Your cart is empty"
        }
        return `You have ${numberOfItems} items in your cart`
      }

      console.log(itemInCart(5))
      