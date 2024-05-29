let score = "33abc";

// console.log(typeof score);

//coversion
let valueInNUmber = Number(score)
// console.log(typeof valueInNUmber);
// console.log(valueInNUmber); // output >>> not a number nan

// "33" => 33
//"33abc" => nan
//true =>1; false =>0;
//""=> false //"dhruv"=> true conversion

let isLoggedIn = "hero";
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(typeof stringNumber)

//**********************Operation ********************** */
let value = 3
let negvalue = -value
// console.log(negvalue) //=> output  -3

let str1 ="heloo"
let str2 =" world"

str3= str1+str2
// console.log(str3)

// //number conversion confusing
// console.log("1"+2)
// console.log(1+"2")
// console.log("1"+2+2) //output 122
// console.log(1+2+"2") //output 32

let gameCounter =100;
gameCounter++

console.log(gameCounter);
//pre fix ++a
//post fix  b++
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
