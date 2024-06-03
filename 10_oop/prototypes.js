// let myName = "Dhruv       "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  getSpiderPower: function () {
    console.log(`spidey power is ${this.spiderman}`);
  },
};
Object.prototype.dhruv = function () {
  console.log(`Dhruv is present in all object`);
}; // giv power all
Array.prototype.heyDhruv = function () {
  console.log(`Dhruv say hero`);
}; // only give to array
// heroPower.dhruv()
// myHeros.dhruv()

myHeros.heyDhruv();

//inheritance
const User={
    name:"chai",
    email:"chai@google.com"
}
const Teacher = {
  makeVideo: true,
};

const TeachingSuport = {
  isAvalible: false,
};

const TASupport = {
  makeAssignment: "Js assignment",
  fullTime: true,
  __proto__:TeachingSuport //inheritance 
};

Teacher.__proto__ = User
Object.setPrototypeOf(TeachingSuport,Teacher)
let anotherUsername ="chai aur code          "

String.prototype.trueLength = function(){
    // console.log(`${this}`);
    // console.log(`${this.name}`);
console.log(`True length is : ${this.trim().length}`);
}
anotherUsername.trueLength()

"Dhruv  ".trueLength()