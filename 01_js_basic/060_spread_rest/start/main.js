const nums = [3, 1, 4, 1, 5, 10, 2, 6];

// const result = Math.max(3, 1, 4, 1, 5, 10, 2, 6);

// スプレッド演算子
const result = Math.max(...nums);
console.log(result); // => 10


let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
// スプレッド演算子でarr1の配列が展開されてnewArrが定義される
let newArr = [...arr1]; // => (3) [1, 2, 3]
let newArr2 = [...arr1, 10, ...arr2]; // => (7) [1, 2, 3, 10, 4, 5, 6]

console.log(newArr);
console.log(newArr2);

const obj = {
  name: "Tom",
  age: 22,
};
const newObj = { ...obj };

console.log(newObj); // => { name: 'Tom', age: 22 }
newObj.name = 'John';
// スプレッド演算子を使って新たに作成したオブジェクトのプロパティを変更しても、元のオブジェクトには影響しない
console.log(newObj, obj); // => {name: 'John', age: 22} {name: 'Tom', age: 22}

// レストパラメータ、残余引数
const restA = (...argA) => console.log(argA);
// 引数1, 3, 4が配列になって出力される
restA(1, 3, 4) // => (3) [1, 3, 4]

const restB = (n, ...argB) => console.log(argB);
restB(1, 3, 4) // => [3, 4]
