// MSMではrequire,exports or module.exportsは使えない
// console.log(require); // => ReferenceError: require is not defined in ES module scope, you can use import instead

// __filename,__dirnameも使えない。その代わりにfileURLToPath(import.meta.url)、dirnameを使う

// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const __dirname2 = fileURLToPath(new URL('.', import.meta.url));

// console.log(import.meta.url);
// console.log(__filename);
// console.log(__dirname);
// console.log(new URL('.', import.meta.url));
// console.log(__dirname2);

// requireでJSONが読み込めない
// 代わりにcreateRequireもしくはassertオプションを付ける
import { createRequire } from 'module';
// // createRequireを使ってrequire関数を作成
const require = createRequire(import.meta.url);
const jsonObj = require('./sample.json');
console.log(jsonObj);

// 実験段階(node19以降)だが、下記のような方法もある
// import jsonObj form './sample.json' assert { type: 'json' };
// console.log(jsonObj);
