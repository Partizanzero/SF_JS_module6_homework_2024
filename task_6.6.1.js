//Mentor edits:

/* 
1) классно, что решили проверить на тип, но тогда уже лучше вот так ( if (typeof str === "string") {
const  newstr = str.toLowerCase(); //приводим все к прописным буквам} else {
return 'Введите строку'
})

Статус: Правки внесены

2) нейминг переменных в JS - camelCase. Не стоит сокращать имена констант, важно писать читаемый код.

Статус: Правки внесены

3) строка в JS уникальна нет смысла объявлять ее через let

Статус: Правки внесены (комментарий ученика: прикольно! )) ) 

4) так же можно сократить количество переменных в вашей задаче с помощью точечной записи 
' newstr = str.toLowerCase().replace(/\s+/g, ""). ' если так соединим то пробелов уже не будет. 

Статус: Правки внесены

5) Второй метод лишний  palidr = newstrarr.join("").replace(/\s+/g, ""); 

Статус: Правки внесены
*/



function isPalindrom(originalString) {
  //проверяем, что передана строка
  if (typeof originalString !== "string") {
    return "Введите строку";
  }
  
  newString = originalString.replace(/\s+/g, ""); //убираем все пробелы в строке: \s+ - учитывать более одного пробела подряд, g - глобальный флаг - ищет пробелы по всей строке

  newStringArray = newString.split(""); //режем строку на массив букв
  palindrom = newStringArray.reverse().join(""); //переворачиваем массив букв
 
  //проверяем является ли слово палиндромом
  if (palindrom.toLowerCase() === newString.toLowerCase()) {
    console.log(`Слово ${originalString} является палиндромом`);
  } else {
    console.log(`Слово ${originalString} не является палиндромом`);
  }
}

//Test
isPalindrom("Довод");
isPalindrom("Сантимент");
isPalindrom("А роза упала на лапу Азора");
