const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach( i =>{console.log(i);})

// coding.forEach((item)=>{
//     console.log(item)
// })

// coding.forEach((item ,index,arr)=>{
//     console.log(item ,index,arr)
// })
const myCoding = [
  {
    languageName: "Javascript",
    languageFileName: "js",
  },
  {
    languageName: "cpp",
    languageFileName: "c++",
  },
  {
    languageName: "React js",
    languageFileName: "js",
  },
];
myCoding.forEach((item)=>{
    console.log(item.languageName);
})
