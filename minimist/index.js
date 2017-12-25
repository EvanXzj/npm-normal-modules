/*
 * @Author: Evan 
 * @Date: 2017-12-21 16:13:31 
 * @Last Modified by: Evan
 * @Last Modified time: 2017-12-22 15:34:20
 */
const minimist = require('minimist');

let argv = minimist(process.argv.slice(2));

console.log(argv);
// node  index.js -a haha --env dev --test test
// > {_: [], a: 'haha', env: 'dev', test: 'test'}
