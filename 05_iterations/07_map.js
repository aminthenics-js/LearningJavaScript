            // Map method

    const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const newNums = myNumbers.map((number) => {
        return number + 10;
    });

    console.log(newNums);
    

    const anotherNums = myNumbers
                .map((numbers) => numbers * 10)
                .map((numbers) => numbers + 1)
                .filter((numbers) => numbers >= 50)

    console.log(anotherNums);
    