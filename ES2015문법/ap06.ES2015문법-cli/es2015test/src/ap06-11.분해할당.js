/*
 (구조) 분해 할당에 대해서 알아본다.


*/

const points = [20, 30, 40];
const x1 = points[0]; //20
const y1 = points[1]; //30
const z1 = points[2]; //40
console.log(x1, y1, z1);

const [x2, y2, z2] = points;
// const [x2, y2, z2] = [20, 30, 40];
debugger;
console.log(x2, y2, z2);

// 두번째 값 무시하기
const [x3, , z3] = points;
console.log(x3, z3);

// 세번째 값 무시하기
const [x4, , z4] = points;
console.log(x4, z4);

// 네번째 값 무시하기
const [x5, , , w4] = [20, 30, 40, () => console.log('xxxx')];
console.log(x5, w4);
w5();

const car = {
    type: 't',
    color: 'S',
    model: 2021
};
//ES5
const type1 = car.type;
const color1 = car.color;
const model1 = car.model;
console.log(type1, color1, model1);
// ES15
const { type, color, model, gear } = car;
console.log(type, color, model, gear); //t S 2021 undefined

// ES2015
const { type: type2, color: color2, model: model2, gear2 } = car;
console.log(type2, color2, model2, gear2); // t, s, 2021, undefined

