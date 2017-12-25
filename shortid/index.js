const shortId = require('shortid');

let log = console.log;

// 生成一个独一无二的id
let id = shortId.generate();
log(id);

// 设置新的字符集 长度为64
// log(shortid.characters('64个新字符'))

let i = 10;
while (i--) {
  console.log(shortId.generate());
}

log(shortId.generate());
