// Область видимости переменной — это та часть программы, в которой к произвольной переменной можно обратиться.

// Ключевое слово var позволяет объявить [изменяемую] переменную в глобальной области видимости. Из этого следует, что к ней можно
// обратиться из любой точки программы после объявления. В случае с этим ключевым словом может произойти повторное объявление
// переменной с перезаписью значения (и без создания исключения, которое прервало бы исполнение скрипта).

var a = 3;
var a = 1;
console.log(a);

// Вместо var в современном JS используют let и const. Ключевое слово const позволяет объявлять постоянные значения в локальной области
// видимости, а ключевое слово let - изменяемые.

const maxDaysPerYear = 366;
// date - порядковый номер текущего дня в году в интервале от 0 до 365
// jslint считает следующую строку ошибкой, так как мы использовали var и let
// "The let statement, which is like the var statement except that it respects block scope. You may use let or var but not both."
let date = 58;
let date = 60;
// К сожалению, исключения не появляются даже при использовании ключевых слов let и const.