//assert.ok(value[,message])
//测试value是否为真值。相当于assert.equal(!!value,true,message).
//如果value不是真值，则抛出一个带有message属性的AssertionError，
//其中message属性的值等于传入的message参数的值。如果message参数为
//undefined，则输出默认的错误信息。

const assert = require('assert');


assert.ok(true);
//通过

assert.ok(1);
//通过

assert.ok(false);
//抛出"AssertionError: false == true"

assert.ok(0);
//抛出"AssertionError: 0 == true"


assert.ok(false,'it\'s false');
//抛出"AssertionError: it's false"
