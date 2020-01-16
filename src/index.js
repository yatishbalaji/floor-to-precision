/**
    * Floor a number at a given position
    * @example
    * floorToPrecision(-12489.9482, 3)) // 12489.948
    * @param   {number} value value to be converted
    * @param   {number} precision Position where we need to floor
    *
    * @returns {number} returns converted number after flooring at a position
    */
const floorToPrecision = (value, precision = 0) => {
  let isNegate = false;
  let data = value;

  if (data < 0) {
    data *= -1;
    isNegate = true;
  }

  data = Math.floor(data * (10 ** precision)) / (10 ** precision);

  return isNegate ? -1 * data : data;
};

module.exports = floorToPrecision;
