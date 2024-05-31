var b = 5;
let a = 300

//{        }  <==== scope
if (true) {
  let a = 3;
  var b = 4;  
  const c = 2;
  console.log("inner ",a)
}
console.log(a);

// console.log(a)  >>>>>>>>>>>>>>> a is not definned
// console.log(b); // 4 problem var is a globel
// console.log(c) >>> c is not defined but can not changed also
