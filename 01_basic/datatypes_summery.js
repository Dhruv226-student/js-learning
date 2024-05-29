// Primitives it is call by value 
//7 types :String,Number ,Boolean ,null,undefined,Symbol,BigInt

const score =100
const scoreValue = 10.3
const isLoggedIn =false
const outSideTemp =null
let useremail;

const id= Symbol('123')
const anotherId= Symbol('123')
// console.log(id === anotherId); // false
// console.log(id , anotherId);

// const bigNumber  = 20987524336789n


//non primitives (refrense types)

//Array ,Objects ,Functions 

const heros = ["Shaktiman","Krish","doga"]
let myInrto={
    name:"Dhruv",
    age:19,
    adress:"surat"
}
const myFunc =function(){
    console.log("Hello Wolrd");
}

myFunc()






/// *******************************************************

//Stack (primitive types), Heap (non-primitive types)
let myName = "Dhruvvvvvv"

let anotherName = myName
anotherName = "krishna"
console.log(anotherName);
console.log(myName);


let user ={
    email : "abc@gamil.com",
    age:20
}
let userTwo = user
userTwo.email="df@gmail.com"

console.log(user.email)
console.log(userTwo.email)