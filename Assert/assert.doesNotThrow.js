//断言block函数不会抛出错误
//当调用assert.doesNotThrow()时，它会立即调用block函数
//如果block函数抛出错误，并且错误类型与error参数指定的相同，则抛出
//AssertionError。如果错误类型不相同，或error参数是undefined，则
//错误回传给调用者
//下面demo会抛出TypeError ，因为在断言中没有匹配的错误类型：
var assert=require("assert");
// assert.doesNotThrow(
//   ()=>{
//     throw new TypeError('Wrong value');
//   },
//   SyntaxError
// );
//下面的demo会抛出一个带有'Got unwanted exception(TypeError)..'信息的AssertError：
// assert.doesNotThrow(
//   ()=>{
//     throw new TypeError('Wrong value');
//   },
//   TypeError
// );
//如果抛出了AssertionError，并且有为message参数传值，则message的值会被追加到
//AssertionError的消息中：
assert.doesNotThrow(
  ()=>{
    throw new TypeError('Wrong value');
  },
  TypeError,
  'Whoops'
);
