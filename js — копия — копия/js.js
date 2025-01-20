document.addEventListener("DOMContentLoaded", function() {
    let a = 0;
    console.log( Boolean(a) ); // false
    
    let b = "0";
    console.log( Boolean(b) ); // true, тк строка это уже что-то
    
    console.log(a == b); // true!
    
    let p = "";
    console.log( Boolean(p) );// false

    console.log( 0 == false ); // true
    console.log( 0 === false ); // false, так как при строгом сравниваются типы данных, а здесь разные типы 

    console.log( null === undefined ); // false
    console.log( null == undefined ); // true
//При использовании математических операторов и других операторов сравнения < > <= >= Значения null/undefined преобразуются к числам: null становится 0, а undefined – NaN.
console.log( null > 0 );  // (1) false
console.log( null == 0 ); // (2) false
console.log( null >= 0 ); // (3) true
//С другой стороны, для нестрогого равенства == значений undefined и null действует особое правило: эти значения ни к чему не приводятся, они равны друг другу и не равны ничему другому. Поэтому (2) null == 0 ложно


console.log( undefined > 0 ); // false (1)
console.log( undefined < 0 ); // false (2)
console.log( undefined == 0 ); // false (3)

// let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');
// if (year == 2015) alert( 'Вы правы!' );

// let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

// if (year < 2015) {
//   alert( 'Это слишком рано...' );
// }
// else if (year > 2015) {
//   alert( 'Это поздновато' );
// }
// else {
//   alert( 'Верно!' );
// }
// alert( true || true );   // true
// alert( false || true );  // true
// alert( true || false );  // true
// alert( false || false ); // false




//Задача 1: Проверка возраста
// let age = prompt('Введите свой возраст', '');
// if (age < 65) {
//   alert( 'Вам ещё рано на пенсию' );
// }
// else {
//   alert( 'Поздравляем с пенсионным возрастом!' );
// }


//Задача 2: Сравнение чисел
// let firstN = prompt('Введите первое число', '');
// let secondN = prompt('Введите второе число', '');
// if (firstN > secondN) {
//   alert( 'Первое число больше' );
// }
// else if (firstN < secondN) { 
//     alert( 'Второе число больше' );
// }
// else if(firstN = secondN){
//   alert( 'Числа равны' );
// }

//Задача 3: Определение чётности
// let num = prompt('Введите число', '');
// if (num % 2 === 0) {
//     alert( 'Число чётное' );
// }
// else if (num % 2 !== 0){
//     alert( 'Число нечётное' );
// } 

//Задача 4: Угадай число
// const secretNumber = 9;
// let secret = prompt('Угадай число', '');
// if (secretNumber == secret) {
//     alert( 'Вы угадали!' );
// }
// else {
//     alert( 'Попробуйте ещё раз!' );
// }

//Задача 5: Проверка логина и пароля
// const loginconst = "admin"
// let login = prompt('Введите логин', '');

// const passwordconst = 12345
// let password = prompt('Введите пароль', '');

// if (loginconst == login & passwordconst == password) {
//     alert( 'Добро пожаловать!' );
// }
// else {
//     alert( 'Неверный логин или пароль' );
// }


//Задача 6: Проверка года
// let year = prompt('Введите год', '');
// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     alert( 'Это високосный год' );
// }

// else {
//     alert( 'Это не високосный год' );
// }

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
