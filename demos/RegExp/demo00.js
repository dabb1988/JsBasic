// RegExp 方法 compile exec test
console.log("---test,exec:")
var str="Hello world!";
//查找"Hello"
var patt=/o/g;
//var patt=/o/;
console.log(patt.test(str))
console.log(patt.test(str))
console.log(patt.test(str))
console.log(patt.test(str))
console.log(patt.test(str))
console.log(patt.exec(str), patt.test(str))
console.log(patt.exec(str), patt.test(str))
console.log(patt.exec(str), patt.test(str))
console.log(patt.exec(str), patt.test(str))
console.log(patt.exec(str), patt.test(str))
console.log(patt.exec(str), patt.test(str))
console.log(patt.exec(str), patt.test(str))
console.log(patt.exec(str), patt.test(str))
console.log(patt.exec(str), patt.test(str))
console.log(patt.exec(str), patt.test(str))
console.log(patt.exec(str), patt.test(str))
// *test和exec:/g的话，匹配第1个，然后轮循
// String 方法 search replace match split
console.log("---search:")
var str1="Visit Runoob!"; 
var reg1=/Runoob/g;
//var reg1=/Runoob/;
console.log(str1.search(reg1))
console.log(str1.search(reg1))
console.log(str1.search(reg1))
// *search返回下标
console.log("---match:")
var str2="The rain in SPAIN stays mainly in the plain"; 
var reg2=/ain/g
console.log(str2.match(reg2))
console.log(str2.match(reg2))
console.log(str2.match(reg2))
console.log(str2.match(reg2))
console.log(str2.match(reg2))
console.log(str2.match(reg2))
console.log(str2.match(reg2))
console.log(str2.match(reg2))
// *match返回数组
console.log("---replace和split")

// *replace和split方法不改变原始字符串
