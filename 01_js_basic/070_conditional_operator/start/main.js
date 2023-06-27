// 三項演算子（ ? : ）

const a = true;
// let resultA;

// if(a) {
//   resultA = "true";
// } else {
//   resultA = "false";
// }

// 三項演算子で書き換え
let resultA = a ? "true" : "false";
console.log(resultA);

function getResult() {
  return a ? "true" : "false";
}

console.log(getResult());
