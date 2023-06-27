const arry = [10, 20, 30, 40];
const newArry = [];

for(let i = 0; i < arry.length; i++) {
  const val = arry[i] * 2;
  if(val > 50) {
    newArry.push(arry[i] * 2);
  }
};

console.log(newArry);

// const newArry2 = arry.map(val => val * 2);

// アロー関数の処理を複数行記述する
// const newArry2 = arry.map(val => {
//   console.log(val);
//   return val * 3;
// });

// アロー関数の中に複数の引数を指定する
// const newArry2 = arry.map((val, i, arry) => {
//   console.log(i, val, arry);
//   return val * 3;
// });

const newArry2 = arry.map((val, i, arry) => {
  console.log(i, val, arry);
  return val * 3;
});
console.log(newArry2);

const newArry3 = newArry2.filter(val => val > 50);
console.log(newArry3);