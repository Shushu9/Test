/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', '');
// const b = prompt('На сколько оцените его?', '');
// const c= prompt('Один из последних просмотренных фильмов?', '');
// const d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);


// if (4 == 9) {
//     console.log('OK!');
// } else {
//     console.log('error!');
// }




// if (num < 49) {
//     console.log('small');
// } else if(num > 100) {
//     console.log('high');
// } else {
//     console.log('nice one');
// }

// (num === 50) ? console.log('ok') : console.log('error');

// const num = 29;

// switch (num) {
//     case 49: 
//         console.log('nope');
//         break;
//     case 100: 
//         console.log('nope');
//         break;
//     case 50: 
//         console.log('YEP!');
//         break;
//     default:
//         console.log('not this time');
//         break;
// }



 
// console.log( NaN || 2 || undefined );
 
// console.log( NaN && 2 && undefined );
 
// console.log( 1 && 2 && 3 );
 
// console.log( !1 && 2 || !3 );
 
// console.log( 25 || null && !3 );
 
// console.log( NaN || null || !3 || undefined || 5);
 
// console.log( NaN || null && !3 && undefined || 5);
 
// console.log( 5 === 5 && 3 > 1 || 5);


// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//  num++;

// } 
// while (num < 55);

// let result = '';
// const length = 7;
// for (let i = 1; i < length; i++) {

//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }

//     result += '\n';
// }

// console.log(result);


// // Место для первой задачи
// function firstTask() {
//     // Пишем решение вот тут
//     for (let i = 5; i <= 10; i++) {
//         console.log(i);
//     }  
// }

// // Место для второй задачи
// function secondTask() {
//     // Пишем решение вот тут
//     for (let i = 20; i > 9; i--) {
//         if (i === 13) {
//             break;
//         }
//         console.log(i);
//     } 
// }

// // Место для третьей задачи
// function thirdTask() {
//     // Пишем решение вот тут
//     for (let i = 2; i <= 10; i = i + 2) {
//         console.log(i);
//     }
    
// }

// // Место для четвертой задачи

// // Цикл, который нужно переписать:




// // for (let i = 2; i <= 16; i++) {
// //     if (i % 2 === 0) {
// //         continue;
// //     } else {
// //         console.log(i);
// //     }
// // }

// function fourthTask() {
//     // Пишем решение вот тут
//     let i = 2

//     while (i<=16) {
//         if (i % 2 === 0) {
//             i++;
//             continue;
//         } else {
//             console.log(i);
//             i++;
//         }
//     }
    
    
// }

// // Место для пятой задачи

// function fifthTask() {
//     const arrayOfNumbers = [];

//     // Пишем решение вот тут
//     for (let i = 0; i <=5; i++) {
//         arrayOfNumbers[i] = i + 5; 
//     }

//     console.log(arrayOfNumbers);
    
//     // Не трогаем
//     return arrayOfNumbers;
// }

// // Место для первой задачи
// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];


//     // Пишем решение вот тут
//     let i = arr.length;
//     let j = 0;
//     while ( j < i) {
//         result[j] = arr[j];
//         j++;
//     }
//     console.log(result);
    
//     // Не трогаем
//     return result;
// }

// // Место для второй задачи
// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     // Пишем решение вот тут
//     for (let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] = data[i] * 2;
//         } else {
//             data[i] = data[i] + ' - done';
//         }
//     }
//     console.log(data);
    
//     // Не трогаем
//     return data;
// }

// // Место для третьей задачи
// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут
//     for (let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] = data[i] * 2;
//         } else {
//             data[i] = data[i] + ' - done';
//         }
//         result[data.length - i - 1] = data[i];
//     }
//     console.log(result);


    
    
//     // Не трогаем
//     return result;
// }


const lines = 5;
let result = '';
let faq = lines;
let k;


for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < faq; j++) {
        result += " ";
    }
    faq--;
    
    for (k = 0; k <= i; k++ ) {
        if (k === 0) {
            result += "*";
        } else {
            result += "**";
        }
    }
    result += '\n';
}

console.log(result);



/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


// Код возьмите из предыдущего домашнего задания


// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', '');
//     const b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done!');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//     console.log("Вы классический зритель");
// }   else if (personalMovieDB.count > 30) {
//     console.log("Вы киноман");
// } else {
//     console.log("Произошла ошибка");
// }



// // console.log(personalMovieDB);
// const usdCurr = 65;
// const eurCurr = 71

// function convert(amount, curr) {
//     console.log(curr * amount);
// }

