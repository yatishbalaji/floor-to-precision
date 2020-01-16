const floorToPrecision = require('../src/index');

console.log('Positive values');
console.log(floorToPrecision(12489.9482, 5)); // 12489.9482
console.log(floorToPrecision(12489.9482, 4)); // 12489.9482
console.log(floorToPrecision(12489.9482, 3)); // 12489.948
console.log(floorToPrecision(12489.9482, 2)); // 12489.94
console.log(floorToPrecision(12489.9482, 1)); // 12489.9
console.log(floorToPrecision(12489.9482, 0)); // 12489
console.log(floorToPrecision(12489.9482, -1)); // 12480
console.log(floorToPrecision(12489.9482, -2)); // 12400
console.log(floorToPrecision(12489.9482, -3)); // 12000
console.log(floorToPrecision(12489.9482, -4)); // 10000
console.log(floorToPrecision(12489.9482, -5)); // 0

console.log('Negative values');

console.log(floorToPrecision(-12489.9482, 5)); // 12489.9482
console.log(floorToPrecision(-12489.9482, 4)); // 12489.9482
console.log(floorToPrecision(-12489.9482, 3)); // 12489.948
console.log(floorToPrecision(-12489.9482, 2)); // 12489.94
console.log(floorToPrecision(-12489.9482, 1)); // 12489.9
console.log(floorToPrecision(-12489.9482, 0)); // 12489
console.log(floorToPrecision(-12489.9482, -1)); // 12480
console.log(floorToPrecision(-12489.9482, -2)); // 12400
console.log(floorToPrecision(-12489.9482, -3)); // 12000
console.log(floorToPrecision(-12489.9482, -4)); // 10000
console.log(floorToPrecision(-12489.9482, -5)); // 0
