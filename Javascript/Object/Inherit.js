// 继承
function Person(name) {
    this.name = name;
}
Person.prototype.sayHello = function() {
    console.log('Hi! My name is ' + this.name + '.');
}

/**
 * TODOS: 改写 Student 类，接收 name 和 grade 属性，并且继承 Person。
 * 注意使用下面 inheritPrototype 函数实现继承原型
*/
function Student(name,grade) {
    Person.call(this,name);
    this.grade = grade;
}
inheritPrototype(Student,Person);
Student.prototype.sayGrade = function() {
    console.log('I am Grade ' + this.grade + '.');
}

// TODOS 完成继承原型的函数
function inheritPrototype(subType, superType){
    var protoType = Object.create(superType.prototype);
    protoType.constructor = subType;
    subType.prototype = protoType;
}