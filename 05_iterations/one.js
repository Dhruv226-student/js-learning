// // for

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
// }
for (let i = 1; i <= 10; i++) {
  // console.log(`outer loop ${i}`)
  for (let j = 1; j <= 10; j++) {
    // console.log(`inner  loop value ${j}  and innerloop value ${i}`)
    // console.table(i +'*' + j +'='+ i*j);
  }
}
// let myArr = ["flash ", "hero", "shaktiman"];

// for (let index = 0; index < myArr.length; index++) {
//   const element = myArr[index];
//   console.log(element);
// }
// // for each
// myArr.forEach( i=> {
//     console.log(i)
// });



// break continue
// for (let i = 0; i <=20; i++) {
//     if(i==5){
//         console.log('detected 5 close the program')
//         break;
//     }
//       console.log(i)
// }


for (let i = 0; i <=20; i++) {
    if(i==5 ){
        // console.log('detected 5 skip 5')
        continue;
    }
    console.log(i)
  }