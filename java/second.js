document, addEventListener("DOMContentLoaded", function (){
   
   
   //домашка

    //1
    let age = prompt("Введите Ваш возраст:", 18);
    if( age >= 65 ){
        console.log ("Вам пора на пенсию");
    }
    else{
        console.log ("Вам еще рано на пенсию");
    }
    
    //2
    let x = parseInt(prompt("Введите любое число:"));
    let y = parseInt(prompt("Введите еще одно число:"));
    if( x > y ){
        console.log ("Первое число больше второго");
    }
    else if( y>x ){
        console.log ("Второе число больше первого");
    }
    else {  
        console.log("Числа равны");

    }

    //3
    let numb = parseInt(prompt("Введите любое число:"));
    if (numb % 2 === 0) {
        console.log("Четное число");
    } 
    else {
        console.log("Нечётное число");
    }

    //4
    const secretNumber = 7;
    let uzer = prompt("Угадай число от 1-10:");
    if (uzer == secretNumber) {
        console.log("Вы угадали!");
    }

    else{
        console.log("Вы не угадали :(");
    }
    
    //5
    let login = prompt ("Введите логин:");
    let password = prompt ("Введите пароль:");
    if ( login === "admin" && password === "12345" ) {
        console.log("Добро пожаловать!");
    }
    else{
        console.log("Неверный логин или пароль");
    }
    
    //6
    const year = prompt("Введите год:");
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("Это високосный год");
    } 
    else {
        console.log("Это не високосный год");
    }

    //7
    const number = prompt("Введите число:");
    if (number > 100) {
        console.log("Большое число");
    } 
    else if (number < 100) {
        console.log("Маленькое число");
    } 
    else {
        console.log("Точно 100!");
    }



});