//Mentor edits:
/*  
 1) задача возващает неколько логов. Ход мыслей правильный, чуть надо додумать. 

 Статус: Правки внесены
 
 2) И куда-то делись пробелы )) 
for(let i=0; i<obj[key].length; i++){ ====> for (let i = 0; i < obj[key].length; i++) {

 Статус: Правки внесены
*/

const obj = {
  some: "some",
  dom: "text",
  arr: [1, 2, 3, 4, 5],
  tom: "there"
};

let arrValues = [];

for (const key in obj) {
  console.log(obj[key]);
  if (Array.isArray(obj[key])) {
    for (let i = 0; i < obj[key].length; i++) {
      arrValues.push(obj[key][i]);
    }
  } else {
    arrValues.push(obj[key]);
  }
}

console.log(arrValues);
