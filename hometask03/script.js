'use strict';

// Методы вводы
// promt(строка, стандартное значение для строки ввода)
// let question = confirm('Тебе есть 18 лет?');
// let question2 = prompt('Сколько тебе лет?', '18');
// console.log(question2); //Строка

/* Чтобы преобразовать число в булиновый тип можно
воспользоваться либо boolean(число), либо (!!число)*/
// String() - преобразовать в строку
// число .toString() - преобразование ЧИСЛА в строку
// Number(строка) - преобразовать строку в число
// или тернарный оператор (+'строка')
// parseInt('строка', СС) - вытаскивает только целые числа
// parseFloat('строка', СС) - только дробные числа

// Ветвление
// let n = 5;
// switch (n){
//   case 1:
//   case 3:
//     console.log(3);
//     break;
//   case 4:
//     console.log(4);
//     break;
//   case 5:
//     console.log(5);
//     break
//   default:
//     console.log('Неверно')
// }

// let result = true ? 1 : 0;
// = условие ? вариант выполнения : вариант выполнения\

let money = prompt('Ваш месячный доход?');
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = prompt('Есть ли у вас депозит в банке?');
let expenses1 = prompt('Введите обязательную статью расходов');
let amount1 = prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов');
let amount2 = prompt('Во сколько это обойдется?');
let mission = prompt('Какая цель?');
let budgetMonth = money - amount1 - amount2; 
console.log('Бюджет на месяц составил: ' + budgetMonth);
let missionAm = mission/budgetMonth;
console.log('Месяцев на реализацию цели: ' + Math.ceil(missionAm));
let budgetDay = Math.floor(budgetMonth/30);
console.log('Дневной бюджет составил: ' + budgetDay);

if (budgetDay>=0) {
  switch(true){
    case (budgetDay>=1200):
      console.log('У вас высокий уровень дохода');
      break;
    case (budgetDay>=600 && budgetDay<1200):
      console.log('У вас средний уровень дохода');
      break;
    case (budgetDay<600 && budgetDay >0):
      console.log('К сожалению у вас уровень дохода ниже среднего');
      break;
    case (budgetDay=0):
      console.log('Вы ничего не зарабатываете');
      break;
  }
} else {
    console.log('Что-то пошло не так');
}
