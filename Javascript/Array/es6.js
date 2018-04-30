require("babel-polyfill");
// from
console.log("----from")
console.log(Array.from(["ab", "b", "c"]))
console.log(Array.from('foo'))
// of
console.log("----of")
console.log(Array())
console.log(Array(3))
console.log(Array(3, 11, 8))
console.log(Array.of(7))
console.log(Array.of(1, 2, 3))
console.log(Array(7))
console.log(Array(1, 2, 3))
// copyWithin 将指定位置的元素复制到其他位置（会覆盖原有元素），返回当前数组。该方法会修改当前数组
console.log("----copyWithin")
console.log([1, 2, 3, 4, 5].copyWithin(-2))
console.log([1, 2, 3, 4, 5].copyWithin(0, 3))
console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4))
console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1))
// fill
console.log("----fill")
var fillArry = [1, 2, 3]
console.log(fillArry.fill(2))
console.log(fillArry.fill("a", 1, 2))
// find
console.log("----find")
var findArry = [1, 5, 10, 15]
console.log(findArry.find(function(value, index, arr) {
    return value > 9;
}))
console.log(findArry.find(function(value, index, arr) {
    return value > 20;
}))
// findIndex
console.log("----findIndex")
var findIndexArry = [1, 5, 10, 15]
console.log(findIndexArry.findIndex(function(value, index, arr) {
    return value > 10;
}))
console.log(findIndexArry.findIndex(function(value, index, arr) {
    return value > 20;
}))
// entries
console.log("----entries")
var entriesArry = ['a', 'b', 'c'];
var iterator = entriesArry.entries();
console.log(iterator.next().value); // [0, 'a']
console.log(iterator.next().value); // [1, 'b']
console.log(iterator.next().value); // [2, 'c']
console.log(iterator.next()); // [2, 'c']
// keys
console.log("----keys")
var keysArr = ['a', 'b', 'c'];
var iterator = keysArr.keys();
console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
// values
console.log("----values")
var valuesArr = ['w', 'y', 'k', 'o', 'p'];
var iterator = valuesArr.values();
console.log(iterator.next().value); // w
console.log(iterator.next().value); // y
console.log(iterator.next().value); // k
console.log(iterator.next().value); // o
console.log(iterator.next().value); // p