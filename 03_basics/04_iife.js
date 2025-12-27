

        // Immediately Invoked Function Expressions (IIFE)


   ( function coffee(){
        // named iife
        console.log(`DB CONNECTED.`);

    }) ();  // Always end iife with ;


    ( (name) => {
        // arrow function iife
      console.log(`DB CONNECTED TWO, ${name}`)        
    }) ('Aminthenics');


    const counter = ( function (){
        // iife + closures
        
        let count = 0;
        return function(){
            return ++count;
        };
    }) ()

    console.log(counter());
    console.log(counter());
    console.log(counter());
    console.log(counter());