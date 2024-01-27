// console.log('Задание 2:');
// console.log( 'Добро '+'пожаловать '+'на курс' + ', Мария!' );
// console.log('Номер месяца, в котором вы родились: ' + 6);
// // alert('11.01.2024');
// console.log('------------');
// console.log('Типы данных: ');
// let a = 15;
// console.log(typeof a, '- ' + a);
// console.log('String - ' + 'слово');
// console.log('Undefined - ', b);
// var b;
// console.log('NaN - ', 10/'c');
// const d = 9.8;
// console.log('Const - ' + d);
// console.log('Infinity - ', 1/0);
// let e = 5879859403984869030496n;
// console.log('Bigint - ' + e);
// console.log('Boolean - ', 10>8, ' или ', 7<1);
// let n = null;
// console.log('Null - ', n);
// document.getElementById('one').innerHTML = 'Hello World!'
// console.log('------------');

// console.log('Задание 3:');
// document.querySelector('#one').innerHTML = 'Введите число'
// let inp = document.querySelector('.text')
// let btn = document.querySelector('.check')
// let prnt = document.querySelector('.out')
// let n = 0
// btn.onclick = function(){
//     n += 1;
//     let e = +inp.value // let e = +inp.value - Плюс переводит в число
//     console.log(`Вы кликнули по кнопке ${n}-й раз`);
//     if(e>100){
//         prnt.innerHTML += `${e}<br>`
//     }
//     else{
//         console.log(e);
//     }
//     inp.value = ''
// }

// let myhappy = prompt('когда др') //Вызывает модальное окно для ввода

console.log('Задание 4:');
let a = prompt('Введи значение переменной a')
let b = prompt('Введи значение переменной b')
console.log('Значение а: ',a,'  Значение b: ',b);
sum = (+a)+(+b)
console.log('Сумма a+b>15?');
// if (sum>15)  {
//     console.log('Ответ: Да');
// }
// else{
//     console.log('Ответ: Нет');
// }
let summa = sum>15 ? 'Ответ: Да':'Ответ: Нет'
console.log(summa);
console.log('Значение a = b?');
// let rav = a==b ? true : false //Тернарный оператор
// console.log(rav);
console.log(a===b);