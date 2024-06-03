const user= {
    username: "Dhruv",
    loginCount:8,
    signedIn: true,
    getUserDetails : function(){
        // console.log("got User details ");
        console.log(this);
    }
}
// console.log(user.getUserDetails());
// console.log(this); // {} empty 


function User(username, logingCount , isLoggedIn){

   this.username = username 
this.logingCount = logingCount
this.isLoggedIn=isLoggedIn
// return this
}
const userOne =new User("Dhruv" ,12,true)
const usertwo =new User("chai aur code",12,false)
console.log(userOne.constructor);
// console.log(usertwo);