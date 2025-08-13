//CONDITIONAL STATEMENT
// if statement

console.log("conditional statement");
//if(condition){
// action
//lines of code
//}

if (1 < 2) {
  console.log("ola");
}

let balance = 6000;
let amount = 8000;

if (balance >= amount) {
  balance -= amount;
  console.log("transaction succesful, balance is " + balance);
}

// determine if the password is long enough ( >= 10)
// improve your logic check if the password contains '#' - good password
const password = "#password1234";

if (password.length >= 10 && password.includes("#")) {
  console.log("password is good enough");
}

// log to the console if a users age is eligible to vote

const age = 12;
if (age >= 18) {
  console.log("you are eligible to vote");
}

// if else statement

if (9 > 7) {
  console.log("YES");
} else {
  console.log("NO");
}

if (balance >= amount) {
  balance -= amount;
  console.log("transaction succesful, balance is " + balance);
} else {
  console.log("Insufficient Funds");
}
// write an if else statement to check if a num is positive or negative

const num = 76;
if (num > 0) {
  console.log("positive");
} else {
  console.log("negavtive");
}
 // write an if else statement to determine if a number is odd or even
 
 if (num % 2 === 0){
    console.log("EVEN NUMBER");
    
    
 }else {
    console.log("ODD NUMBER");
    
 }

 //multiple else if

 // overpopulated >= 300, underpopulated <= 50 and balanced population > 50 and < 300
 const censusResult = 500;

 if (censusResult >= 300){
    console.log("OVER POPULATED");
    
 }
 else if (censusResult <= 50){
    console.log("UNDER POPULATED");
    
 }
 else{
    console.log("BALANCED POPULATION");
    
 }
 // lottery system for a company a b c (winner) d
 const userChoice = "a";

 if (userChoice ==="c") {
    console.log("congratulations");
    
 }
 else {
    console.log(("TRY AGAIN"));
    
 }
 // lottery system for a company 4 choices a(trip to dubai) b (try again) c (car) d (blender)

 const userchoiceB = "a";
 if (userchoiceB === "a") {
    console.log("TRIP TO DUBAI");
    
 }
 else if (userchoiceB === "c"){
    console.log("Car");
    
 }
 else if (userchoiceB === "d") {
    console.log("BLENDER");
    
 }
 else {
    console.log("TRY AGAIN");
    
 }
  // we are sorting people using their age into groups
  // age 40 and above --> Elderly person
  // 18-39 --> Young adult
  // less then 18 -->

  const ageGroup = 22;
  if (ageGroup >=40){
   console.log("Elderly person");
   
  }else if (ageGroup >= 18 && ageGroup <= 39){
   console.log("Young adult");
   
  }else if (ageGroup < 18){
   console.log("Teenager");
   
  }
  const movie = 5;
  if (movie >= 8){
   console.log("GREEN");
  } else if (movie >= 5){
   console.log("ORANGE");
   
  } else {
   console.log("RED");
   
  }
   let burnley = 3;
   let sunderland = 2;

   if (burnley > sunderland){
      console.log("Burnley Wins");
      
   } else if (sunderland > burnley){
      console.log("sunderland wins");
      
   }else {
      console.log("it is a draw");
      
   }

   // predicted that the match will end in a draw and the number of goals scored will be more than 4
   // write if else statement to determine if the bet wins or not

   burnley = 3;
   sunderland = 3;

   const totalGoals = burnley + sunderland;

   if (burnley === sunderland && totalGoals > 4){
      console.log("YOU WON THE BET");
      
   }else{
      console.log("YOU LOSE");
      
   }

   // ola predited that sunderland wins or
   // the number of goals scored by sunderlamd is more than two

   if(sunderland > burnley || sunderland > 2){
      console.log("Ola Wins");
   } else {
      console.log("Ola Lost");
      
   }


      // liverpool wins (liver > man) and liverpool scores less than 4 (liver < 4)
      // and total corners is 9 ( lic + manC  === 9)

      const liverpool = 2;
      const mancity = 5;
      const liverpoolcorner = 4;
      const mancitycorner = 5;
      const totalcorners = liverpoolcorner + mancitycorner;

      if (liverpool > mancity && liverpool < 4 && totalcorners === 9){
         console.log("Emmanuel Wins");
         
      } else {
         console.log("Emmanuel Lost");
         
      }
         
