// Задание 1
// Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
const arr = [1, 5, 7, 9]

console.log(`Минимальное значение: ${Math.min(...arr)}`)


// Задание 2
//Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

const createCounter = () => {
    let counter = 0
    return {
        increment: () => ++counter,
        decrement: () => --counter,
        value: () => counter
    }
}

const counter = createCounter()

console.log(`Текущее значение счётчика: ${counter.value()}`)
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.increment())
console.log(`Текущее значение счётчика: ${counter.value()}`)
console.log(counter.decrement())
console.log(counter.decrement())
console.log(counter.decrement())
console.log(counter.decrement())
console.log(counter.decrement())
console.log(`Текущее значение счётчика: ${counter.value()}`)


// Задание 3
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

// function findElementByClass(rootElement, myClass) {
//     const lst = [rootElement]
//     do {
//         const element = lst.pop()
//         if (element.classList.contains(myClass)) {
//             return element
//         }
//         lst.push(...element.children)
//     } while (lst.length > 0)
// }

function findElementByClass(rootElement, myClass) {
    let result = []
    if (rootElement.classList.contains(myClass)) {
        result.push(rootElement)
    }
    if (rootElement.childElementCount > 0) {
        const findElements = Array.of(...rootElement.children)
            .map(child => findElementByClass(child, myClass))
            .filter(element => element.length > 0)
        if (findElements) {
            findElements.forEach(findElement => {
                result = [...result, ...findElement]
            })
            return result
        }
    }
    return result
}

const test = document.querySelector('.test')
const targetElement = findElementByClass(test, 'tmp')
console.log(targetElement)