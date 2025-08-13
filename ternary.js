

// ternary operators
// is another way of writing if else statement

let otpSent = 4587;
let otpEntered = 4578;

if(otpEntered === otpSent) {
    console.log("Transaction completed");
    
}else {
    console.log("Wrong Otp, try again");
    
}

// ternary operator
// condition ? first action : second action

otpEntered === otpSent 
? console.log('Transaction completed') 
: console.log('Wrong Otp');


// using ternary operator

 let balance = 6000;
 let amount = 8000;
  balance >= amount 
  ? console.log('Transaction completed') 
  : console.log('insufficient funds');

  const isMarried = false;

  // He is married or he is not married

  const statement = `He ${isMarried ? "is" : "is not"} married`;
  console.log(statement);
  
  
  
