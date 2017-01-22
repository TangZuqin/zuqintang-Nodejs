//assert.notStrictEqual(actual,expected[,message])
//使用严格不等运算符（！==）来测试actual和expected参数是否不严格相等。

const assert =require('assert');


assert.notStrictEqual(1,2);
//通过

assert.notStrictEqual(1,1);
//抛出AssertionError: 1 !== 1

assert.notStrictEqual(1,'1');
//通过
