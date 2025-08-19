// JAVASCRIPT FUNCTION
//reusable blocks of code that perform a sprcific task or return a value
// call or invoke the function

// a function that welcomes our user when they log in

function welcomeUser() {
    console.log("Welcome User");
    
}
//calling a function
welcomeUser();
welcomeUser();

//calling a function
welcomeUser();
welcomeUser();
// functions with a parameters - values that are passed to functions
function welcomeUser2(user){
    console.log(`welcome ${user}`);
    
}

welcomeUser2("Season");
welcomeUser2("Daniel");
welcomeUser2("Ola");

//default parameters
function welcomeUser3(user = 'anonymous') {
  console.log(`welcome ${user}`);
}

welcomeUser3();

// functions returning a value - giving back a result
// return keyword

// function that return the addition of two numbers
function add (a, b){
    return a + b;
}
let sum = add(10, 12);
console.log(sum);

// funtion that return the product (*) of two numbers

function product(num1, num2) {
    return num1 * num2;
}
console.log(product (67, 3));

// function that returns the naira equivalent of a dollar amount passed into it
// 10 dollars will give you (10 * 1600) naira
// 1$ = 1600

function convertToNaira(dollarAmount) {
    return `${dollarAmount} dollars will give you ${dollarAmount * 1600} Naira`;
}
console.log(convertToNaira(22));
console.log(convertToNaira(1500));

// write a function that returns the average of three numbers

function calcAverage(n1, n2, n3) {
    const avg = (n1 + n2 + n3) / 3;
    return avg;
}
console.log(calcAverage(3,5, 7));

// write a function that calculates and returns the age of user, your function
// should take in year of birth as a parameter

function calcUserAge(yearOfBirth){
    return 2025 - yearOfBirth;
}


// write a function that return if a number is even or odd
function oddOrEven(num){
    if (num % 2 === 0) {
        return `${num} is EVEN`;
    }else {
        return `${num} is ODD`;
    }
}
 console.log(oddOrEven(90));
 console.log(oddOrEven(71));

 // write a function to check if a withdraw is possible or not

 let balance = 2000;
 function withdrawAmount(amount){
    if (balance >= amount) {
        balance -= amount;
        return " Transaction Successful";
    }else {
        return "Isufficient Funds";
    }
 }
 console.log(withdrawAmount(1800));
 console.log(balance);
 console.log(withdrawAmount(1000));

 //write a function called depositAmount that performs the function of 
 // deposit and returns the balance of the user after the deposit

 function depositAmount (amount) {
    balance += amount;
    return `Deposit of ${amount} is successful, and your current balance is ${balance}`;
 }
 console.log(depositAmount(4000));
 console.log(withdrawAmount(1000));

 // RETURN KEYWORD
 // anycode after return is inaccessible code
 function example() {
    console.log("okay after return");
    return "hello"; //unreachable code
    
 }

 example();

 // write a javascript function that accept a strings as a parameter and 
 // returns the first letter of the word 
 // cat --> c, john --> j
 function getFirstLetter(word){
    return word.charAt(0);
 }
 console.log(getFirstLetter("Igwe"));

 //write a function that returns the full name of a user if provided with the 
 // first and last name e.g 'ola' 'john' --> ola john

 function getfullname (firstName, lastName) {
    // return `${firstName} ${lastName}`;
    return firstName + " " + lastName;
 }
 console.log(getfullname("ola", "john"));

 function longestString (word1, word2) {
    if (word1.length > word2.length) {
        return word1;
    } else if (word2.length > word1.length) {
        return word2;
    } else {
        return "SAME LENGTH" ;
    }
 }
 console.log(longestString("ate", "me"));

 //function declaration
 function sayHello(){
    return  "Hello";
 } 
 
 //function declaration,

 // function expression, treats function like variable
 // func exp that return the square of a sum
 const squareNumber = function (num) {
    return num ** 2;
 };
 console.log(squareNumber(7));

 // func exp that converts number of days to weeks 21
 const daysToWeeks = function (days) {
    return days / 7;
 };

 // arrow function
 
 // arrow function that returns the difference between two nums

 const difference2 = (n1, n2) => {
    const diff = n1 - n2;
    return n1 - n2;
 };

 // shorten arrow functions (only a line inside of the block of code)

 const difference = (n1, n2) => n1 - n2;
 console.log(difference(9, 6));
 

 //HOISTING - behaviour in js where function declarations are moved to the top
 // before the code is executed

 hoistedFunc(); // this is wokrking because of hoisting
 function hoistedFunc(){
    console.log("I am a func dec");
    
 }
 // write an arrow func called getMaxNum that gets the maximum of two numbers

 // getMaxNum (34, 67) --> 67
 const getMaxNum = (b1, b2 )=> {
    if (b1 > b2) {
        return b1;
    }else if (b1 < b2) {
        return b2;
    } else {
        return "equal number"
    }
 }
 console.log(getMaxNum(9, 78));

 // write a Javascript arrow function that accepts a string as a parameter
 // returns the string in all capital letters

 const capitalizeWorld = (word) => word.toUpperCase();
 console.log(capitalizeWorld("js is fun"));
 
 // write a function called checkLoanEligibility,
 //which recieves an amount as a parameter and returns
 //whether a user is eligible or not based on the criterion
 // the loan amount can not be more tham twice the amount of savings


 let savings = 2000
 const checkLoanEligibility = (amount) => amount > savings * 2 
 ? 'Ineligible' : 'Eligible'

 // write a Javascript arrow func called containSubstring that takes two parameters:
 // str - the main string.
 // substr - the substring you want to check for.
 // the func should return true if substr is found inside str, and false otherwise.
 // hello, el -world, dl 

 const containSubstring = (str, substr)=> str.includes(substr);
 console.log(containSubstring("hello", "ell"));

 // write an arrowfunc that converts minutes to seconds
 //  and returns to the seconds equivalent

 const converToSecs = (minutes) => minutes * 60
 console.log(converToSecs(60));
 
 


 


  

 






 

 

 
 
 
 
 
 
 
 



