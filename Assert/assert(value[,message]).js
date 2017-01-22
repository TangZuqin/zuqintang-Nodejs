//assert.ok()的别名
//assert后跟值参数、提示消息（可选，单引号括起）
//以下为demo
const assert=require('assert');

assert(true);
//通过
assert(1);
//通过
assert(false);
//抛出"AssertionError:false==true"
assert(0);
//抛出"AssertionError:0==true"
assert(false,'it\'s false');
//抛出"AssertionError:it's false"
