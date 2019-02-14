import * as DDD from './index';
import * as Url from 'url';
import * as s from 'uDir/index';

console.log(process.argv)
console.log(DDD, s)


const xming = new DDD.Teacher("", 4)

console.log(xming, new DDD.Ano().method)

DDD.handlePromiseF().then((res) => {
  console.log(res)
})

DDD.handlePromiseM(DDD.handlePromise);

console.log(DDD.isPromise("s"))

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

console.log(url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash'));
console.log(Url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash'));
// enum EventListenerName {
//   hash = 'hashChange',
//   html5 = 'popstate'
// }

// console.log(EventListenerName.hash)
