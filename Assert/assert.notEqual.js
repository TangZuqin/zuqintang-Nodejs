//使用不等运算符（！=）来测试actual和expceted参数是否不相等。

const assert =require('assert');

assert.notEqual(1,2);
//通过

// assert.notEqual(1,1);
//抛出AssertionError:1 != 1

assert.notEqual(1,'1');
//抛出AssertionError: 1 != '1'
