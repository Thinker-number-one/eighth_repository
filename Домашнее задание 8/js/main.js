// Задание от преподавателя (кнопка, которая меняет тему)

let btn1 = document.querySelector('.btn777');
let bod1 = document.querySelector('body');

btn1.onclick = function() {
    bod1.classList.toggle('elem');
}

// Задание первое

let btn2 = document.querySelector('.button1');
let bod2 = document.querySelector('.element');

btn2.onclick = function() {
    bod2.classList.toggle('element');
}

// Задание второе

let btn3 = document.querySelector('.button2');
let bod31 = document.querySelector('.dopElement1');
let bod32 = document.querySelector('.dopElement2');
let bod33 = document.querySelector('.dopElement3');


btn3.onclick = function() {
    bod31.classList.toggle('dopElement1');
    bod32.classList.toggle('dopElement2');
    bod33.classList.toggle('dopElement3');
}

// Задание третье

let btn4 = document.querySelector('.button3');
let bod42 = document.querySelector('.dopElement2');

btn4.onclick = function() {
    bod42.classList.toggle('dopElement2');
}