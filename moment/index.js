const moment = require('moment');

let log = console.log;

let now = moment();

log(now.format())

let day = moment('1991-12-06 07:12:32');

log(day.format('MM-DD-YYYY HH:mm:ss A'));