//assert.notDeepStrictEqual(actual,expected[,message])
//测试actual和expected参数是否不深度严格对等。与assert.deepStrictEqual()
//相反。
const assert = require('assert');


// assert.notDeepEqual({a:1},{a:'1'});
//抛出AssertionError:{a:1} notDeepEqual {a:'1'}


assert.notDeepStrictEqual({a:1},{b:'1'});
//通过
