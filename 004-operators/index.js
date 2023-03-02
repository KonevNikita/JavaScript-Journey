// В JS много операторов - на момент составления конспекта 50. Операторы можно разделять на различные группы: по числу операндов,
// цели применения, алгебраическим свойствам (ассоциативности) и по положению в таблице приоритетов операторов.
// Одним из самых распространенных операторов в JS является оператор присваивания. У оператора присваивания один из самых низких
// приоритетов.
let a = 42;

// Оператор присваивания возвращает значение.
let b, c;
c = b = 0;

// У оператора присваивания есть аналоги для модификации значения.
let d = 42;
d += 2;
// Выведет 44
console.log(d);
d /= 2;
// Выведет 22
console.log(d);

// Некоторые операторы имеют возможность получать информацию о значении.
console.log(typeof d);
// Оператор instanceof проверяет, является ли значение по левую сторону экземпляром класса по правую сторону.
// Следует обратить внимание на то, что примитивные типы не являются экземплярами классов, а тип строковых литералов не является
// классом.
console.log(d instanceof Number);
console.log('hello' instanceof String);

// Для примитивных типов вместо instanceof следует использовать typeof.
console.log(typeof d === 'number');
console.log(typeof 'hello' === 'string');

// В JS есть два вида равенства: строгое и нестрогое.
console.log(3 == '3');
// В отличие от нестрогого равенства, строгое не производит конверсию типов.
// В профессиональной разработке чаще всего рекомендуют использовать строгое равенство или неравенство.
console.log(3 === '3');

// async await - это операторы для асинхронного программирования. Это сложная тема, и мы ее разберем позже.
// delete - удаляет свойство из объекта. Это может быть полезно в случае наличия круговых зависимостей: когда переменная
// ссылается на саму себя через свои свойства, из-за чего сборщик мусора не может ее удалить.
// void - вычисляет выражение по правую сторону и возвращает undefined. Используется для IIFE - immediately invoked function
// expressions - немедленно вызываемых функциональных выражений.
// Группировка (круглые скобки) - для изменения порядка операций при вычеслении выражений.
// new - создание экземпляра класса, на котором далее можно будет использовать instanceof.
console.log(new String('hello') instanceof String);

// Доступ к свойствам объекта (.) - для получения значения из объекта на основе идентификатора. Объект - это некоторый набор пар,
// где для каждого значения - ключа, ставится в соответствие некоторое значение.
let obj = {"key":"value"};
console.log(obj.key);

// Доступ к свойствам объекта с вычислением ([<выражение>]). Для получения значения из объекта на основе выражения.
console.log(obj['k'+'e'+'y']);
// Тернарный условный оператор (<логическое выражение> ? <выражение, если true> : <выражение, если false>) - для выбора значения
// в зависимости от логического выражения.
let isActive = false;
console.log(`system is ${isActive ? '' : 'in'}active`);

// Вызов функции ((<аргументы>)).

// Оператор опциональной последовательности (?.) - используется для получения значения свойства, не выбрасывая исключения, но возвращая
// "undefined" при значении равном "null" и "undefined". Используется, если есть вероятность отсутствия некоторых значений.
// Требует Node.js 14+
let e;
// для (?.) должна быть объявлена переменная
if (process.version.match(/^v(\d+).*/)[1] >= 14) {
    console.log(typeof(e?.string))
} else {
    console.log('optional chaining is not supported for Node.js 13 and below')
}