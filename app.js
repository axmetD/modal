// 1 задание

opr = {
  name: "Меня зовут",
  age: "Мне",
  plus: "Пример 1: 6 + 3 = 9 Ваш ответ",
  minus: "Пример 2: 20 - 5 = 15 Ваш ответ",
  multip: "Пример 3: 15 * 2 = 30 Ваш ответ",
  divs: "Пример 4: 8 / 4 = 2 Ваш ответ",
  prt: "Пример 5: 10 % 3 = 1 Ваш ответ",
};


let name, age, plus, minus, multip, divs, prt;


name = prompt("Введите свое имя");
console.log(opr.name, name);

age = prompt("Введите свой возраст");
console.log(opr.age, age);

plus = prompt("Решите пример 6 + 3 = ?");
console.log(opr.plus, plus);

minus = prompt("Решите пример 20 - 5 = ?");
console.log(opr.minus, minus);

multip = prompt("Решите пример 15 * 2 = ?");
console.log(opr.multip, multip);

divs = prompt("Решите пример 8 / 4 = ?");
console.log(opr.divs, divs);

prt = prompt("Решите пример 10 % 3 = ?");
console.log(opr.prt, prt);


// 2 задание


let X, Y, Z;


X = Number(prompt())
Y = Number(prompt())
Z = Number(prompt())


let res = (X + Y + Z) / 3
alert(res);

