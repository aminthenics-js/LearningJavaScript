            // Reduce method

    const numbers = [2, 4, 6, 8, 10];

    const myNumber = numbers.reduce((accumulator, currentValue) => {
            console.log(`accumulator value = ${accumulator}, currentValue = ${currentValue}`);
            return accumulator + currentValue;
    }, 0);

    console.log(myNumber);
    

    const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
];


const totalPrice = shoppingCart.reduce((acc, item) => {
    return acc + item.price;
}, 0)

console.log(totalPrice);
