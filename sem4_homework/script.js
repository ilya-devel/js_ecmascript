// Задание 1

async function getUserData(idUser) {
    return await fetch(`https://jsonplaceholder.typicode.com/users/${idUser}`)
        .then(res => {
            if (res.ok) return res.json()
            if (res.status === 404) throw new Error('Пользователь не найден')
            // else throw new Error('Запрос не успешен')
        })
        .catch(err => { return { err: err.message } })
}

console.log(await getUserData(1))
console.log(await getUserData(5))
console.log(await getUserData(23))

// Задание 2

async function saveUserData(user) {
    return await fetch('https://jsonplaceholder.typicode.com/users/', {
        method: 'POST',
        headers: {
            'ContentType': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    })
}

const user = {
    name: 'John Smith',
    age: 30,
    email: 'john@example.com'
}

saveUserData(user)
    .then((res) => {
        if (res.ok) {
            console.log('User data saved successfully')
        }
    })
    .catch(error => {
        console.log(error.message)
    })

// Задание 3

function changeStyleDelayed(elName, delay) {
    setTimeout(()=>{
        const element = document.querySelector(elName)
        element.classList.add('change')
        element.innerHTML = `
        <div class="eyes">
            <div class="eye"></div>
            <div class="eye"></div>
        </div>
        <div class="mouth"></div>
        `
    }, delay)
}

changeStyleDelayed('.rectangle', 2000)