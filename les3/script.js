'use strict'
let i = 1;
let arr = [];

label:
while (i < 100) {
    i++
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {

            continue label;
        }
    }

    arr.push(i);

}

alert(arr)

//Задание 2

let basketGoods = [
    ['Яблоко', 20, 2],
    ['Бананы', 45, 3],
]

function countBasketPrice(basketGoods) {
    let finalPrice = 0;
    basketGoods.forEach((basketItem) => {
        finalPrice += basketItem[1] * basketItem[2]
    });

    return finalPrice;

}

alert(countBasketPrice(basketGoods));

//Задание 3

let a = 0

for (a = 0; a <= 9; alert(a), a++) {

}

//Задание 4

function pyramid(b) {

    for (let i = 0; i <= b; i++) {
        console.log('x'.repeat(i));
    }

}

pyramid(20)