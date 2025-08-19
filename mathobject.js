// MATH OBJECT
//Math
//constant PI
console.log(Math.PI);

// methods
// pow, min, max, round, ceil, floor, trunc, random

//power-
console.log(Math.pow(3, 2)); // exponential (raise to power)
console.log(Math.min(23, 4, 2, -98)); // minimum number of a set
console.log(Math.max(-23, -4, -2, -98)); //minimum number of a set

// round, ceil (up), floor (down), trunc -> (removes)
console.log(Math.round(7.45)); // normal rounding off nums
console.log(Math.ceil(91.2));// round up
console.log(Math.floor(9.99));// round Down
console.log(Math.trunc(10.23));// removes the decimal point (dp)


// random -> generate psuedo random nums between 0-1 (exclusive)
console.log(Math.random());
// 0-10
console.log(Math.trunc(Math.random() * 11));
// 1- 10

// 1- 20
const randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);

const customers = ["Ola", "Blessing", "Pius", "Moshood", "season", "Samuel"];
// pick a random luck winner
const randomLuckyNumber = Math.floor(Math.random() * customers.length);
console.log(customers[randomLuckyNumber]);

// 5- 10
// 10 - 20
// 20- 50
// 0 -5 --> 5 - 10 0-20
// 10- 20

const min = 5;
const max = 10;

const rNum = Math.floor(Math.random() * (max - min +1)) + min;
console.log(rNum);








