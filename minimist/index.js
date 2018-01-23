/*
 * @Author: Evan 
 * @Date: 2017-12-21 16:13:31 
 * @Last Modified by: Evan
 * @Last Modified time: 2018-01-22 13:07:53
 */
const minimist = require('minimist');

let argv = minimist(process.argv.slice(2));

console.log(argv);
// node  index.js -a haha --env dev --test test
// > {_: [], a: 'haha', env: 'dev', test: 'test'}
