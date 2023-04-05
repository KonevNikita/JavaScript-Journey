// Палиндром ли число?

let x = 1231;
x = String(x);
let y = x.split('').reverse().join('');

if (x === y) console.log(true);
else console.log(false);