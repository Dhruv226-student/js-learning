const promiseOne = new Promise(function (resolve, reject) {
  //Do and Async task
  //db calls , cryptoGraphy ,network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve(); //resolve connect
  }, 1000);
});
// First task complet after promise consume task
//consume
promiseOne.then(function () {
  console.log("promise Consumed");
}); //connection with resolve

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async two resolve");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Dhruv", email: "abc@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;

    if (!error) {
      resolve({ username: "dhruv", password: "123" });
    } else {
      reject("Error : Something went wrong");
    }
  }, 1000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;

    if (!error) {
      resolve({ username: "dhruv", password: "123" });
    } else {
      reject("Error : js went wrong ");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
consumePromiseFive();

// async function getAllUser() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getAllUser();
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))