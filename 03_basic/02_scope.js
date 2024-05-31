var b = 5;
let a = 300

//{        }  <==== scope
if (true) {
  let a = 3;
  var b = 4;  
  const c = 2;
//   console.log("inner ",a)
}
// console.log(a);

// console.log(a)  >>>>>>>>>>>>>>> a is not definned
// console.log(b); // 4 problem var is a globel
// console.log(c) >>> c is not defined but can not changed also


function one(){
    const username ="Dhruv"
    function two(){
        const website ="youtube"
        console.log(username)
    }
    // console.log(website); // website is not defined

    two() 
 }
one()




// ***********************************************************


addOne(5) //easy run 

function addOne(num){


    return num+1
}

// erro addTwo(5)
const addTwo = function (num){
    return num+2
}
addTwo(5)