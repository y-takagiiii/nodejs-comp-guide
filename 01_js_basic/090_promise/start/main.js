let a = 0;
console.log(a);

new Promise((resolve, reject) => {
  setTimeout(() => {
    a = 1;
    resolve(a); // thenの中の処理が行われる
    // reject(a) catchの中の処理が行われる
  }, 2000);
}).then((b) => {
  console.log(b);
}).catch((c) => {
  console.log('catchが実行', c);
});