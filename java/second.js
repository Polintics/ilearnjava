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
    

});