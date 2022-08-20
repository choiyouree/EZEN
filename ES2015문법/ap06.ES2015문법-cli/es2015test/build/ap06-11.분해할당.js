"use strict";

/*
 (구조) 분해 할당에 대해서 알아본다.


*/
var points = [20, 30, 40];
var x1 = points[0]; //20

var y1 = points[1]; //30

var z1 = points[2]; //40

console.log(x1, y1, z1);
var x2 = points[0],
    y2 = points[1],
    z2 = points[2]; // const [x2, y2, z2] = [20, 30, 40];

debugger;
console.log(x2, y2, z2); // 두번째 값 무시하기

var x3 = points[0],
    z3 = points[2];
console.log(x3, z3); // 세번째 값 무시하기

var x4 = points[0],
    z4 = points[2];
console.log(x4, z4); // 네번째 값 무시하기

var _ref = [20, 30, 40, function () {
  return console.log('xxxx');
}],
    x5 = _ref[0],
    w4 = _ref[3];
console.log(x5, w4);
w5();
var car = {
  type: 't',
  color: 'S',
  model: 2021
}; //ES5

var type1 = car.type;
var color1 = car.color;
var model1 = car.model;
console.log(type1, color1, model1); // ES15

var type = car.type,
    color = car.color,
    model = car.model,
    gear = car.gear;
console.log(type, color, model, gear); //t S 2021 undefined
// ES2015

var type2 = car.type,
    color2 = car.color,
    model2 = car.model,
    gear2 = car.gear2;
console.log(type2, color2, model2, gear2); // t, s, 2021, undefined