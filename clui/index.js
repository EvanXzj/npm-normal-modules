/*
 * @Author: Evan 
 * @Date: 2017-12-20 23:31:00 
 * @Last Modified by: Evan
 * @Last Modified time: 2017-12-21 15:22:28
 */
const CLI = require('clui'),
  clc = require('cli-color');

let Line = CLI.Line,
  LineBuffer = CLI.LineBuffer;

let outputBuffer = new LineBuffer({
  x: 0,
  y: 0,
  width: 'console',
  height: 'console',
});

new Line(outputBuffer)
  .column('Title Placehole', 20, [clc.green])
  .fill()
  .store();

new Line(outputBuffer).fill().store();

new Line(outputBuffer)
  .column('Suscipit', 20, [clc.cyan])
  .column('Voluptatem', 20, [clc.cyan])
  .column('Nesciunt', 20, [clc.cyan])
  .column('Laudantium', 11, [clc.cyan])
  .fill()
  .store();

for (let l = 0; l < 20; l++) {
  new Line(outputBuffer)
    .column((Math.random() * 100).toFixed(3), 20)
    .column((Math.random() * 100).toFixed(3), 20)
    .column((Math.random() * 100).toFixed(3), 20)
    .column((Math.random() * 100).toFixed(3), 11)
    .fill()
    .store();
}

outputBuffer.output();

// let clui = require('clui'),
//     clc = require('cli-color'),
//     Line = clui.Line;

// let headers = new Line()
//     .padding(2)
//     .column('Column One', 20, [clc.cyan])
//     .column('Column Two', 20, [clc.cyan])
//     .column('Column Three', 20, [clc.cyan])
//     .column('Column Four', 20, [clc.cyan])
//     .fill()
//     .output();

// let line = new Line()
//     .padding(2)
//     .column((Math.random()*100).toFixed(3), 20)
//     .column((Math.random()*100).toFixed(3), 20)
//     .column((Math.random()*100).toFixed(3), 20)
//     .column((Math.random()*100).toFixed(3), 20)
//     .fill()
//     .output();
