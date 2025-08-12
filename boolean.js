

//COMPARISON OPERATORS > < >= <= == ===
console.log(6.5 >9);
console.log(5 < 9);
console.log(5 <= 9);
console.log(10 >= 10);


// == (loose- does not care about data types)
// === (strict) - check the data type
console.log("5" == 5);
console.log("5" === 5);

const atmPin = 1234
const  enteredPin = 1224

atmPin === enteredPin //false -> incorrect pin
let bal = 10000
const transferAmount = 20000
bal >= transferAmount //false -> insufficient funds

//LOGICAL OPERATORS and && or || not !



//go (yaba and ikeja) go to (yaba or ikeja)

console.log(7 > 6 && 12 < 9); // t and f == f
console.log(4 < 8 || 4 > 8); // t or f == t

console.log(false || false || false);
console.log(3 ** 3 <= 5 % 2 && false);

//email === emailSaved && password === passwordSaved--> log in
console.log(8 !== 8);

// !enteredName --> please submit name




