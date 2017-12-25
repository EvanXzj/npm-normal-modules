const figlet = require('figlet');

figlet('Hello World', (err, data) => {
  console.log(data);
});

// 不支持中文
// figlet('你好啊！', (err, data) => {
//   console.log(data);
// });
