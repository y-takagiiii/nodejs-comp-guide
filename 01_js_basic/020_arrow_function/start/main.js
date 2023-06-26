function fn(number) {
  return number * 2;
}

console.log(fn(2));

// 無名関数を使った関数式による関数宣言
// const fn = function fn(number) {
//   return number * 2;
// }

// アロー関数で書き換え
// 上２角関数を使うより簡単に書ける
// const fnArrow = (number) => {
//   return number * 2;
// }

// 引数が１つの場合は()を省略できる
// const fnArrow = number => {
//   return number * 2;
// }

// 処理が1行の場合は{}とreturnを省略できる
const fnArrow = number => number * 2;

console.log(fnArrow(2));

// オブジェクトを戻り値として返す場合
// resultオブジェクトにnumber * 2を格納
const fnArrowObj = number => ({ result: number * 2 });

console.log(fnArrowObj(2));
