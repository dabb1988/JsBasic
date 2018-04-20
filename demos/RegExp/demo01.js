// String 常用两个方法search() replace()
var str = "Visit microsoft Runoob!";
var n = str.search(/Runoob/i);
console.log(n)
var txt = str.replace(/microsoft/i,"Runoob");
console.log(txt)

// RegExp 常用两个方法test() exec()
var test = /e/.test("The best things in life are free!")
var test1 = /e/.test("sfdsfdsfsdfsdf")
console.log(test, test1)

var exec = /e/.exec("The best things in life are free!")
var exec1 = /e/.exec("sfdsfdsfsdfsdf")
console.log(exec, exec1)

console.log(/^\d+$/.test("as1123"))
