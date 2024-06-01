// const coding = ["js", "ruby", "java", "python", "cpp"];

// const values=coding.forEach((item) => {
// //   console.log(item);
//   return item
// });
// // for each not retuen value

// console.log(values);



const myNum = [1,2,3,4,5,6,7,8,9,10]

const ans =myNum.filter((num)=> num > 5)
// console.log(ans)
const newNum = myNum.filter((num)=> num%2)
// console.log(newNum)

const newNums =[]

myNum.forEach((num)=>{
    if(num %2 ==0){
        newNums.push(num)
    }
})
// console.log(newNums)

