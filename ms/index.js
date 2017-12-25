// 将各种格式时间转化为毫秒格式的时间:
// If a number is supplied to ms, a string with a unit is returned
// If a string that contains the number is supplied, it returns it as a number (e.g.: it returns 100 for '100')
// If you pass a string with a number and a valid unit, the number of equivalent milliseconds is returned
const ms = require('ms');

const obj = ['2 days', '1d', '10h', '2.5hrs', '1m', '1y', '100', '-3h'];

for (const val of obj) {
  console.log(`${val} --- ${ms(val)}`);
}

const obj2 = [6000, 2 * 6000, -3 * 6000];

for (const val of obj2) {
  console.log(`ms(val) -- ${ms(val)}`);
}

for (const val of obj2) {
  console.log(`ms(val, {long: true}) -- ${ms(val, { long: true })}`);
}
