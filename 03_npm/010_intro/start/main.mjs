// lib/lodash.jsを取り込む
// import _ from "../lib/lodash.js";

// npmでlodashをインストールし、node_modulesから読み込む
import _ from "lodash";

const original = { prop: { nested: "value" } };
// オブジェクトの複製
const cloned = _.cloneDeep(original);
// 複製したオブジェクトのプロパティを変更
cloned.prop.nested = "new value";
console.log(original, cloned);

