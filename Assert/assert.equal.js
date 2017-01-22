//使用相等运算符（==）来测试actual和expected参数是否相等。
const assert=require('assert');

assert.equal(1,1);
//通过

assert.equal(1,'1');
//通过

//assert.equal(1,2);
//抛出AssertionError:1==2
assert.equal({a:{b:1}},{a:{b:1}});
//抛出AssertionError:{a:{b:1}}=={a:{b:1}}
