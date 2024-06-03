class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`username: ${this.username}`);
  }
   static createId(){ // static keyword not acces by any class or this class
    return `123`
  }
}


const dhruv = new User('Dhruv')
// console.log(dhruv.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iphone = new Teacher('iphone','i@phone.com')
console.log(iphone.createId());