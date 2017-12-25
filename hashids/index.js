/*
 * @Author: Evan 
 * @Date: 2017-12-25 10:57:17 
 * @Last Modified by: Evan
 * @Last Modified time: 2017-12-25 11:52:29
 */
const hashids = require('hashIds');

let hash = new hashids();

var id = hash.encode(1, 2, 3);

console.log(hash.decode(id));
