# Floor To Precision
Floor a give number at a position

## Installation
----------------------

`npm install --save floor-to-precision`

## Usage
```
const floorToPrecision = require('floor-to-precision')

floorToPrecision(-12489.9482, 5); // 12489.9482
floorToPrecision(-12489.9482, 4); // 12489.9482
floorToPrecision(-12489.9482, 3); // 12489.948
floorToPrecision(-12489.9482, 2); // 12489.94
floorToPrecision(-12489.9482, 1); // 12489.9
floorToPrecision(-12489.9482, 0); // 12489
floorToPrecision(-12489.9482, -1); // 12480
floorToPrecision(-12489.9482, -2); // 12400
floorToPrecision(-12489.9482, -3); // 12000
floorToPrecision(-12489.9482, -4); // 10000
floorToPrecision(-12489.9482, -5); // 0
```

## License

floorToPrecision is copyright (c) 2019-present Yatish Balaji <yatishmotamarri@yahoo.com> and
the [contributors to floorToPrecision](https://github.com/yatishbalaji/floorToPrecision/graphs/contributors).

floorToPrecision is free software, licensed under the MIT License. See the
`LICENSE` file for more details.