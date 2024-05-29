const accountId = 101;
// accountId=102  ====> error  Assignment to constant variable.
// not allowed accountId = 102 ; after declare one time

let accountEmail = "abc@gmail.com";
// let is use only for scope if (condition) { scope  }

var accountPassword = "1245";
//globelvaribles
/* 
    prefer not to use var
    because of issue in block scope and functional scope
*/
console.log(accountId);
let accountState ;
accountCity = "surat ---> error ";
// ^ not a good tecnique
console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);
