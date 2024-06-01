const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums =myNum.map((num)=>    num+10)

const newNums = myNum
  .map((num) => num * 10) // new arr [10,20,30,40,50,60,70,80,90,100]
  .map((num) => num + 1) // new arr [11,21,31.......101]
  .filter((num) => num >= 40); // output [41, 51,  61, 71,81, 91, 101]

console.log(newNums);
