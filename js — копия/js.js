document.addEventListener("DOMContentLoaded", function() {
//Задача 1: Проверка возраста
let age = prompt('Введите свой возраст', '');
if (age < 65) {
  alert( 'Вам ещё рано на пенсию' );
}
else {
  alert( 'Поздравляем с пенсионным возрастом!' );
}


//Задача 2: Сравнение чисел
let firstN = prompt('Введите первое число', '');
let secondN = prompt('Введите второе число', '');
if (firstN > secondN) {
  alert( 'Первое число больше' );
}
else if (firstN < secondN) { 
    alert( 'Второе число больше' );
}
else if(firstN = secondN){
  alert( 'Числа равны' );
}

//Задача 3: Определение чётности
let num = prompt('Введите число', '');
if (num % 2 === 0) {
    alert( 'Число чётное' );
}
else if (num % 2 !== 0){
    alert( 'Число нечётное' );
} 

//Задача 4: Угадай число
const secretNumber = 9;
let secret = prompt('Угадай число', '');
if (secretNumber == secret) {
    alert( 'Вы угадали!' );
}
else {
    alert( 'Попробуйте ещё раз!' );
}

//Задача 5: Проверка логина и пароля
const loginconst = "admin"
let login = prompt('Введите логин', '');

const passwordconst = 12345
let password = prompt('Введите пароль', '');

if (loginconst == login & passwordconst == password) {
    alert( 'Добро пожаловать!' );
}
else {
    alert( 'Неверный логин или пароль' );
}


//Задача 6: Проверка года
let year = prompt('Введите год', '');
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    alert( 'Это високосный год' );
}

else {
    alert( 'Это не високосный год' );
}

//Задача 7: Простое сравнение
let number = prompt('Введите число', '');
if (number > 100) {
  alert( 'Большое число' );
}
else if (number < 100) { 
    alert( 'Маленькое число' );
}
else if(number = 100){
  alert( 'Точно 100!' );
}
})
