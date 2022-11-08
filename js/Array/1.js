// let arr = new Array("tibet", "bicycle", "dataup", 20);
// console.log(arr);
// [ 'tibet', 'bicycle', 'dataup', 20 ]

// let arr = ["tibet", "daydayup", 318];
// console.log(arr);
// [ 'tibet', 'daydayup', 318 ]

// let arr = [
//   ["tibet", "to", 318],
//   ["change", "after"],
// ];
// console.log(arr[0][0]);
// // tibet

// let arr = new Array(4);
// console.log(arr);

// let arr = [];
// arr[0] = "hello world";
// console.log(arr);

// const arr = ["tibet", "318", 2022];
// arr.push("dayday");
// console.log(arr);
// //[ 'tibet', '318', 2022, 'dayday' ]

// const arr = ["tibet", "318", 2022];
// console.log(arr.length);

// let arr = ["tibet"];
// arr[0] = "something";
// console.log(arr);

// let arr = ["tibet"];
// arr[4] = "day";
// console.log(arr);
// [ 'tibet', <3 empty items>, 'day' ]

// const arr = new Array(4);
// console.log(arr.length);
// console.log(arr);
// 4
// [ <4 empty items> ]

// let arr = Array.of(4);
// console.log(arr);
// [ 4 ]

// let arr = ["tibet", 318];
// let isArr = Array.isArray(arr);
// console.log(isArr);
// // true

// console.log([1, 2, 1, 3].toString());
// 1,2,1,3
// let arr = ["tibet", "dat", "other", 3];
// let arrAfter = arr.toString();
// console.log(arrAfter);
// tibet,dat,other,3

// let arr = ["tibet", "dat", "other", 3];
// console.log(arr.join(","));
// tibet,dat,other,3

// let arr = ["tibet", "dat", "other", 3];
// console.log(String(arr));
// tibet,dat,other,3

// let test = "to tibet";
// console.log(Array.from(test));
// ["t", "o", " ", "t", "i", "b", "e", "t"];

// let test = {
//   0: "tibet",
//   1: "other",
//   length: 2,
// };
// console.log(Array.from(test));
// // [ 'tibet', 'other' ]

// let a = ["a", "b", "c"];
// let c = [1, 2, 11];
// // console.log(...a, ...c);
// // a b c 1 2 11
// console.log([...a, ...c]);
// // [ 'a', 'b', 'c', 1, 2, 11 ]

// function other(...arg) {
//   console.log(arg);
// }
// other(1, 1, 2, 22, 12);
// // [ 1, 1, 2, 22, 12 ]

// function test(arg, ...args) {
//   console.log(arg, args);
// }
// test("more", 1, 1, 1, 1, 12);
// // more [ 1, 1, 1, 1, 12 ]

// let test = {
//   name: {
//     type: 1,
//     status: false,
//   },
//   age: 23,
// };
// let {
//   name: { type, status },
//   age,
// } = test;
// console.log(type, status, age); //1 false 23

// testOne = ["name", "chagne", "other"];
// testTwo = ["test"];
// testTwo.push(...testOne);
// console.log(testTwo); //[ 'test', 'name', 'chagne', 'other' ]

// testOne = ["name", "chagne", "other"];
// let after = testOne.pop();
// console.log(after); //other
// console.log(testOne); // ["name", "chagne"];

// testOne = ["name", "chagne", "other"];
// testOne.shift();
// console.log(testOne); //[ 'chagne', 'other' ]
// testOne.unshift("after", "age");
// console.log(testOne); //[ 'after', 'age', 'chagne', 'other' ]

// test = ["name", "chagne", "other"];
// // test.fill("filled", 0, 1);
// // console.log(test); //[ 'filled', 'chagne', 'other' ]
// test.fill("fills", 1, 2);
// console.log(test); //[ 'name', 'fills', 'other' ]

// test = ["name", "chagne", "other", "test", "test1", "test2"];
// console.log(test.slice(3)); //[ 'test', 'test1', 'test2' ]

// let test = ["test"];
// let more = ["test1"];
// console.log(test.concat(more)); //[ 'test', 'test1' ]

// splice 会改变原函数
// let test = ["tibet", "dog", "cat", 1, 20];
// let afterDeal = test.splice(1, 3);
// console.log(afterDeal);
// console.log(test);

// 删除数组的最后一个元素
// test.length = test.length - 1;
// console.log(test);

// test.splice(1, 2, "tibet");
// console.log(test);

// let test = [1, 2, 12, 21, 12];
// test.length = 0;
// console.log(test); // []

// let test = ["tibet", "other", "changte"];
// let after = test.join(",");
// console.log(after); //tibet,other,changte

// let price = "12,123,123,123";
// let dealPrice = price.split(",");
// console.log(dealPrice); //[ '12', '123', '123', '123' ]

// let test = ["tibet", 318, "change", "something"];
// let after = test.copyWithin(2, 0, 2);
// console.log(test);
// console.log(after);

// let test = ["change", "after", 123, 21];
// let a = test.indexOf(21);
// console.log(a);
// let b = test.indexOf("others");
// console.log(b); // -1 没有找到存-1

// let test = ["tibet", "go", "going", "other"];
// let a = test.slice(1, 2);
// let b = test.slice(test.length - 1);
// console.log(a);
// console.log(b);

// let str = "after";
// // let b = Array.of(str);
// let c = str.split("");
// // console.log(b);
// console.log(c);
// console.log(c.slice(c.length - 1));

// let arr = ["test", "other"];
// console.log(arr.includes("test")); // true

// let arr = [1, 231, 232, 123];
// arr.reverse();
// console.log(arr);

// arr.sort();
// console.log(arr);

// let arr = ["chagne", "other", "age", "more"];
// // console.log(arr.keys());
// for (const key of arr.keys()) {
//   console.log(key);
// }
// for (const value of arr.values()) {
//   console.log(value);
// }
// for (const [item, index] of arr.entries()) {
//   console.log(item, index);
// }

// let a = [
//   {
//     name: "lihua",
//     age: 23,
//   },
//   {
//     name: "lilan",
//     age: 12,
//   },
//   {
//     name: "lihua",
//     age: 34,
//   },
// ];
// let copy = a.every((item, index) => {
//   //   console.log(item, index);
//   return item.age >= 23;
// });
// console.log(copy);

// let copy = a.some((item) => item.age >= 23);
// console.log(copy); // true

// let copy = a.filter((item) => item.age <= 23);
// console.log(copy);

// let copy = a.map((item) => (item.other = "change"));
// console.log(a, copy);

// let copy = a.reduce((pre, cur, index, arr) => {
//   console.log(pre, cur, index, arr);
// });

// let num = [1, 1, 1, 1, 12121, 3423];
// num.reduce((item, index) => {
//   console.log(item, index);
// }, 0);
