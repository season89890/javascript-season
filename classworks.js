// Question:
//Two teams - Teams A and team B - complete in a game three times.

//Team A = 96,  108,  89;
//Team = 88, 91, 110;

const averageA = (96 + 108 + 89) / 3;
const averageB = (88 + 91 + 100) / 3;
if (averageA > averageB) {
} else if (averageB > averageA) {
} else {
  console.log("DRAW");
}

const item1 = 120;
const item2 = 80;
const item3 = 150;
const accountBaln = 400;
const totalCost = item1 + item2 + item3;

if (accountBaln >= totalCost) {
  console.log("CHECKOUT");
} else {
  console.log("Insufficient balance");
}
const movieAge = 18;
const userAge = 20;
if (userAge >= movieAge) {
  console.log("YOU CAN WATCH THE MOVIE");
} else {
  console.log("YOU ARE CANT WATCH");
}

const ticketP = 150;
const discountA = 30;
const balance = 300;
const fan = true;
const dicountedPrice = ticketP - discountA;
if (fan) {
  console.log(`You are paying ${dicountedPrice}`);
} else {
  console.log(`You are paying ${ticketP}`);
}
if(balance >= dicountedPrice || balance >= ticketP){
    console.log("you can buy the football ticket");
    
}else{
    console.log("you do not have enough money for the football tickets");
    
}
