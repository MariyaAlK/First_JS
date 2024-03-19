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

// console.log('Задание 11:');
// // Задание 1
// let a = new Set('e')
// a.add('r')
// a.add('i')
// a.add('k')
// a.add('t')
// a.add('h')
// a.add('e')
// a.add('b')
// a.add('e')
// a.add('s')
// a.add('t')
// console.log(a);
// // Задание 2
// let out = document.querySelector('.out')
// let btn = document.querySelector('.btn')
// let inp = document.querySelector('.text')
// out.innerHTML = 'Добавление значения в Set'
// btn.onclick = function() {
//     a.add(inp.value)
//     console.log(a)
//     inp.value = ''
// }
// // Задание 3
// let out2 = document.querySelector('.out2')
// let out3 = document.querySelector('.out3')
// let btn2 = document.querySelector('.btn2')
// let inp2 = document.querySelector('.text2')
// out2.innerHTML = 'Проверка значения в Set'
// btn2.onclick = function() {
//     out3.innerHTML = a.has(inp2.value)
//     inp2.value = ''
// }
// // Задание 4
// let out4 = document.querySelector('.out4')
// let btn3 = document.querySelector('.btn3')
// out3.innerHTML += `<br>`
// let b = [14,2,456,3,2,6,78,56,1,0,9,5]
// btn3.onclick = function(){
//     let c =[]
//     for(let i of b){
//         if (i>5){
//             c.push(i)
//         }
//     }
//     out4.innerHTML = `Был массив b = [${b}]<br> Стал массив, где все значения больше 5, c = [${c}]`
// }

// console.log('Задание 12:');
// примеры из лекции
// СОБЫТИЯ МЫШИ
// пример 1. один клик мыши
// document.querySelector('.one').onclick = function(event) {
//     console.log(event);
//     console.log('Это блок 1');
// }
// document.querySelector('.two').onclick = function() {
//     console.log('Это блок 2');
// }
// пример 2. двойной клик мыши
// document.querySelector('.two').ondblclick = function() {
//     console.log('Это блок 2');
// }
// пример 3. событие срабатывает при нажатии правой кнопки мыши
// document.querySelector('.two').oncontextmenu = function() {
//     console.log('Это блок 2');
//     return false // исчезает контекстное меню при нажатии правой кнопки мыши
// }
// // пример 4. событие срабатывает, когда мы двигаем мышью внутри нашего блока
// document.querySelector('.three').onmousemove = function(){
//     console.log('Ты внутри 3 блока');
// }
// пример 5
// let width = 100
// document.querySelector('.three').onmousemove = function(){
//     document.querySelector('.three').style.width = width+'px'
//     width++
//     console.log('Ты внутри 3 блока');
// }
// пример 6 событие срабатывает при наведении и событие срабатывает при выходе из блока
// document.querySelector('.three').onmouseenter = function(){
//     document.querySelector('.three').style.background = 'pink'
// }
// document.querySelector('.three').onmouseleave = function(){
//     document.querySelector('.three').style.background = '#fff'
// }
// // срабатывает по нажатию
// document.querySelector('.three').onmousedown = function(){
//     document.querySelector('.three').style.background = 'red'
// }
// // срабатывает когда мы отпустили кнопку мыши
// document.querySelector('.three').onmouseup = function(){
//     document.querySelector('.three').style.background = 'green'
// }
//СОБЫТИЯ КЛАВИАТУРЫ
// пример 1. событие изменения инпута
// document.querySelector('.inp1').oninput = function(e){
//     console.log(e);
// }
// пример 2. при нажатии любой клавиши происходит событие
// document.querySelector('.inp1').onkeypress = function(e){
//     console.log(e);
//     console.log(e.charCode);
// }
// пример 3 срабатывает, когда клавиша нажата
// document.querySelector('.inp1').onkeydown = function(e){
//     console.log(e);
// }
// пример 4 срабатывает, когда отпускаешь клавишу
// document.querySelector('.inp1').onkeyup = function(e){
//     console.log(e);
// }

// // Задание 1
// // let width = 300
// // let height = 40
// // document.querySelector('.one').onclick = function(){
// //     width +=15
// //     height +=15
// //     document.querySelector('.one').style.width = `${width}px`
// //     document.querySelector('.one').style.height = `${height}px`
// // }

