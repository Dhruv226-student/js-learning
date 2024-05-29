let score = "33abc";

console.log(typeof score);

//coversion
let valueInNUmber = Number(score)
console.log(typeof valueInNUmber);
console.log(valueInNUmber); // output >>> not a number nan

// "33" => 33
//"33abc" => nan
//true =>1; false =>0;
//""=> false //"dhruv"=> true conversion

let isLoggedIn = "hero";
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)