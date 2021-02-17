// console.log(arguments);
// console.log(require("module").wrapper);

//module. exports
const C = require("./test-module1");
const calculator1 = new C();
console.log(calculator1.add(5, 5));

// exports
// const calculator2 = require("./test-module2");
const { add, multiply, divide } = require("./test-module2");
console.log(add(2, 3), multiply(2, 3), divide(2, 3));

// cashing
require("./test-module3")();
require("./test-module3")();
require("./test-module3")();
