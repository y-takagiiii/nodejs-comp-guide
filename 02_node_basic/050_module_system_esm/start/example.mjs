
// const { plus } = require('./calc');
import minusFn, * as calc from './calc.mjs';

// console.log(calc); // => { default: [Function: minus], plus: [Function: plus] }

const result = minusFn(1, 2);
console.log(result);
