const accuracy=require('../../index');
//import accuracy from 'js-accuracy'

// division example

console.log(accuracy.division(0.1,0.1));

// multiplication example

console.log(accuracy.multiplication(0.1,0.1));

// addition example

console.log(accuracy.addition(0.1,0.1));

// subtraction example

console.log(accuracy.subtraction(0.1,0.1));


console.log(accuracy.toCeil(0.1+0.2,1)); //	0.3

console.log(accuracy.toCeil(0.01235, 4)); // 0.0124

console.log(accuracy.toFloor(0.01235, 4)); // 0.0123