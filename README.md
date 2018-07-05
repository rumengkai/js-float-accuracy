> float-accuracy.js@1.0.0

## install float-accuracy.js

```bash

npm install js-float-accuracy

```

## use js-float-accuracy.js

> node import

``` bash

const accuracy=require('js-float-accuracy');

import accuracy from 'js-float-accuracy'

// division（除法） example

console.log(accuracy.division(0.1,0.1));		// 1

// multiplication（乘法） example

console.log(accuracy.multiplication(0.1,0.1));		// 0.01

// addition（加法） example

console.log(accuracy.addition(0.1,0.1));		// 0.2

// subtraction（减法） example

console.log(accuracy.subtraction(0.1,0.1));		// 0

// 末位进1保留小数，第二个参数传入保留位数

console.log(accuracy.toCeil(0.01234, 4)); // 0.0124

// 末位舍掉保留小数，第二个参数传入保留位数

console.log(accuracy.toFloor(0.01235, 4)); // 0.0123

```

> script label

``` bash

<script src="~/float-accuracy/index.js">
// to do ...
// adopt window.accuracy use
</script>

```

[float-accuracy.js@1.0.0](https://github.com/rumengkai/js-float-accuracy.git)
