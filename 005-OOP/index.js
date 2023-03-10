// Объектно-ориентированное программирование - это парадигма программирования. В зависимости от источников ей даются разные
// определения, начиная от интерпретации Алана Кея и его языка программирования Simula, и заканчивая современными интерпретациями.
// Под ООП обычно подразумевают метод разработки программы, где объекты реального мира моделируются программой как экземпляры классов.
// В современном программировании выделяют от трех до четырех принципов ООП: инкапсуляция, полиморфизм, наследование и новая школа
// ООП включает абстракцию.

// Чтобы объявить класс в JS, нужно использовать ключевое слово class.
class Animal {
    // Специальный метод constructor, необходимый для создания и инициализации объектов, созданных с помощью класса. В классе может
    // быть только один метод constructor. Специальный метод constructor также является частным случаем члена класса (=свойства).
    // Есть два вида свойств объекта (=экземпляра класса): свойства-данные и свойства-аксессоры. constructor - это функция-метод,
    // но он не является аксессором, потому что является самостоятельным значением. Так, например, можно вывести поле constructor
    // объекта без вызова этого самого конструктора.
    constructor(name) {
        this.name = name;
    }

    // getter - это частный случай члена класса. Он идёт рука об руку с setter'ом. Вместе они позволяют неявно вызывать функции
    // getter и setter при доступе к свойству, чье имя они разделяют. Это позволяет абстрагировать внутреннюю реализацию объектов
    // класса от доступа к их свойствам. Setter'ы также могут обеспечивать инварианты для свойств-данных.
    get caption() {
        return `${this.name} (Животное)`;
    }
    
    set caption(caption) {
        const beg = caption.indexOf(' (Животное)');
        // С помощью этой проверки мы совершаем проверку аргумента caption на валидность. В данном случае мы проверяем наличие
        // суффикса ' (Животное)'.
        if (beg === -1) {
            throw new Error('Invalid caption');
        }
        this.name = caption.substring(0, beg);
    }
}

let animal = new Animal('Лев');
console.log(animal.constructor);
console.log(animal.name);
console.log(animal.caption);
animal.caption = 'Ворона (Животное)';
console.log(animal.name);
console.log(animal.caption);

let obj = {
    a: 'animal',
    get decorated(){
        return `${this.a} (decorated)`;
    },
    set decorated(name) {
        this.a = `(decorated) ${name}`
    }
}

console.log(obj);
console.log(obj.a);
console.log(obj.decorated);
obj.decorated = 72;
console.log(obj.decorated);
console.log(obj.a);
console.log(typeof obj);

// TODO: Learn about hoisting.