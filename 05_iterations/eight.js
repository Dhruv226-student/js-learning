//reduce

const arr = [1, 2, 3, 4, 5];

// const myTotal = arr.reduce(function(acc,curval){
//     console.log(`acc : ${acc} and curval : ${curval}`);
//     return acc + curval
// },0)
const myTotal = arr.reduce((acc, curval) => acc + curval, 0);
console.log(myTotal);

const shoppingCart = [
  {
    itemname: "js course",
    price: 399,
  },
  {
    itemname: "web dev",
    price: 5999,
  },
  {
    itemname: "dsa course",
    price: 1399,
  },
  {
    itemname: "app dev course",
    price: 1399,
  },
];
const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay);

