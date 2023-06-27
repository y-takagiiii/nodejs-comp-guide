// ファイルへの書き込み
// __dirname nodeコマンドを実行したフォルダまでの絶対パス
// __filename nodeコマンドを実行したファイルまでの絶対パス

// fsモジュールの読み込み
const fs = require('fs');

// console.log(__filename);

// writeFileSync(ファイル名, 書き込むテキスト)
// 相対パスを指定するとnodeを実行したディレクトリからの相対パスになるので注意
// fs.writeFileSync('./test.txt', 'hello, node.js');

// __dirnameを使って書き換え
fs.writeFileSync(__dirname + '/test.txt', 'hello, node.js');
// console.log('hello, node.js');
