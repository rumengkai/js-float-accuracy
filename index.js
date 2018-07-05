function toCeil(num, p = 4) {
		let precision = Math.pow(10, p)
		return Math.ceil((num * precision).toFixed(1)) / precision
}

function toFloor(num, precision = 4) {
		let precision = Math.pow(10, p)
		return Math.floor((num * precision).toFixed(1)) / precision
}
console.log(toCeil(0.1+0.2,1)); //	0.3