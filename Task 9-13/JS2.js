// console.log('Задание 9:');
// const btn = document.querySelector('.btn')
// const out = document.querySelector('.out')
// const btn2 = document.querySelector('.btn2')
// const btn3 = document.querySelector('.btn3')

// // Задание 1
// let a = [1, 2, 3, 'a', 'b', 'c', 4, 5, 6, 7, 'e', 'f', 'g']

// btn.onclick = function(){
//     out.innerHTML += `<br>Массив 1: [${a}]<br>`
//     out.innerHTML += `Пятый элемент массива: ${a[4]}<br>`
// }

// // Задание 2 и 3
// let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let c = []

// btn2.onclick = function(){
//     out.innerHTML += `<br>Массив 2: [${b}]<br>`
//     out.innerHTML += 'Четные числа: '
//     for (let i=0; i<b.length; i++){
//         if (b[i] % 2 == 0){
//             out.innerHTML += `${b[i]}, `
//         }
//         else{
//             c.push(b[i])
//         }
//     }
//     out.innerHTML += `<br>Нечетные числа: ${c}<br>`
// }

// // Задание 4
// let d = [
//     [55, 8, 4],
//     ['a', true, false, 19],
//     ['j',5]
// ]

// btn3.onclick = function(){
//     out.innerHTML += `<br>Массив 3 (двумерный): [[${d[0]}], [${d[1]}], [${d[2]}]]`
//     for (let i=0; i<d.length; i++){
//         out.innerHTML += `<br>Массив 3.${i+1} в обратном порядке: `
//         for (let j=(d[i].length-1); j>=0; j--){
//             out.innerHTML += `${d[i][j]}, `
//         }
//     }
//     out.innerHTML += `<br>`
// }

// console.log('Задание 10:');
// let out = document.querySelector('.out')

// // fetch('https://api.openweathermap.org/data/2.5/weather?lat=53.2001&lon=50.15&appid=695dcd6fb847bb04ff917ef2042c1538')
// // .then(function(resp) {return resp.json()}) // Обрабатывает феч запрос и возвращает ответ в формате джейсон
// // .then(function(data){
// //     console.log(data);
// //     out.innerHTML += `<h1>${data.name}</h1>`
// //     out.innerHTML += `<h2>${data.main.temp - 274.5}</h2>`
// // }) // Обрабатывает теперь ответ

// for (let i=1; i<=3; i++){
//     fetch('https://randomuser.me/api')
//     .then(function(resp) {return resp.json()})
//     .then(function(data){
//         console.log(data);
//         out.innerHTML += `<img src = ${data.results[0].picture.medium}>`
//         out.innerHTML += `<h1>Имя: ${data.results[0].name.first}</h1>`
//         out.innerHTML += `<h1>Фамилия: ${data.results[0].name.last}</h1>`
//         out.innerHTML += `<h3>Возраст: ${data.results[0].registered.age}</h3>`
//         out.innerHTML += `<h3>Почта: ${data.results[0].email}</h3>`
//         out.innerHTML += `<h3>Номер: ${data.results[0].phone}</h3>`
//     })
// }

console.log('Задание 11:');
// Задание 1
let a = new Set('e')
a.add('r')
a.add('i')
a.add('k')
a.add('t')
a.add('h')
a.add('e')
a.add('b')
a.add('e')
a.add('s')
a.add('t')
console.log(a);
// Задание 2
let out = document.querySelector('.out')
let btn = document.querySelector('.btn')
let inp = document.querySelector('.text')
out.innerHTML = 'Добавление значения в Set'
btn.onclick = function() {
    a.add(inp.value)
    console.log(a)
    inp.value = ''
}
// Задание 3
let out2 = document.querySelector('.out2')
let out3 = document.querySelector('.out3')
let btn2 = document.querySelector('.btn2')
let inp2 = document.querySelector('.text2')
out2.innerHTML = 'Проверка значения в Set'
btn2.onclick = function() {
    out3.innerHTML = a.has(inp2.value)
    inp2.value = ''
}
// Задание 4
let out4 = document.querySelector('.out4')
let btn3 = document.querySelector('.btn3')
out3.innerHTML += `<br>`
let b = [14,2,456,3,2,6,78,56,1,0,9,5]
btn3.onclick = function(){
    let c =[]
    for(let i of b){
        if (i>5){
            c.push(i)
        }
    }
    out4.innerHTML = `Был массив b = [${b}]<br> Стал массив, где все значения больше 5, c = [${c}]`
}