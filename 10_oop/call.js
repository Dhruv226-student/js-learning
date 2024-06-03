function setUsername(username) {
  //complex db call
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  setUsername.call(this,username); //referance  hold 

  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "abce@gmail.com", 123);
console.log(chai);
