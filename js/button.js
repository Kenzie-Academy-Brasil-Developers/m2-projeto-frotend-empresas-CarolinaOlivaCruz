
export function navButton(urlPag, urlLogin, urlRegister) {
    const header = document.querySelector('header')
    const section = document.createElement('section')
    section.className = 'nav-button'
    
    const buttonMenu = document.querySelector('.button-menu')
    buttonMenu.addEventListener('click', (e) => {
        e.preventDefault()
        buttonMenu.innerText = 'X'
        buttonMenu.className = 'menu-close'
        buttonMenu.addEventListener('click', (e) => {
            e.preventDefault()
            section.innerHTML = ''
            window.location.replace(urlPag)
        })

        const div = document.createElement('div')
        const button1 = document.createElement('button')
        button1.type = 'button'
        button1.className = 'buttonLogin'
        button1.innerText = 'Login'
        button1.addEventListener('click', (e) => {
            e.preventDefault()
            window.location.assign(urlLogin)
        })


        const button2 = document.createElement('button')
        button2.type = 'button'
        button2.className = 'buttonRegister'
        button2.innerText = 'Cadastro'
        button2.addEventListener('click', (e) => {
            e.preventDefault()
            window.location.assign(urlRegister)
        })

        div.append(button1, button2)
        section.appendChild(div)
        header.appendChild(section)
    })

}

export function buttonRegister() {
    const button = document.getElementById('buttonPagRegister')
        button.addEventListener('click', (e) => {
            e.preventDefault()
            return window.location.assign('../../pages/register/index.html')
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

export function buttonLogout(url) {
    const button = document.querySelector('.button-logout')
    button.addEventListener('click', (e) => {
        e.preventDefault()
        localStorage.clear()
        window.location.replace(url)
    })
}

export function buttonLoginDesk(url){
    const button = document.querySelector('.buttonLogin')
      button.addEventListener('click', (e) => {
            e.preventDefault()
            window.location.assign(url)
        })
}

export function buttonRegisterDesk(url){
    const button = document.querySelector('.buttonRegister')
      button.addEventListener('click', (e) => {
            e.preventDefault()
            window.location.assign(url)
        })
}
