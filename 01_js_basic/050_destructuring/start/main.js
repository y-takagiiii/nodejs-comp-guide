// 通常の配列呼び出し
// const arry = ["配列1", "配列2", "配列3"];
// console.log(arry[0]);
// console.log(arry[2]);

// 分割代入
const [ a, b, c ] = ["要素1", "要素２", "要素3"];
console.log(a);
console.log(c);

// 通常のオブジェクト呼び出し
// const obj = { x: "オブジェクト1", y: "オブジェクト2", z: "オブジェクト3" };
// console.log(obj.x);
// console.log(obj.y);

// 分割代入
const { x, z } = { x: "オブジェクト1", y: "オブジェクト2", z: "オブジェクト3" };
console.log(x);
console.log(z);


const arr = ["Japan", "Tokyo", "Shinjuku"];
const objAddress = { country: "Japan", state: "Tokyo", city: "Shinjuku" };

// const fnArr = (arry) => {
//   console.log("---配列---");
//   console.log(`country: ${arry[0]}`);
//   console.log(`state: ${arry[1]}`);
//   console.log(`city: ${arry[2]}`);
// };

// 分割代入を使って書き換え
const fnArr = ([country, state, city]) => {
  console.log("---配列---");
  console.log(`country: ${country}`);
  console.log(`state: ${state}`);
  console.log(`city: ${city}`);
};


// const fnObj = (objAddr) => {
//   console.log("---オブジェクト---");
//   console.log(`country: ${objAddr.country}`);
//   console.log(`state: ${objAddr.state}`);
//   console.log(`city: ${objAddr.city}`);
// };

// オブジェクトを使って書き換え
const fnObj = ({ country, state, city}) => {
  console.log("---オブジェクト---");
  console.log(`country: ${country}`);
  console.log(`state: ${state}`);
  console.log(`city: ${city}`);
};

fnArr(arr);
fnObj(objAddress);
