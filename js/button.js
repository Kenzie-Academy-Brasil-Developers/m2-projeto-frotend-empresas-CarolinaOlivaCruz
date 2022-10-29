
export function buttonLogin(url) {
    const button = document.querySelectorAll('.buttonLogin')
    console.log(button);
    button.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault()
            return window.location.assign(url)
        })
    })
}

export function buttonRegister(url) {
    const button = document.querySelectorAll('.buttonRegister')
    console.log(button);
    button.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault()
            return window.location.assign(url)
        })
    })
}

export function buttonReturn(url) {
    const button = document.querySelectorAll('.button-return')
    console.log(button);
    button.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault()
            return window.location.assign(url)
        })
    })
}