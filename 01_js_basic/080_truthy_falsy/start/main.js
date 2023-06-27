// falsy → 真偽値に変換した際に"偽(false)"とみなされる値のこと。
// truthy → それ以外

/* falsyな値の一覧
false
0 (数字)
0n (big int)
"" (空文字)
null
undefined
NaN (Not a Number)
*/

const a = 0;
let result = a ? 10 : -10;
// console.log(result);

const falsy = 0;
const truthy = 1;
// console.log(Boolean(truthy));
// console.log(Boolean(falsy));

// 論理積 (&&) について
// falthyな値があればそれを変数に格納、なければ最後の値を格納
const resultA = "" && "foo";
const resultG = 2 && 0;
const resultB = 2 && 1 && 0 && 3;
const resultC = "foo" && 4;

console.log(resultA); // => 空文字
console.log(resultG); // => 0
console.log(resultB); // => 0
console.log(resultC); // => 4

// 理論和 (||) について
// truethyな値があればそれを変数に格納、なければ最後の値を格納
const resultD = "" || "foo";
const resultE = 0 || 2 || 0;
const resultF = "foo" || 4;

console.log(resultD); // => foo
console.log(resultE); // => 2
console.log(resultF); // => foo
