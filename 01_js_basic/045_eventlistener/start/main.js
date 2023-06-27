// h1タグを取得する
const h1Element = document.querySelector('h1');
// console.dirでオブジェクトのプロパティが表示される
console.dir(h1Element);
console.log(h1Element.textContent);
h1Element.textContent = '変更後のタイトル';

const btnEL = document.querySelector('button');
// アロー関数の引数にはe、ev、eventなどの引数を渡せる
// イベントに伴う情報を取得したいときに引数を渡す
// btnEL.addEventListener('click', (e) => {
//   console.dir(e.target.textContent);
//   console.log('hello');
// });

// 第二引数に定義した関数を渡す
const helloFn = e => {
  console.log(e.target.textContent);
  console.log('hello');
};

btnEL.addEventListener('click', helloFn);