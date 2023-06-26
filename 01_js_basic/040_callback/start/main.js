// コールバック関数 引数に渡された関数のこと
function print(callback) {
  // const result = callback();
  const result = callback(2); // 引数を渡してあげる
  console.log(result);
}

function fn(number) {
    return number * 2;
  }

// print(fn); // => 引数がない(undefined * 2 === NaN)
print(fn); // => 4