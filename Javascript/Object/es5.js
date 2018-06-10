function show(x) {

  console.log(typeof x); // undefined
  console.log(typeof 10); // number
  console.log(typeof 'abc'); // string
  console.log(typeof true); // boolean

  console.log(typeof
    function () {}); //function

  console.log(typeof [1, 'a', true]); //object
  console.log(typeof {
    a: 10,
    b: 20
  }); //object
  console.log(typeof null); //object
  console.log(typeof new Number(10)); //object
}
show();

// undefined, number, string, boolean值类型
// 函数、数组、对象、null、new Number(10)都是对象, 都是引用类型
// 每个函数都有一个属性叫做prototype, prototype的属性值是一个对象
// 默认的只有一个叫做constructor的属性指向这个函数本身
// 每个对象都有一个隐藏原型__proto__, 指向创建这个对象的函数的prototype, 即：fn.__proto__ === Fn.prototype
// 对象的__proto__指向的是创建它的函数的prototype, 即：Object.__proto__ === Function.prototype

// Instanceof的判断队则是：沿着A的__proto__这条线来找，同时沿着B的prototype这条线来找，如果两条线能找到同一个引用即为true
console.log(Object instanceof Function) // true
console.log(Function instanceof Object) // true
console.log(Function instanceof Function) // true

// javascript除了全局作用域之外，只有函数可以创建的作用域
// this到底取何值，是在函数真正被调用执行的时候确定的，函数定义的时候确定不了
// this的取值是执行上下文环境的一部分，每次调用函数，都会产生一个新的执行上下文环境

// 继承最佳实践
function Plane(color) {
  this.color = color
}

Plane.prototype.fly = function () {
  console.log('flying')
}

function Fighter(color) {
  Plane.call(this, color)
  this.bullets = []
}

var protoType = Object.create(Plane.prototype)
protoType.constructor = Fighter
Fighter.prototype = protoType

Fighter.prototype.shoot = function () {
  console.log('biubiubiu')
}