// // Получаем элемент, чтобы измерить его начальные стили
// let element = document.querySelector('.one');
// // Получаем стили, примененные к элементу
// let computedStyle = getComputedStyle(element);
// // Извлекаем необходимые значения
// let width = parseInt(computedStyle.width, 10); // parseInt преобразует строковое значение в число и удаляет 'px'
// let height = parseInt(computedStyle.height, 10);
// document.querySelector('.one').onclick = function(){
//     width += 15;
//     height += 15;
//     this.style.width = `${width}px`;
//     this.style.height = `${height}px`;
// }

// // Задание 2
// document.querySelector('.two').ondblclick = function(){
//     console.log(document.querySelector('.two').innerHTML);
// }
// // Задание 3
// document.querySelector('.paint').onclick = function(){
//     document.querySelector('.paint').src = 'images/2.jpg' 
// }
// // Задание 4, 5
// let out = document.querySelector('.three')
// let inp = document.querySelector('.inp')
// inp.onkeyup = function(e){
//     out.innerHTML = `keyCode ${inp.value}: ${e.keyCode}`
//     if ((+inp.value >= 0) & (inp.value != '')) {
//         out.innerHTML += `<br>${false}`
//     }
//     inp.value = ''
// }

// console.log('Задание 13:');
// console.log('Пример 1');
// // пример 1
// localStorage.setItem('data',5)
// console.log(localStorage.getItem('data'));

// // пример 2
// console.log('Пример 2');
// let c=[1,2,3]
// localStorage.setItem('Dataa',c) //записывает не как массив, а набор каких то данных
// let d = localStorage.getItem('Dataa')
// console.log(d[1]);
// console.log(typeof d);

// //пример 3
// console.log('Пример 3');
// let a=[1,2,3]
// localStorage.setItem('Data', JSON.stringify(a)) //записывает как массив
// let b = localStorage.getItem('Data') // у b тип данных стринг
// b = JSON.parse(b) // делает b типом как у а, теперь b имеет тип обджект
// console.log(b[1]);
// console.log(typeof b);

// //пример 4. Работа с запросом
// console.log('Пример 4');
// let xttp = new XMLHttpRequest();
// xttp.onreadystatechange = function(){
//     if(this.readyState == 4 && this.status == 200){
//         myfunc(this.responseText)
//     }
// }

// xttp.open('GET','https://automarine25.ru/',true)
// xttp.send()

// function myfunc(data){
//     console.log(data);
// }

console.log('Задание 14:');
// пример 1
// let xttp = new XMLHttpRequest()
// xttp.onreadystatechange = function(){
//     if(this.readyState == 4 && this.status == 200){
//         myfunc(this.responseText)
//     }
// }

// xttp.open('GET','https://automarine25.ru/')
// xttp.send()

// function myfunc(data){
//     console.log(data);
// }

// пример 2
// fetch('https://automarine25.ru/')
// .then(data=>{
//     console.log(data);
// })

// пример 3
// fetch('http://127.0.0.1:5500/index2.html')
// .then(data=>{
//     console.log(data);
// })

// пример 4
// fetch('http://127.0.0.1:5500/index2.html')
// .then(data=>{
//     console.log(data);
//     data.text().then(data2 =>{
//         console.log(data2);
//     })
// })

// пример 5
// fetch('https://automarine25.ru/')
// .then(data=>{
//     console.log(data);
//     data.text().then(data2 =>{
//         console.log(data2);
//     })
// })

// пример 6. то же самое, что и в примерах 4,5, только длиннее запись
// fetch('http://127.0.0.1:5500/index2.html')
// .then(data=>{
//     console.log(data);
//     return data.text()
// })
// .then(data=>{
//     console.log(data);
// })

// пример 7. то же самое, что и в примерах 4,5,6, только другая запись
// fetch('http://127.0.0.1:5500/index2.html')
// .then(data=>data.text())
// .then(data=>{
//     console.log(data);
// })

// пример 8. переписываем примеры выше через промиз
let a = new Promise((resolve, reject) =>{ //resolve в случае удачной обработки промиз, а reject в случае неудачной
    fetch('http://127.0.0.1:5500/index2.html')
    .then(data =>{
        resolve(data.text())
    })
})

a.then(data =>{
    console.log(data);
})
// resolve когда мы получили результат как задумали
// reject когда сервер вернул запрос не так как необходимо
// Для того, чтобы урегулировать порядок вывода промизов, используем следующее:
// Promise.all([b,a]).then(data=>{
//     console.log(data);
// }) //Выведи все промизы, сначала b, потом а