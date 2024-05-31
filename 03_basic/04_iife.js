// Immediately Invoked function Expressions (IIFE)



(function chai(){
    console.log("db connected")
})();
//iife ko end karna padta hai ...> ;
//globel scope pollution ko remove karne ke liye  

(()=>{
    console.log("db connected")
})();