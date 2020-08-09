// Массивы и объекты

// Task 1 - Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’].
// Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.
// ET = 30min;
// AT = 1hour;
//
// let array = [1, 2, 3, "a", "b", "c", "4", "5", "6"];
// let result = 0;
// for (let i = 0; i < array.length; i++) {
//     let value = Number(array[i]);
//
//     if (!isNaN(value)) {
//         result = result + value;
//     }
// }
// alert(result);

// Task 2 - Сгенерируйте массив из n случайных чисел с двумя знаками после запятой.
// Переберите массив и распечатайте в консоли значения его элементов, возведенные в пятую степень, не используя функцию Math.pow().
// ET = 1hour;
// AT = 1hour 30min;
//
// let array = [];
// let result = 0;
// for (let i = 0; i < 10; i++) {
//
//     let randomNumber = Math.random() * 100;
//     randomNumber = randomNumber.toFixed(2);
//     result =  randomNumber ** 5;
//     array.push(result);
// }
// alert(array);

// Task 3 - Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
//a. Добавьте в начало массива значение ‘Backbone.js’
//b. Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
//c. Добавьте в массив значение ‘CommonJS’ вторым элементом
//d. Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”
// ET = 1hour;
// AT = 30min;
//
// let array = ["AngularJS", "jQuery"];
// let extra = "jQuery";
// array.unshift("Backbone.js");
// array.push("ReactJS", "Vue.js");
// array.splice(1, 0, "CommonJS");
// let extraIndex = array.indexOf(extra);
// array.splice(extraIndex, 1);
// alert("Это здесь лишнее: " + extra);

// Task 4 - Создайте строку с текстом ‘Как однажды Жак звонарь сломал фонарь головой’.
// Разбейте ее на массив слов, и переставьте слова в порядке ‘Как Жак звонарь однажды сломал головой фонарь’ с помощью любых методов массива (indexOf, splice ...).
// Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты.
// ET = 1hour;
// AT = 1hour;
//
// let str = "Как однажды Жак звонарь сломал фонарь головой";
// let array = str.split(" ");
// let element1 = array.indexOf("однажды");
// let element2 = array.indexOf("фонарь");
// array.splice(element1, 1);
// array.splice(3, 0, "однажды");
// array.splice(element2, 1);
// array.splice(6, 0, "фонарь");
// let str2 = array.join(' ');
// alert("Исходный вариант:\n" + str + "\nИтоговый вариант:\n" + str2);

// Task 5 - Создайте ассоциативный массив person, описывающий персону, с произвольным количеством произвольных полей.
// С помощью оператора in или typeof проверьте наличие в объекте свойства, прочитанного из prompt, и выведите его на экран.
// Если свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt.
// ET = 1hour;
// AT = 30min;
//
// let properties = prompt("Напишите св-во");
// let person = {
//     firstName: "Lara",
//     age: 22,
//     job: {
//         position: "Developer",
//         company: "Google"
//     }
// };
// if (properties in person){
//     alert(person[properties]);
// } else {
//    let value = prompt("Введите значение:");
//     person[properties] = value;
//    alert("Новое св-во " + properties +" со значением " + value + " добавлено")
// }

// Task 6 - Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями,
// прочитанными из prompt (например: brand, model, resolution, color...), не используя вспомогательные переменные.
// Добавьте этот гаджет персоне, созданной ранее.
// ET = 40min;
// AT = 30min;
//
// let phone = {
//     brand: prompt("Введите бренд:"),
//     model: prompt("Введите модель:"),
//     resolution: prompt("Введите разрешение экрана:"),
//     color: prompt("Введите цвет:"),
// };
// person.phone =  phone;
// alert(JSON.stringify(person));

// Task 7 - Создайте объект dates для хранения дат.
// Первая дата – текущая, new Date.
// Вторая дата – текущая дата минус 365 дней.
// Из prompt читается дата в формате yyyy-MM-dd.
// Проверьте, попадает ли введенная дата в диапазон дат объекта dates.
// ET = 50min;
// AT = 2hours;
//
// let dates = {
//     firstDate: new Date(),
// };
//
// let secondDate = new Date(dates.firstDate.getTime() - 365 * 24 * 60 * 60 * 1000);
//
// dates.secondDate = secondDate;
//
// let date = new Date(prompt("Введите дату в формате yyyy-MM-dd "));
//
// if (date.getTime() >= secondDate.getTime() &&  date.getTime () <= dates.firstDate.getTime()){
//
//     alert("попадает введенная дата в диапазон дат объекта dates")
// } else {
//     alert("не попадает введенная дата в диапазон дат объекта dates")
// }

// Task 8 - Создайте пустой массив.
// В цикле до n на каждой итерации запускайте prompt для ввода любых символов, полученное значение добавляйте в конец созданного массива.
// После выхода из цикла посчитайте сумму всех чисел массива и выведите в alert полученный результат.
// ET = 30min;
// AT = 30min;
//
// let array = [];
// let result = 0;
// for (let i = 0; i < 3; i++) {
//     let prop = prompt("Введите любой символ");
//     array.push(prop);
// }
// for (let i = 0; i < array.length; i++){
//     let value = Number(array[i]);
//
//     if(!isNaN(value)){
//         result = result + value;
//     }
// }
// alert(result);

// Task 9 - Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения:
// ET = 2hours;
// AT = 1hour;
//
// let table = [];
//
// for (let i = 1; i < 11; i++) {
//     let numbers = [];
//     for (let j = 1; j < 11; j++) {
//         let multiply = i + "x" + j + "=" + Number(i * j) ;
//         numbers.push(multiply);
//     }
//     table.push(numbers)
// }
//
// alert(table);

// Task 10 - Создайте структуру данных, полностью описывающую html-разметку картинки.
// <img src="https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" style="border: 1px solid #ccc" width="200" />
// ET = 1hours;
// AT = 30min;
//
// let obj = {
//     tag: "img",
//     attrs:{
//         src: "https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
//         alt: "",
//         style: "border: 1px solid #ccc",
//         width: "200",
//     }
// };







