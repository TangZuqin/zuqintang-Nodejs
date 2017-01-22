//测试actual和expected参数是否深度对等。
//原始值会使用相等运算符(==)进行比较。
//只比较可枚举的自身属性。deepEqual()不测试对象的原型
//、连接符或不可枚举的属性。这会引起一些潜在的意料之外的
//结果。例如，下面的demo就不会抛出AssertionError。
//assert.deepEqual(Error('a'),Error('b'));
//分析：Error是一个对象，a与b分别代表Error对象的属性的不同值，
//而Error对象的属性值是不可枚举的
//所以不会抛出AssertionError
//换句话说，就是值范围不确定的属性，是不能用deepEqual进行断言的

//深度相等意味着子对象的可枚举类型的自身属性也会被比较
//下面是个demo
const assert=require('assert');

const obj1={
  a:{
    b:1
  }
};
const obj2={
  a:{
    b:2
  }
};
const obj3={
  a:{
    b:1
  }
};
const obj4=Object.create(obj1);
//针对上面的demo，判断下面语句结果，并说明原因
assert.deepEqual(obj1,obj1);
//首先分析obj1是个对象，a是个它的子对象，b是a的属性，值为1。
//obj1与obj1互不为对方的原型，而且不是连接符。并且a对象的属性b是枚举属性
//故此断言通过
assert.deepEqual(obj1,obj2);
//由于obj2中子对象a的属性b的值与obj1的不一样，
//故此断言抛出AssertionError:{a:{b:2}}deepEqual{a:{b:1}}
//此时会抛出一个带message属性的AssertionError，其中message属性的值等于传入
//的message参数的值。如果message参数为undefined,则输出默认的错误信息，即：
//{a:{b:2}}deepEqual{a:{b:1}}

assert.deepEqual(obj1,obj3);
//此断言通过
assert.deepEqual(obj1,obj4);
//obj1是obj4的原型，故此断言抛出AssertionError:{a:{b:1}}deepEqual{}
//其中原型会被忽略
