"use strict";

// ***************les17********************
var question = 'You can ignore single and dounle quotes like this\: \\\'\\\' \\\" \\\"';
console.log(question);
alert('Please enter your date');
var userName = prompt("Enter your name", 'Name');
alert("Your name is: ".concat(userName));
userSumame = prompt("Enter your sumame", 'Sumame');
alert("Your full name is: ".concat(userName, " ").concat(userSumame));
userOld = prompt("How old are you?", 'Age');
alert("Your full name is: ".concat(userName, " ").concat(userSumame) + ", your age is: ".concat(userOld));
userAdmin = confirm('Are you admin?');
alert("Your full name is: ".concat(userName, " ").concat(userSumame) + ", your age is: ".concat(userOld) + ", admin status: ".concat(userAdmin)); // console.log(typeof Boolean (alert('5')));
// alert нічого не повертає. І відповідно при приведенні до логічного типу за допомогою Boolean отримуємо false у консолі
// console.log(true > false);
// true це 1, false - 0. Відповідно отримаємо true у консолі
// console.log(true > 5);
// 1 не быльше 5. Отримуємо false у консолі
// console.log(true > '5');
// 1 менша за стріну 5 тому у консолі буде false
// console.log(true > null);
// null це спец символ (відсутність даних, пусто) в консолі буде true
// ********************************************************
// console.log(2 < 4);
// let textFieldActive = true;
// console.log (textFieldActive)
// let checkboxChecked = false;
// console.log(checkboxChecked)
// console.log(alert('5'))
// console.log(Boolean (53) );
// console.log(typeof alert('5'));
// console.log(typeof Boolean (alert('5')));
// console.log( typeof String);
// console.log(typeof null);