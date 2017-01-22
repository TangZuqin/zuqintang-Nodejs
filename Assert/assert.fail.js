//抛出AssertionError。如果message的值不为真，则错误信息为
//actual和expected的值，并以operator分隔。否则，错误信息为
//message的值。

const assert=require('assert');

// assert.fail(1,2,undefined,'>');
//抛出AssertionError:1>2

assert.fail(1,2,'whoops','>');
//抛出AssertionError:whoops
