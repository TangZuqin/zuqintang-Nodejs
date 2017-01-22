//大多数情况下等同于assert.deepEqual()，但有两个例外。
//首先，原始值使用严格相等运算符（===）进行比较。
//其次，对象对比包括严格比较他们的原型。
const assert=require('assert');

assert.deepEqual({a:1},{a:'1'});

assert.deepStrictEqual({a:1},{a:'1'});

//如果两个值不想等，则抛出一个带有message属性的AssertionError，其中
//message属性的值等于传入的message参数的值。如果message参数为
//undefined，则输出默认的错误信息。
