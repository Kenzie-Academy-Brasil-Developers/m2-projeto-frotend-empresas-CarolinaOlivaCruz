
export function buttonLogin(url) {
    const button = document.querySelectorAll('.buttonLogin')

    button.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault()
            return window.location.assign(url)
        })
    })
}

export function buttonRegister(url) {
    const button = document.querySelectorAll('.buttonRegister')

    button.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault()
            return window.location.assign(url)
        })
    })
}

export function buttonReturn(url) {
    const button = document.querySelectorAll('.button-return')

    button.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault()
            return window.location.assign(url)
        })
    })
}

export function buttonLogout() {
    const button = document.querySelector('.button-logout')
    button.addEventListener('click', (e) => {
        e.preventDefault()
        localStorage.clear()
        window.location.replace('../../index.html')
    })
}