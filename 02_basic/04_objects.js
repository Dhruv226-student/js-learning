const tinderUser = new Object();
tinderUser.id = "1234abc";
tinderUser.name = "same";
tinderUser.email = "abc@gamail.com";

// console.log(tinderUser);


const regularUser ={
    email:"Some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"dhruv",
            lastname:"kachwala"
        }
    }
}
// console.log(regularUser.fullname);


const obj1 ={a:"!",b:"2",c:"4"}
const obj2 ={d:"!",e:"2",f:"4"}

const obj3 ={obj1 , obj2}
// console.log(obj3)

const course ={
    coursename: "js in hindi",
    price:"999",
    coursceInstructore:"hitesh"
}

//destructuring 
const {coursename} = course
console.log(coursename)