"use strict";
const a = 5;
const b = 4;
const c = "8";
const d = "cat";
const multiply = (num1, num2) => {
    console.log(`${num1} * ${num2} =`, num1 * num2);
};
const add = (num1, num2) => {
    console.log(`${num1} + ${num2} =`, num1 + num2);
};
multiply(a, b);
multiply(a, c);
multiply(b, c);



add(a, b);
add(c, d);
add(a, d);
