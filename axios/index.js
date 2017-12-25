import { request } from 'http';

const axios = require('axios');

let log = console.log;

// axios.get('http://www.linuxidc.com/Linux/2016-09/134940.htm').then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });

let getPage = async function(url) {
  let result;

  try {
    result = await axios.get(url, {});
  } catch (err) {
    log(err);
  }

  return result;
};

let get = async () => {
  log(await getPage('http://www.linuxidc.com/Linux/2016-09/134940.htm'));
};

get();

// 具体配置查看npm 上的文档

// response schema
// {
//   data: {},
//   status: 200,
//   statusText: 'OK',
//   headers: {},
//   config: {},
//   request: {}
// }
