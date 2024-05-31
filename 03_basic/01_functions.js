function sayMyName() {
  console.log("hello");
}
// sayMyName()

// //parmeters function func(a,b){}
// function addTwoNumbers(number1,number2){
//      console.log(number1+number2);
// }

// // arguments ....> addTwoNumbers(2,5) <
// // addTwoNumbers(2,5)
// const result=  addTwoNumbers(8,7)
// console.log("result",result);

function addTwoNumbers(number1, number2) {
  let result = number1 + number2;
  return result;
}
const result = addTwoNumbers(5, 6);
// console.log(result)

function loginInUser(username = "same") {
  if (!username) {
    console.log("Please Enter UserName : ");
    return;
  }
  return `${username} just Logged in`;
}

// console.log(loginInUser());


// ---> rest perator ... (triple dot ) also know as splet  

//multiple value pass in js
function calculateCartPrice(...num1){ 
    return num1
}
// console.log(calculateCartPrice(200,400,500)) //get a array 


const user ={
    username:"Dhruv",
    prices:200
}

function handleObject(anyObj){

    console.log(`UserName is ${anyObj.username} and price is ${anyObj.prices}`)
}
// handleObject(user)


const myArr = [200,400,500,100]


function returnSecondValue(getArray){
    return getArray
}
console.log(returnSecondValue(myArr));