
export function buttonLogin(url) {
    const button = document.getElementById('buttonLogin')
    button.addEventListener('click', (e) => {
        e.preventDefault()
        return window.location.assign(url)
    })
}

export function buttonRegister(url) {
    const button = document.getElementById('buttonRegister')
    button.addEventListener('click', (e) => {
        e.preventDefault()
       return window.location.assign(url)
    })
}