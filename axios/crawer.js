const axios = require('axios');
const cheerio = require('cheerio');

let options = {

  transformResponse: [function (data) {

    return cheerio.load(data);
  }]
}

axios.get('http://www.linuxidc.com/Linux/2016-09/134940.htm', options).then(body => {
  let $ = body.data;

  console.log($('.aTitle').text());
}).catch(err => {
  console.log(err);
});