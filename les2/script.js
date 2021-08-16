//Задание 1
/*Большое значение имеет постановка знаков инкрементирования и декрементирования. В случае с префиксной постановкой, измененное значение переменной будет возвращено сразу, в случае с постфиксной постановкой, сначала будет возвращено предыдущее значение переменной.

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
Инкрементирование префикскное, следовательно переменная выводится измененной сразу.

d = b++; alert(d);           // 1
Инкрементирование постфикскное, следовательно измененная переменная будет выведена не сразу.

c = (2+ ++a); alert(c);      // 5
Здесь в связи с тем, что перфиксное инкрементирование префиксное, прошлое значение а = 2, значит настоящее значение а = 3, 2 + 3 = 5.

d = (2+ b++); alert(d);      // 4
Инкрементирование постфикскное, следовательно будет выведено измененное  значение b в строке 8, b = 2, 2 + 2 = 4.

alert(a);                    // 3
Последующих операций с а не выполнялось, следовательно значение а = 3.

alert(b);                    // 3
Опять же из-за постфиксного инкрементирования значение b = 3.*/

//Задание 2

var c = 2;
var x = 1 + (c *= 2); // x = 1 + (c * 2), значение c = 2, следовательно x = 5
alert(x);

//Задание 3 

let a = parseInt(prompt('Введите число a.'));
let b = parseInt(prompt('Введите число b.'));

if (a > 0 && b > 0) {

    let difference = a - b;
    alert('Разность чисел a и b: ' + difference);

} else if (a < 0 && b < 0) {

    let multiplication = a * b;
    alert('Прозведение чисел a и b: ' + multiplication);

} else {

    let summary = a + b;
    alert('Сумма чисел a и b: ' + summary);

}

//Задание 4

let d = parseInt(prompt('Введите число от 0 до 15'));
var arr = [];

switch (d) {

    case 0: arr.push('0');
    case 1: arr.push('1');
    case 2: arr.push('2');
    case 3: arr.push('3');
    case 4: arr.push('4');
    case 5: arr.push('5');
    case 6: arr.push('6');
    case 7: arr.push('7');
    case 8: arr.push('8');
    case 9: arr.push('9');
    case 10: arr.push('10');
    case 11: arr.push('11');
    case 12: arr.push('12');
    case 13: arr.push('13');
    case 14: arr.push('14');
    case 15: arr.push('15');
        break;
    default: alert('Введите число от 0 до 15');

}

alert('Последовательность чисел, начиная с ' + d + ': ' + arr);

//Задание 5

function summ(a, b) {

    let summ = a + b;
    alert(`Сумма чисел: ${summ}`);

}

function diff(a, b) {

    let diff = a - b;
    alert(`Разность чисел: ${diff}`);

}

function mult(a, b) {

    let mult = a * b;
    alert(`Произведение чисел: ${mult}`);

}

function division(a, b) {

    let divis = a / b;
    alert(`Частное чисел: ${divis}`);

}

//Задание 6

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сумма':
            summ(arg1, arg2);
            break;

        case 'вычитание':
            diff(arg1, arg2);
            break;

        case 'частное':
            division(arg1, arg2);
            break;

        case 'произведение':
            mult(arg1, arg2);
            break;

        default:
            alert('Попробуйте заново');
            break;
    }

}

mathOperation(
    parseFloat(prompt('Введите первое число')),
    parseFloat(prompt('Введите второе число')),
    prompt('Введите название математической операции: Сумма, Вычитание, Произведение, Частное')
);

//Задание 8

function power(val, pow) {

    if (val == 1 || pow == 0) {

        return 1;

    } else if (pow == 1) {

        return val;

    } else {

        return val * power(val, pow - 1);

    }



}

alert(power(2, 2));
