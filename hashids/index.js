/*
 * @Author: Evan 
 * @Date: 2017-12-25 10:57:17 
 * @Last Modified by: Evan
 * @Last Modified time: 2017-12-30 12:10:30
 */
const hashids = require('hashIds');

let hash = new hashids();

let id = hash.encode(1, 2, 3);

console.log(hash.decode(id));

let hashids = new Hashids();
console.log(hashids.encode(1)); // jR

let hashids = new Hashids('', 10); // pad to length 10
console.log(hashids.encode(1)); // VolejRejNm
