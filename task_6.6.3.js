//Mentor edits:
/* 
let arr = []; нет смысла в let, т.к. ссылочный тип данных и с promt тоже

Статус: Правки внесены
*/ 


anyNum = prompt("Введите любое число");

if (isNaN(anyNum)) {
  alert("Вы ввели не число. Попробуйте еще раз");
} else {
  alert("Вы ввели число");
  +anyNum;
}

arr = [];

for (i = 0; i <= anyNum; i++) {
  arr.push(i);
}

alert(arr);
