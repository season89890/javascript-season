//ARRAYS - elements
// [el1, el2, el3]
const students = ["Pious", "Daniel", "Moshhod", "Emmanuel", "Samuel"];

// array properties
// length
console.log(students);
console.log(students.length);
//get elements based on position
console.log(students[3]);
console.log(students[students.length - 1]); //last element in array

// change element in an array by using the position
students[0] = "Zach";
students[3] = "Emma";
console.log(students);

//array methods
// add or remove element to/from an array (add-push, unshift) to remove element (pop, shift)
// structured data type
console.log(students.push("ola"));
students.push("blesiing");
students.unshift("Ade");
console.log(students);
students.pop(); //end
students.shift(); //front
console.log(students);

// at, indexOf, lastIndexOf
const nums = ["a", "c", "a", "d", "f", "a", "c"];
console.log(nums.at(0));
console.log(nums.indexOf("c"));
console.log(nums.lastIndexOf("c"));

//includes
console.log(nums.includes("a"));

//extracting portions from an array
// slice(start, end(non-inclusive))
console.log(nums.slice(0, 3));

// concat
console.log(students.concat(["jane", "peter"]));

// conversion to a string- tostring, join (separator)
console.log(students.toString());
console.log(nums.toString());
console.log(nums.join("-"));
// []- empty array
console.log(Array.isArray([7]));
console.log(Array.from('abc'));
console.log(Array.from('1234'));

// reverse
const grades = [1, 2, 3];
console.log(grades);
console.log(grades.reverse());



//complex array methods
//higher array methods - because they take another function (callback) to tell them what to do
// forEach, map, find, sort, filter, every, some, reduce

const transactions = [1000, -200, 3000, -2500, 600];
const users = ["ade", "john", "peter", "ayo"];

// forEach - loop through this array - perform an action
transactions.forEach((transaction) => {
    console.log(transaction * 2);
    
});

users.forEach((user) => {
    console.log(user.toUpperCase);
    
});

// map - loop through this array - perform an action and returns the new array

const letterFromUsers = users.map((user) => {
    return user.charAt (0)
});
console.log(letterFromUsers);
// (to shorten) const letterFromUsers = users.map((user) => user.charAt(0));
//console.log(letterFromUsers);

const newTransactions = transactions.map((transaction) => transaction / 10);
console.log(newTransactions);

//find and filter
// find returns the first element that passes a search condition
const bestUser = users.find((user) => user.startsWith('a'));
console.log(bestUser);

const greaterThan500 = transactions.find((transaction) => transaction > 500) ;
console.log(greaterThan500);

// filter - returns every elements that passes a search condition
 const aUsers = users.filter((user) => user.startsWith("a"));
 console.log(aUsers);
  const debits = transactions.filter((transaction) => transaction < 0 );
  console.log(debits);

  //sort - arranges element in an array
  console.log(users.sort());
  //when using sort with number we need to write a compare function
  const specialNumbers = [11, 2, 3, 22, 34, 14, 1];
  const lowToHigh = specialNumbers.sort ((a, b) => a - b);
  console.log(lowToHigh);
  const highToLow = specialNumbers.sort((a, b) => b - a);
  console.log(highToLow);

  // every, some and reduce
  const allGreaterThan10 = specialNumbers.every((num) => num > 10);
  console.log(allGreaterThan10);
  const someGreaterThan10 = specialNumbers.some((num) => num > 10);
  console.log(someGreaterThan10);

  //reduce - accumulates values in an array into one (number)
  const cartPrices = [10, 70, 20, 30];
  // a - accumulator b- current value
  const totalPrices = cartPrices.reduce((acc, curr) => {
    return acc + curr ;
  }, 0);
  console.log(totalPrices);

  //split
  let myName = "Banana is healthy";
  console.log(myName.split(" "));

  
  

  
  
  
  
  
  
 










