'use strict';

function getNumberObject(n) {

    if (n >= 100 && n <= 999) {
        let num = n.split('');

        let result = {
            hundreds: num[0],
            tens: num[1],
            ones: num[2],
        }

        console.log(result);
    } else if (n >= 0 && n < 10) {
        let num = n.split('');

        let result = {
            ones: num[0],
        }

        console.log(result);
    } else if (n >= 10 && n < 100) {
        let num = n.split('');

        let result = {
            tens: num[0],
            ones: num[1],
        }
        console.log(result);
    } else if (n > 999) {
        let result = {};
        console.log('Вы ввели число больше 999')
        console.log(result);
    } else {
        alert('Введите число от 0 до 999');
        getNumberObject(prompt('Введите число'));
    }
}


getNumberObject(prompt('Введите число  от 0 до 999'));

//Задание 2

let basketGoods = [
    { name: 'Яблоко', priceOfProduct: 34, countOfProduct: 3 },
    { name: 'Банан', priceOfProduct: 44, countOfProduct: 2 }
]


function countBasketPrice(basket) {

    let finalPrice = 0;

    basket.forEach((item) => {

        finalPrice += (item.priceOfProduct * item.countOfProduct);

    });
    return finalPrice
}

console.log(countBasketPrice(basketGoods));