// convert(500, usdCurr);
// convert(500, eurCurr);


// Место для первой задачи
function sayHello(name) {
    return `Привет, ${name}!`;
}

console.log(sayHello('Глеб'));

// Место для второй задачи
function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

// Место для третьей задачи
function getMathResult(a, b) {
    if (typeof(b) !== 'number' || b <= 0) {
        return a;
    }

    let result = '';
    for (let i = 1; i <= b; i++ ) {
        if (i < b) {
            result += `${a * i}---`;
        } else {
            result += `${a * i}`;
        }
    }
    return result;
}

console.log(getMathResult(5, 3));
console.log(getMathResult(3, 10));
console.log(getMathResult(10, '5'));
console.log(getMathResult(10, 0));
console.log(getMathResult(20, -10));


/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/



// Код возьмите из предыдущего домашнего задания

// let numberOfFilms;

// function start() {
//     numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// // start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', '');
//         const b = prompt('На сколько оцените его?', '');
    
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done!');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// // rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//         console.log("Вы классический зритель");
//     }   else if (personalMovieDB.count > 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка");
//     }
// }

// // detectPersonalLevel();


// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// // showMyDB(personalMovieDB.privat);

// // 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// // "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// // genres

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }

// // writeYourGenres();


// // Место для первой задачи
// function calculateVolumeAndArea(lenght) {
//     if (typeof(lenght) !== 'number' || lenght < 0 || !Number.isInteger(lenght)) {
//         return "При вычислении произошла ошибка";
//     }
//     return `Объем куба: ${lenght*lenght*lenght}, площадь всей поверхности: ${6*lenght*lenght}`;
// }

// // Место для второй задачи
// function getCoupeNumber(place) {
//     if (typeof(place) !== 'number' || place < 0 || !Number.isInteger(place)) {
//         return "Ошибка. Проверьте правильность введенного номера места";
//     } 

//     if (place === 0 || place > 36) {
//         return "Таких мест в вагоне не существует";
//     }

//     for (let i = 4; i <= 36; i = i + 4) {
//         if (place <= i) {
//             return Math.ceil(i / 4);
//         }
//     }
// }



// // Место для первой задачи
// function getTimeFromMinutes(minutes) {
//     if (typeof(minutes) !== 'number' || minutes < 0 || !Number.isInteger(minutes)) {
//         return "Ошибка, проверьте данные";
//     } 

//     if (Math.floor(minutes / 60) === 1) {
//         return `Это ${Math.floor(minutes / 60)} час и ${minutes % 60} минут`;
//     }
//     if (Math.floor(minutes / 60) === 2 || Math.floor(minutes / 60) === 3 || Math.floor(minutes / 60) === 4 ) {
//         return `Это ${Math.floor(minutes / 60)} часа и ${minutes % 60} минут`;
//     }

//     return `Это ${Math.floor(minutes / 60)} часов и ${minutes % 60} минут`;
// }


// // Место для второй задачи
// function findMaxNumber(a1, a2, a3, a4) {
//     if (typeof(a1) !== 'number' ||
//         typeof(a2) !== 'number' ||
//         typeof(a3) !== 'number' ||
//         typeof(a4) !== 'number') {
//         return 0;
//     } else {
//     return  Math.max.apply(null, [a1,a2,a3,a4]);
//     }
// }

// console.log(findMaxNumber(5,10,16,35));
// console.log(findMaxNumber(5,'done',16,35));
// console.log(findMaxNumber(5,10,-58,35.42));



// function fib(n) {
//     let a = 1;
//     let b = 1;
//     if (n===0){ return "0 1";}
//     if (n===1){ return "0 1";}
//     if (n===2){ return "0 1 1";}
//     if (typeof(n) !== 'number') {return '';}
//     let arr = '0 1 1';
//     for (let i = 4; i <= n; i++) {
//       let c = a + b;
//       a = b;
//       b = c;
//       arr += ` ${b}`;
//     }
//     return arr;
//   }


//   function fib(num) {
//     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return "";
//     }

//     let result = '';
//     let first = 0;
//     let second = 1;

//     for (let i = 0; i < num; i++) {
//         if (i + 1 === num) {
//             result += `${first}`;
//             // Без пробела в конце
//         } else {
//             result += `${first} `;
//         }

//         let third = first + second;
//         first = second;
//         second = third;
//     }

//     return result;
// } 

// console.log(fib(4));
// console.log(fib(7));
// console.log(fib('7'));
// console.log(fib(0));


// const arr = [1, 2, 3, 6, 8];

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`)
// });