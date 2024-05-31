const userEmail = [];

// if(userEmail){
//     console.log("Got user email")
// }else{
//     console.log("Dont hav use email");
// }

//      falsy Values
//      false, 0  ,-0 ,BigInt 0n,"",null ,undefined,NaN

//      truthy values
//      true,1, "0" ,'false'," ",[],{},function(){}

if (userEmail.length === 0) {
  //   console.log("Array is empty");
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  //   console.log("object is Empty ");
}
// nullish coalescing operator(??): null undefind

let val1;
// val1 = 5 ?? 10

// val1 = null ??10
// val1 = undefined ?? 15
// val1 = null??10??20
// console.log(val1);

//Terinal Operator

// condition ? true : false

const iceTeaPrice = 190;

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
