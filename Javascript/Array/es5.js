// 判断是否是数组
console.log("---Array.isArray")
console.log(Array.isArray (['a']))
console.log(Array.isArray (1))
// toString
console.log("---[].toString()")
console.log(['a','b'].toString())
// toLocaleString
console.log("---toLocaleString")
console.log([new Date(), 'a', 'b'].toLocaleString())
console.log(typeof [new Date(), 'a', 'b'].toLocaleString())
// join与split相反
console.log("---join")
var joinArry = ['Wind', 'Rain', 'Fire']
console.log(joinArry.join(","))
console.log(joinArry.join("-"))
console.log(typeof joinArry.join(""))
// pop 删除数组的最后一项,返回删除项
console.log("---pop")
var popArry = ['a', 'b', 'c']
var popObj = popArry.pop()
console.log(popArry, popObj)
// push 在数组末尾添加新元素,返回数组长度
console.log("---push")
var pushArry = ['a', 'b', 'c']
var pushObj = pushArry.push('d')
console.log(pushArry, pushObj)
// shift 删除数组的第一项,返回删除项
console.log("---shift")
var shiftArry = ['a', 'b', 'c']
var shiftObj = shiftArry.shift()
console.log(shiftArry, shiftObj)
// unshift 数组的前面添加新元素,返回数组长度
console.log("---unshift")
var unshiftArry = ['a', 'b', 'c']
var unshiftObj = unshiftArry.unshift('aa', 'bb', 'cc')
console.log(unshiftArry, unshiftObj)
// reverse 反转数组项的顺序,返回数组
console.log("---reverse")
var reverseArry = ['a', 'b', 'c']
console.log(reverseArry.reverse())
// sort 排序,深入浅出 JavaScript 的 Array.prototype.sort 排序算法：https://segmentfault.com/a/1190000010648740
console.log("---sort")
var fruit = ['cherries', 'apples', 'bananas'];
console.log(fruit.sort()) // ['apples', 'bananas', 'cherries']
var scores = [1, 10, 21, 2];
console.log(scores.sort()) // [1, 10, 2, 21]
// concat 合并数组
console.log("---concat")
var arr1 = ['a', 'b', 'c'];
var arr2 = ['d', 'e', 'f'];
console.log(arr1.concat(arr2))
console.log(arr1.concat(1, [11], [4, [5, 6]])) //如果传入的是数组，取的是其值。但是数组中的数组，是保留的。
// slice 基于当前数组创建新数组,返回新数组
console.log("---slice ")
var a = ['1', '2', '3', '4'];
var sliced = a.slice(1, 3); // 取下标 1,2
console.log(a);      // ['1', '2', '3', '4']
console.log(sliced); // ['2', '3']
// splice
console.log("---splice")
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
console.log(myFish.splice(2, 0, 'drum'))
console.log(myFish)
console.log(myFish.splice(3, 2, 'drum'))
console.log(myFish)
// indexOf 是从前往后查找
console.log("---indexOf")
var a = [2, 9, 8];
console.log(a.indexOf(2)) // 0
console.log(a.indexOf(2, -2)) // 0
console.log(a.indexOf(9, 1)) // 0
console.log(a.indexOf(7)) // -1
if (a.indexOf(7) === -1) {
// element doesn't exist in array
}
// lastIndexOf 是从后往前查找
console.log("---lastIndexOf")
var numbers = [2, 5, 9, 2]
console.log(numbers.lastIndexOf(2))    // 3
console.log(numbers.lastIndexOf(7))    // -1
console.log(numbers.lastIndexOf(2, 3)) // 3
console.log(numbers.lastIndexOf(2, 2)) // 0
console.log(numbers.lastIndexOf(2, -2))// 
console.log(numbers.lastIndexOf(2, -1))//
//#迭代方法
// every
console.log("----every")
var everyArry = [2, 5, 8, 3, 4]
var everyRes = everyArry.every(function(element, index, array){
	return element < 10;
})
console.log(everyRes)
// some
console.log("----some")
var someArry = [2, 5, 8, 1, 4]
var someRes = someArry.some(function(element, index, array){
	return element > 10;
})
console.log(someRes)
// filter
console.log("----filter")
var filterArry = ["spray", "limit", "elite", "exuberant", "destruction", "present", "happy"];
var filterRes = filterArry.filter(function(word){
    return word.length > 6;
});
console.log(filterRes)
// map
console.log("----map")
var mapArry = [1, 5, 10, 15];
var mapRes = mapArry.map(function(x) {
    return x * 2;
});
console.log(mapRes)
// forEach
console.log("----forEach")
const forEachArry = ['item1', 'item2', 'item3'];
const copyArry = [];
forEachArry.forEach(function(item){
  copyArry.push(item)
});
console.log(copyArry)
//#缩小方法
// reduce
console.log("----reduce")
var reduceArry = [0, 1, 2, 3];
var reduceRes = reduceArry.reduce(function(accumulator, currentValue) {
	console.log(accumulator)
    return accumulator + currentValue;
});
console.log(reduceRes);
// reduceRight
console.log("----reduceRight")
var reduceRightRes = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {
return a.concat(b);
}, []);
console.log(reduceRightRes)
