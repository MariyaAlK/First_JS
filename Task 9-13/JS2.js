console.log('Задание 9:');
const btn = document.querySelector('.btn')
const out = document.querySelector('.out')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')

// Задание 1
let a = [1, 2, 3, 'a', 'b', 'c', 4, 5, 6, 7, 'e', 'f', 'g']

btn.onclick = function(){
    out.innerHTML += `<br>Массив 1: [${a}]<br>`
    out.innerHTML += `Пятый элемент массива: ${a[4]}<br>`
}

// Задание 2 и 3
let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let c = []

btn2.onclick = function(){
    out.innerHTML += `<br>Массив 2: [${b}]<br>`
    out.innerHTML += 'Четные числа: '
    for (let i=0; i<b.length; i++){
        if (b[i] % 2 == 0){
            out.innerHTML += `${b[i]}, `
        }
        else{
            c.push(b[i])
        }
    }
    out.innerHTML += `<br>Нечетные числа: ${c}<br>`
}

// Задание 4
let d = [
    [55, 8, 4],
    ['a', true, false, 19],
    ['j',5]
]

btn3.onclick = function(){
    out.innerHTML += `<br>Массив 3 (двумерный): [[${d[0]}], [${d[1]}], [${d[2]}]]`
    for (let i=0; i<d.length; i++){
        out.innerHTML += `<br>Массив 3.${i+1} в обратном порядке: `
        for (let j=(d[i].length-1); j>=0; j--){
            out.innerHTML += `${d[i][j]}, `
        }
    }
    out.innerHTML += `<br>`
}