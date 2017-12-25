/*
 * @Author: Evan 
 * @Date: 2017-12-20 23:30:28 
 * @Last Modified by: Evan
 * @Last Modified time: 2017-12-21 15:16:39
 */
const gradient = require('gradient-string');

console.log(gradient('cyan', 'pink')('Hello World'));

// init a gradient color 
let gradientColor = gradient('red', 'grenn', 'blue');
// or
// let gradientColor = gradient(['#FF0000', '#00FF00', '#0000FF']);

// or
// let coolGradient = gradient([
//     tinycolor('#FFBB65'),       // tinycolor object
//     { r: 0, g: 255, b: 0 },       // RGB object
//     { h: 240, s: 1, v: 1, a: 1 }, // HSVa object
//     'rgb(120, 120, 0)',         // RGB CSS string
//     'gold'                      // named color
// ]);

let coolString = gradientColor('What the fuck!');
console.log(coolString);

// built-in gradients 
// rainbow, cristal, morning, vice,passion, fruit 等
console.log(gradient.rainbow('Hello RainBow') + '  ' + gradient.morning('Morning Guys!'));


// multiline
console.log(gradient.atlas.multiline([
  '  __',
  '<(o )___',
  ' ( ._> /',
  '  `---\'',
].join('\n')));

let multiline = gradient('cyan', 'yellow').multiline([
  '  __',
  '<(o )___',
  ' ( ._> /',
  '  `---\'',
].join('\n'));

console.log(multiline);

// options pos 0 - 1 設置顏色的位置
let coolGradient = gradient([
  { color: '#d8e0de', pos: 0 },
  { color: '#255B53', pos: 0.8 },
  { color: '#000000', pos: 1 }
]);

console.log(coolGradient('Hello Hello Hello ', { interpolation: 'hsv' })); // default rgb
console.log(coolGradient('Hello Hello Hello ', { interpolation: 'hsv', hsvSpin: 'long' }));  // default short