/*
 * @Author: Evan 
 * @Date: 2017-12-20 23:31:11 
 * @Last Modified by: Evan
 * @Last Modified time: 2017-12-21 15:07:03
 */
// 清屏
const clear = require('clear');

let myClear = ({ bool, delay = false } = {}) => {
  console.log(bool);

  if (delay) {
    setTimeout(function () {
      clear(bool);
    }, delay * 1000);
  } else {
    clear(bool)
    // 如果bool为false 不清除屏幕上的东西，只是把cursor置于顶行。
  }
}

console.log('hahah')

console.log('hahah')

console.log('hahah')
console.log('hahah')
console.log('hahah')
console.log('hahah')

myClear({ bool: true, delay: 10 });
