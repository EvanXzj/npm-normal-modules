// SparkLine(values, suffix);
// values - An array of values to go into the sparkline
// suffix - A suffix to use when drawing the current and max values at the end of sparkline

const cli = require('clui');

const SparkLine  = cli.Sparkline;

let reqsPerSec = [10,12,3,7,12,9,23,10,9,19,16,18,30];

console.log(SparkLine(reqsPerSec, 'req/sec'));