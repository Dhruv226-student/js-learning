//singleton
// Object.create


//object literls 
const mySym = Symbol("key1")

const jsUser = { 
    name:"Dhruv",
    func:function(){
        console.log("hello")
    },
    [mySym]:"key1",
    age:18
}

// console.log(jsUser)
// console.log(typeof jsUser)

// console.log(jsUser.age)
// console.log(jsUser["age"])
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);


// console.log(jsUser)

jsUser.greeting=function(){
    console.log("Hello js user");
}
jsUser.names=function(){
    console.log(`hello js user ${this.name} your age is ${this.age}`);
}
console.log(jsUser.greeting());
console.log(jsUser.names());