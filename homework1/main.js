// Task 1
// let a = 10;
// let b = a * 3;
// let c = a + b;
// alert("a = " + a +", b = " + b +", c = " + c +";");


// Task 2
// let firstName = prompt("Ваше Имя:", "John");
// let lastName = prompt("Ваша Фамилия:", "Doe");
// alert("What's up  " + firstName + " " + lastName);


// Task 3
// let x = +prompt("Число 1:","");
// let y = Number(prompt("Число 2:",""));
// let multiplication = x * y;
// let division = x / y;
// let subtraction = x - y;
// let addition = x + y;
// alert("Произведение: "+multiplication + "\nЧастное: " + division+"\nPазность: "+subtraction+"\nCумма: "+addition);


// Task 4
// let hoursWorkOfDay = +prompt("Количество робочих часов в день:");
// let daysWorkOfMonth = +prompt("Количество робочих дней в месяц:");
// let ratePerHour = +prompt("Рейт за час:");
//
// alert("з/п за июль: " + (daysWorkOfMonth * hoursWorkOfDay) * ratePerHour + "$");


// // Task 5
// let number = +prompt("Введите число:");
// let evenness = number % 2;
// if (evenness === 0) {
//     alert("Четное");
// } else {
//     alert("Нечетное");
// }


// Task 6
// let number = +prompt("Введите число");
// alert(number);
// if (isNaN(number)) {
//     alert("Не Число");
// } else {
//     alert("Число");
// }


// Task 7
// let number = Math.round((Math.random()) * 100);
// let numberTwo = prompt("Второе число:");
// if (number > numberTwo) {
//     alert("Первое число: " + number + ";\nВторое число: " + numberTwo + ";\nПервое число больше второго;");
// } else if (number < numberTwo) {
//     alert("Первое число: " + number + ";\nВторое число: " + numberTwo + ";\nПервое число меньше второго;");
// } else {
//     alert("Первое число: " + number + ";\nВторое число: " + numberTwo + ";\nЧисла равны;");
// }


// Task 8
// let str = prompt("", "Мне нравится изучать Front-end");
// let likeStudying = prompt("Что Вам нравится изучать?");
// let exist = str.includes(likeStudying);
//
// if( exist){
//     alert("Есть совпадения");
// } else {
//     alert("Нет совпадений");
// }
// let partOfStr = (str.slice(0, 21));
// let result = (partOfStr + ` ` + likeStudying);
// alert(result);


// let name = prompt("Укажите Имя");
// let age = prompt("Укажите Возраст");
//
//
// if ((name === "John" && age === "26") || (name === "Kate" && age === "22")) {
//     alert("Hello" + name + " " + age);
// } else if (name === "" && age === "") {
//     alert("Неверно");
// } else {
//     alert("Все остальное");
// }
//
//


for (let i = 0; i < 9; i++) {
    console.log(i);

    let odd = i % 2;

    if (odd === 0) {
        continue;
    } else {
        alert("i");
    }
}


// let name = prompt("Введите пол");
//
// switch (name) {
//     case "женский":
//         alert("Привет девушка");
//         break;
//     case "мужской":
//         alert("Привет мужчина");
//         break;
//     case "":
//     default:
//         alert("Пусто");
// }





























