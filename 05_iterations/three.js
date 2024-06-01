// for of 

// ["","",""]
// [{},{},{}]

const arr =[1,2,3,4,5]

for (const num of arr) {
    // console.log(num) 
}
const greetings ="hello world"

for (const greet of greetings) {
    if(greet==" "){
        continue
    }
    // console.log(`Each char is ${greet}`)
}


//Maps 
const map = new Map()


map.set('In',"India")
map.set('usa',"united state of america")
map.set('Fr',"France")

// console.log(map)

for (const [key,value] of map) {
    // console.log(key,' :- ',value)
}

const myObj ={
    game1:'nfs',
    game2:'free fire',
    game3:'spiderman'
}

// for (const [key,value] of myObj) {
//     console.log(key,value); //error
// }
