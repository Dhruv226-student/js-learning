const marvel_heros = ["thors", "spiderman", "Ironman"];
const dc_heros = ["flsh", "batman", "superman"];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
const all_heros = marvel_heros.concat(dc_heros);

// console.log(all_heros);
const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

const oneArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_oneArr= oneArr.flat(Infinity)
console.log(real_oneArr);


console.log(Array.from("Dhruv"))

