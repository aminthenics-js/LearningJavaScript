    // Dates

const myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());

console.log(typeof myDate);

const myCreatedDate = new Date(2025, 11, 8);
console.log(myCreatedDate.toDateString());

const myNewDate = new Date(2025, 11, 7, 10, 46);
console.log(myNewDate.toLocaleString());

const anotherDate = new Date("2025-07-08");
console.log(anotherDate.toLocaleDateString());


let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(anotherDate.getTime());

console.log(Math.round(Date.now()/1000));


console.log(
    new Date().toLocaleString("en-IN", { timezone: "Asia/Dhaka"})
);
