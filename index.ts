import * as DDD from './src/index';

console.log(DDD)


const xming = new DDD.Teacher("", 4)

console.log(xming)

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