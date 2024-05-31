//if
const isUserLoggedIn = true;
if (isUserLoggedIn) {
}

//comprision < , > ,<=,>= ,==, !=,   (types pan check kare 2==="2")===
//assigment operator =>      =
// if(2==="2"){
//     console.log("Executed")
// }
if (2 !== "2") {
//   console.log("Executed");
}
// const score=900
// if(score > 100){
//     const power ="fly"
//     console.log(`user Power : ${power}`)
// }else{
//     console.log(`${100-score} more points`)
// }


// short hand notaion

// const balance = 1000
// // if(balance>500) console.log("test"); // implicit


// //nest if 
// if(balance < 500){
//     console.log("less than 500");
// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance<900){
//     console.log("less than 900");

// }else{
//     console.log("less than 1200")
// }

// const userLoggedIn = true
// const debitCard = true

// if(userLoggedIn && debitCard ){
//     console.log("Allow to buy course");
// }
const facebookLoggedIn = true
const googleLoggedIn = true

if(facebookLoggedIn || googleLoggedIn){
    console.log("user Logging");
}