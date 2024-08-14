class Employee {
    _nameEmployee
    constructor(nameEmployee) {
        this._nameEmployee = nameEmployee
    }
    displayInfo() {
        console.log(`
Вывод:
Name: ${this._nameEmployee}
        `)
    }

}

class Manager extends Employee {
    #department
    constructor(nameEmployee, department) {
        super(nameEmployee)
        this.#department = department
    }
    displayInfo() {
        console.log(`
Вывод:
Name: ${this._nameEmployee}
Department: ${this.#department}
                `)

    }
}

const employee = new Employee("John Smith")
employee.displayInfo()

const manager = new Manager("Jane Doe", "Sales")
manager.displayInfo()

// ==================

class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

class Order {
    constructor (id) {
        this.id = id
        this.cart = []
    }

    addProduct(product) {
        if (product.constructor.name !== 'Product') {
            throw new Error('В корзину добавляется не продукт')
        }
        this.cart.push(product)
    }

    getTotalPrice() {
        return this.cart.reduce((summary, product) => summary + product.price, 0)
    }
}


const order = new Order(12345)

const product1 = new Product("Phone", 500)
order.addProduct(product1)


const product2 = new Product("Headphones", 100)
order.addProduct(product2)

order.addProduct(new Product('laptop', 1000))
order.addProduct(new Product('laptop', 1000))
order.addProduct(new Product('laptop', 1000))

console.log(order.getTotalPrice())