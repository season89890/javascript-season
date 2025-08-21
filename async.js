
// Asynchronous JS
// non-blocking code
console.log("A");
 setTimeout(() => {
    console.log("B");
    
 }, 5000);

 console.log("C");
 // a c b
 // fetch DATA from an external source
 //API - application progamming interface
 // private api public api




 const url = "https://jsonplaceholder.typicode.com/users";
 // callbacks (.then) async/await
 //PROMISES - pending fulfilled()

 //json - javascript object notation

 const fetchUsers = async () => {
   try {
     const reponse = await fetch(url);
     const data = await reponse.json();
     console.log(data);
   } catch (error) {
    console.log(error);
    
   }
    ;
    
 };
 fetchUsers();

 const productUrl = "https://fakestoreapi.com/products";

 const fetchProducts = async()=>{
    try {
        const response = await fetch(productUrl);
        const data = await response.json();
         console.log(data);
    } catch (error) {
        console.log(error);
        
    }
   
    
 };
 fetchProducts();

 