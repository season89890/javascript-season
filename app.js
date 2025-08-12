

//STRINGS - text characters in double or single quotes 'text' ""

const firstName = 'John'
const lastName = 'Doe'
const middleName = 'nacho'

//STRINGS PROPERTIES length
console.log(firstName.length, middleName.length);
//string concatenation (joining of strings + a+ b)

const fullName = 'firstName + " "  + lastName';
console.log(fullName);
console.log(fullName.length);

//STRING METHODS - built in js functions that works on strings
// toUpperCase, toLowerCase
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());


//startsWith, endsWith, includes
console.log(fullName.startsWith("y"));
console.log(fullName.startsWith("Joh"));
console.log(fullName.endsWith("oe"));
console.log(fullName.includes("n D"));

// replace and replaceAll
console.log(fullName.replace("o" ,"#"));
console.log(fullName.replaceAll("o" ,"#"));

const myEmail = 'seasonZuruson@yahoo.com'
console.log(myEmail.length);
console.log(myEmail.toUpperCase());
console.log(myEmail.replace("@", "*"));
console.log(myEmail.includes("m"));
console.log(myEmail.endsWith("google.com"));

//charAt, indexOf, lastIndexof
// zero based lang ( assigning position from 0)
console.log(myEmail.charAt(2));
console.log(myEmail.indexOf("o"));
console.log(myEmail.lastIndexOf("o"));

//concat, trim, slice, substring, substr

console.log(fullName.concat(" is my name"));
//trim removes whitespace

const username = "     user001    "
console.log(username);
console.log(username.trim());
console.log(username.trimStart());
console.log(username.trimEnd());

//Extract portions of a sring
const surname = "Brooke";
// slice, substring (start, end (non-inclusive))
console.log(surname.slice(2, 5)); // ook
console.log(surname.substring(1));

//substr (start, number of characters)
console.log(surname.substr(2, 2));

// concatenation
const author = "chinua Achebe";
const bookTitle = "Things Fall Apart";
const yearPublished = 1997;

// the book Things fall apart written by chinua achebe was published in the year 1997

// template literals `${varName} `
const summary = `The book ${bookTitle.toLowerCase()} was authored by ${author.toUpperCase()}`;

// chinua Achebe wrote the book things fall apart
const summary2 = `${author} wrote the book ${bookTitle}`;
console.log(summary2);
console.log(summary);


// quote Tinubu said and i quote 'let the poor breath'
const quote = `Tinubu said and i quote 'Let the poor breath'`;
console.log(quote);

const helloWorld = "Hello world";
console.log(helloWorld.toUpperCase());
const JAVASCRIPT ="javascript"
console.log(JAVASCRIPT.toLowerCase());
console.log(helloWorld.startsWith("Hello"));
console.log(helloWorld.indexOf('H'));
console.log(helloWorld.indexOf("world"));



const like = "I like cats"
console.log(like.replaceAll("cats", "dogs"));

const soks =  "sokratis papastathopoulos"
console.log(soks.length);

const nickName = 'gabbs'
const favClub = "chelsea"
console.log(nickName, favClub);
console.log(nickName.startsWith("g"));
console.log(favClub.endsWith("k"));


const person = 'i am idan '
const club = 'osasuna'
const sentence = `${person} and my favorite is ${club} `;
console.log(sentence);




















































