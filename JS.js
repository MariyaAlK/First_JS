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

// console.log('Задание 4:');
// let a = prompt('Введи значение переменной a')
// let b = prompt('Введи значение переменной b')
// console.log('Значение а: ',a,'  Значение b: ',b);
// sum = (+a)+(+b)
// console.log('Сумма a+b>15?');
// // if (sum>15)  {
// //     console.log('Ответ: Да');
// // }
// // else{
// //     console.log('Ответ: Нет');
// // }
// let summa = sum>15 ? 'Ответ: Да':'Ответ: Нет'
// console.log(summa);
// console.log('Значение a = b?');
// // let rav = a==b ? true : false //Тернарный оператор
// // console.log(rav);
// console.log(a===b);

// console.log('Задание 5:');
// let a = 1;
// let out =  document.querySelector('.out');

// while (a < 51){
//     out.innerHTML += `${a++}; `
// }

// out.innerHTML += `<br><br>`
// for (let i=50; i>=25; i -=1){
//     out.innerHTML += `${i}; `
// }

// out.innerHTML += `<br><br>`
// // let b=2501;
// // do{
// //     out.innerHTML += `${b}; `
// //     b +=2
// // } while (b<=3000)

// for (let i=2500; i<=3000; i++ ){
//     if(i % 2 == 0){
//         continue
//     }
//     out.innerHTML += `${i}; `
// }

console.log('Задание 6:');
console.log('Задача 1:');
let a = 5;
let b = prompt('Введи значение переменной b');
console.log('Значение а = ', a);
console.log('Значение b = ', b);
console.log('Они равны?');
switch(b){
    case `${a}`: 
        console.log('Да')
        break
    case null:
    case '':
        console.log('Не сработало')
        break
    default:
        console.log('Нет')
}

console.log('Задача 2:');
let c = prompt('Введи значение от 1 до 12');
console.log('Введенное число ', c);
switch(+c){
    case 1:
    case 2:
    case 12: 
        console.log('Зима')
        break
    case 3:
    case 4:
    case 5:        
        console.log('Весна')
        break
    case 6:
    case 7:
    case 8:        
        console.log('Лето')
        break
    default:      
        console.log('Осень')
}

console.log('Задача 3:');
let var1 = null
let var2 = 3
let var3 = 'Hello'
console.log(var1 + ', ' + var2 + ', ' + var3);
console.log('Проверка с помощью оператора нулевого слияния:');
console.log(var1 ?? var2 ?? var3);
