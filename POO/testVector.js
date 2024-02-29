let {Véctor} = require("./Vector");

let vector1 = new Véctor(3, 10);
console.log(vector1);

console.log(vector1.add([1, 2, 3]));
console.log(vector1.subs([11, 5, 9]));
console.log(vector1.productNum(2));
console.log(vector1.product([4, 8, 10]));