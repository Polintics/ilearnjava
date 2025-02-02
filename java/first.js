document,addEventListener("DOMContentLoaded", function(){

//домашка

//1
let str = 'privet';
alert(str[0]);
alert(str[1]);
alert(str[5]);


//2
let a = parseInt(prompt("Введите любое число:"));
let b = parseInt(prompt("Введите еще одно число:"));
console.log(a > 0 || b > 0);

//3
let age = parseInt(prompt("Сколько тебе лет?:"));
if (age >= 18) {
    console.log("Совершеннолетний");
} 
else {
    console.log("Несовершеннолетний");
}
});