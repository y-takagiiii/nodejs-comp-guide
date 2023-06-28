// lib/lodash.jsを取り込む
// import _ from "../lib/lodash.js";

// npm install lodashを実行後
// パスの指定がない場合にはnode_moduleから一致するフォルダ名を探して読み込む
import _ from "lodash";

// cloneDeepだけを読み込む場合
// import cloneDeep from "lodash/cloneDeep.js";
// CJSで動かすと.jsを省略できる
// const cloneDeep = require("lodash/cloneDeep");

const original = { prop: { nested: "value" } };
// オブジェクトの複製
const cloned = _.cloneDeep(original);
// cloneDeepだけを読み込んだ場合
// const cloned = cloneDeep(original);
// 複製したオブジェクトのプロパティを変更
cloned.prop.nested = "new value";
console.log(original, cloned);

