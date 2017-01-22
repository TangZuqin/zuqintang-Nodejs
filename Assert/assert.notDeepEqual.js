//测试actual和expected参数是否不深度相等。与assert.deepEqual()相反。

const assert = require('assert');

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

assert.notDeepEqual(obj1,obj1);
//抛出AssertionError:{a:{b:1}} notDeepEqual {a:{b:1}}

assert.notDeepEqual(obj1,obj2);
//通过，obj1与obj2不深度相等

assert.notDeepEqual(obj1,obj3);
//抛出AssertionError:{a:{b:1}} notDeepEqual {a:{b:1}}

assert.notDeepEqual(obj1,obj4);
//通过，obj1与obj4不深度相等
