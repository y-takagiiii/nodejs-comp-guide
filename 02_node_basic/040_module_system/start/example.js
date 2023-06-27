// exportされたモジュールオブジェクトを受け取る
// const calc = require('./calc');

// 分割代入でplusだけ受け取る
const { plus } = require('./calc');
const result = plus(1, 2);

// const result = calc.plus(1, 2);
console.log(result);
