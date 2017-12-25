// Gauge(value, maxValue, gaugeWidth, dangerZone, suffix)
// value - The current value of the metric being displayed by this gauge
// maxValue - The highest possible value of the metric being displayed
// gaugeWidth - How many columns wide to draw the gauge
// dangerZone - The point after which the value will be drawn in red because it is too high
// suffix - A value to output after the gauge itself.

const cli = require('clui'),
  os = require('os');

const gauge = cli.Gauge;

let total = os.totalmem(),
  free = os.freemem(),
  used = total - free,
  easyRead = Math.ceil(used / 1000000) + ' MB';

console.log(gauge(used, total, 30, total * 0.7, easyRead));
