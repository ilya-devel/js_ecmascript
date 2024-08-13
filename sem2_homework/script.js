class Book {
    #title = ''
    #author = ''
    #pages = 0

    get title() { return this.#title }
    get author() { return this.#author }
    get pages() { return this.#pages }


    constructor(title, author, pages) {
        this.#title = title
        this.#author = author
        this.#pages = pages
    }

    displayInfo() {
        console.log(`
Название: ${this.title}
Автор: ${this.author}
Кол-во страниц: ${this.pages}
            `)
    }
}

const newBook = new Book('Ник', 'Анджей Ясинский', 293)

newBook.displayInfo()


// newBook.#author = 'new author'
newBook.displayInfo()


class Student {

    #studentName
    #age
    #grade

    get studentName() { return this.#studentName }
    get age() { return this.#age }
    get grade() { return this.#grade }

    set studentName(studentName) {
        if (typeof(studentName) !== 'string') {
            throw new Error('Имя студента должно быть строкой')
        }
        this.#studentName = studentName
    }

    set grade(grade) {
        if (typeof(grade) !== 'string') {
            throw new Error('Класс студента должен быть строкой')
        }
        this.#grade = grade
    }

    set age(value) {
        if (!+value) {
            throw new Error('Возраст должен быть числом')
        }
        if (value <= 6 || value > 40) {
            throw new Error('Возраст студента не может быть меньше 7 лет или больше 40')
        }
        this.#age = value
    }

    constructor(studentName, age, grade) {
        this.studentName = studentName
        this.age = age
        this.grade = grade
    }

    displayInfo() {
        console.log(`
Студент:
Name: ${this.#studentName}
Age: ${this.#age}
Grade: ${this.#grade}
            `)
    }
}

const student2 = new Student("Jane Doe", 17, "11th grade")
student2.displayInfo()