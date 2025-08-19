

const africanCountries = [ "Togo", "Benin", "Tanzania", "Nigeria", "Ghana"] ;
console.log(africanCountries.includes("Tanzania"));
console.log(africanCountries.length);
africanCountries.unshift("Ethopia");
console.log(africanCountries);
africanCountries.push("Senegal")
console.log(africanCountries);
console.log(africanCountries.sort().reverse());
console.log(africanCountries.concat("China", "Malaysia", "Taiwan"));
const mycountry = africanCountries.find((country) => country.startsWith("T"));
console.log(mycountry);
//
//get all countries that the number of characters is more than 5
const specialCountries = africanCountries.filter((country) => country.length > 5);
console.log(specialCountries);

// convert all the countries in your array to capital letters and log the result to the console

const converted = africanCountries.map((africanCountries) => africanCountries.toUpperCase());
console.log(converted);

// check if all countries has a letter of a "p"
const pInIt = africanCountries.every((country) => country.includes("p"))
console.log(pInIt);

//get all debit transactions
//get all credit transactions
//check if any credit transaction is greater than the balance
//after all of the transactions have been considered, get me the availableBalance

let myBalance = 8000
const Transactions = [3000, -400, -900, 4000, 5000];
const debits = Transactions.filter((transfer)=> transfer <0);

const credits = Transactions.filter((transfer) => transfer > 0);
console.log(debits); 
console.log(credits);
const largeCredit = credits.some((cred) => cred > myBalance);
console.log(largeCredit);

const availableBalance = Transactions.reduce((acc, curr) => acc + curr, myBalance);
console.log(availableBalance);




















