// Progress(length)
// parameters:
// length progressBar length

// methods :
// update(currentValue, maxValue) - Returns the progress bar min/max content to write to stdout. Allows for dynamic max values.
// update(percent) - Returns the progress bar content as a percentage to write to stdout. 0.0 > value < 1.0.
const clui = require('clui');

const Progress = clui.Progress;

let progressBar = new Progress(20);
console.log(progressBar.update(10, 40));

console.log(progressBar.update(0.6));
