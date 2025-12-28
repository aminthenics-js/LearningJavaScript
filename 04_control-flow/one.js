        // if

    const isUserLoggedIn = true;
    const temperature = 41;

    if(temperature === 40){
        console.log("Less than 40°");
    } else {
        console.log("Greater than 40°");
    }




    const score = 200;

    if(score > 300){
        let ability = "agility"
        console.log(`User power: ${ability}`);
    } else {
        console.log(`User has no power`);
    }




    // const balance = 2500;

    // if(balance >= 500){
    //     console.log("Balance is greater than 500");
    // } else if(balance >= 750){
    //     console.log("Balance is greater than 750");
    // } else if(balance >= 900){
    //     console.log("Balance is greater than 500");
    // } else {
    //     console.log("Balance is less than 1200");
    // }




    const userLoggedIn = true;
    const visaCard = true;
    const loggedInFromGoogle = false;
    const loggedInFromEmail = true;

    if(userLoggedIn && visaCard && 2 === 4){
        console.log("Allow to buy course");
    } 

    if(loggedInFromGoogle || loggedInFromEmail){
        console.log("User logged in");
        
    }
