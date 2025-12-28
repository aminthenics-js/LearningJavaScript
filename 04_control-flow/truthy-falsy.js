

    const userEmail = [];

    if(userEmail){
        console.log("Got user email");
    } else {
        console.log("Don't have user email");
    }

    // if(userEmail.length === 0){
    //     console.log("Array is empty");
    // }


    // const myObj = {};

    // if(Object.keys().length === 0){
    //     console.log("Object is empty");   
    // }






    // Nullish Coalescing Operator (??): null, undefined

    let valueOne;
    // valueOne = 56 ?? 65
    // valueOne = null ?? 10
    // valueOne = undefined ?? 10
    valueOne = null ?? 10 ?? 20


    console.log(valueOne);