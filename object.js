
//OBJECTS - {key: value, key: value}
// descriptive, unstructured data type
// can take any data type
//object methods - function declaration written by the developer inside of an object and when refering to it we call it (this)
const person = {
    name: "John Doe",
    age: 42,
    complexion: "Dark",
    isMarried: true,
    friends: ["Jane", "Peter", "Susan"],
    description: function () {
        return `My name is ${this.name}, and i am ${this.age} years old`;
    },
    maritalSummary: function (){
        return`${this.name} ${this.isMarried ? "is" : "is not"} married`;
    },

};
// John doe is married
console.log(person.description());
console.log(person.maritalSummary());

console.log(person);

// get properties from object, dot notation, bracket notation
// dot notation objectName.propertyName
//bracket notation objectName ['propertyName']
console.log(person.name.toUpperCase());

console.log(person.name);
console.log(person.friends);
console.log(person["friends"]);
console.log(person["age"]);

console.log(person.friends[1]);

// add new properties to an object
person.height = `6'1`;
person.gender = "Male";
person["hobby"] = "Swimming",

// remove properties delete
delete person.complexion;

console.log(person);

// nested objects
const customer = {
    id: 'Cust-1',
    personalInfo: {
        firstName: 'Peter',
        lastName: 'Pan',
        gender: 'Male',
        dateOfBirth: "1990-06-12",
        nationality: "Nigerian",
    },
    contactInfo: {
        email: "Peterpan@gmail.com",
        phone: "+2348012345678",
        address: {
            street: "12, Bode thomas",
            city: "Lagos",
            postalCode: "100001",
        },
    },
    accountInfo: {
        cardType: "Visa",
        accountNumber: "012345678",
        accountType: "Savings",
    },
    greeting: function (){
        return `Hello ${this.personalInfo.firstName}, welcome back`;
    },
    getAddress: function(){
        return`${this.personalInfo.firstName} lives at ${this.contactInfo.address.street}, Lagos`
    }
};

// write a method called greeting - Hello Peter, welcome back
//write a method getAddress -> peter lives at 12, Bode thomas street, Lagos
console.log(customer.personalInfo.dateOfBirth);
console.log(customer.contactInfo.address.street);
// adding bank name to the account info
customer.accountInfo.bankName = "GTBank";
console.log(customer.greeting());
console.log(customer.getAddress());

//complex data structure

// object destructuring - pick multiple properties from obj at a time

const book = {
    title: 'purple Hibiscus',
    author: 'Chimamanda Ngozi Adichie',
    yearPublished: 2003,
    theme: ["Family", "Religion", "Freedom"],
setting: {
    country: "Nigeria",
    cities: ["Enugu", Nsukka],
    timePeriod: "Postcolonial Nigeria",
},

};
const { title, yearPublished, theme, setting:{country}, } = book;
console.log(title, yearPublished, theme, country);














