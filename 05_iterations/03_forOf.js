        // for...of loop (value-based)

    const arr = [1, 2, 3, 4, 5, 6];

    for (const value of arr) {
         console.log(value);
    }

    const greetings = "Hello Aminthenics!";

    for (const greet of greetings) {
        console.log(`Each char of ${greet}`);
    }



            // Map

    const mapMethod = new Map();

        mapMethod.set('BD', "Bangladesh");
        mapMethod.set('UK', "United Kingdom");
        mapMethod.set('CN', "China");
        mapMethod.set('RU', "Russia");
    
     console.log(mapMethod)

    for (const [key, value] of mapMethod) {
        console.log(key, '=', value);
    }


    const myObject = {
        gameOne: "RDR-II",
        gameTwo: "GTA-V",
        gameThree: "COD-BP",
        gameFour: "PUBG-PC"
    };

    // for (const [key, value] of myObject) {     ------ myObject is not iterable ------
    //     console.log(key, '=', value);
    // }       