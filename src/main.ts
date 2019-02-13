import * as DDD from './index';

console.log(DDD)


const xming = new DDD.Teacher("", 4)

console.log(xming, new DDD.Ano().method)

// xming.address.g = 'hh'; // error
// console.log(xming._age);


// function request (opts, (err, res, body) => {
//   if (err) {}
//   else {
//       return body;
//   }
// });

// // 解决方案：
// // 使用{}占位

// function request (opts, (err, {}, body) => {
//   if (err) {}
//   else {
//       return body;
//   }
// });


import * as url from './url';

console.log(url)

console.log(url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash'))
  ;
// enum EventListenerName {
//   hash = 'hashChange',
//   html5 = 'popstate'
// }

// console.log(EventListenerName.hash)
