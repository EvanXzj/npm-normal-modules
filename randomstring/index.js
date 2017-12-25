const randomstring = require('randomstring');

randomstring.generate();
// >> "XwPp9xazJ0ku5CZnlmgAx2Dld8SHkAeT" 
 
randomstring.generate(7);
// >> "xqm5wXX" 
 
randomstring.generate({
  length: 12,
  charset: 'alphabetic'
});
// >> "AqoTIzKurxJi" 
 
randomstring.generate({
  charset: 'abc'
});
// >> "accbaabbbbcccbccccaacacbbcbbcbbc" 

// let a = function (c, b) {
//   return c + b;
// }

// console.log(a(1, 2));
