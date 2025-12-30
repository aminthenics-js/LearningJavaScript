

                // while loop

    let index = 0;

    while (index <= 10) {
        console.log(`Value of index is ${index}`);
        index +=2;
    }

    let myHeroesArr = ["Batman", "Ironman", "Hulk", "Venom"];

    let arr = 0;
    while (arr < myHeroesArr.length) {
        console.log(`My hero is ${myHeroesArr[arr]}`);
        arr++
    }




            // do while loop


    let score = 10;

    do {
        console.log(`Score is ${score}`);
        score++;
    } while (score <= 10);



    let i = 0;

    while (i < 5) {
        i++;

        if(i === 3){
            console.log(`Detected 3`);
            continue;
        }
        
        if(i === 4){
            console.log(`Breaking at 4`);
            break;
        }
        console.log(i);
    }