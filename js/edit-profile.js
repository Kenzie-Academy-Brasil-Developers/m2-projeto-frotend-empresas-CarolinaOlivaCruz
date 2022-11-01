
import { getProfile } from "./api.js"
import { patchUser } from "./api.js"

const objProfile = await getProfile()
console.log(objProfile.username);

async function editProfile() {
    const objProfile = await getProfile()

    const body = document.querySelector('body')
    const section = document.createElement('section')
    const div1 = document.createElement('div')
    const buttonClose = document.createElement('button')
    buttonClose.innerText = 'X'
    buttonClose.addEventListener('click', () => section.innerHTML = '')

    const div2 = document.createElement('div')

    const h3 = document.createElement('h3')
    h3.innerText = 'Editar Perfil'

    const inputName = document.createElement('input')
    inputName.type = 'text'
    inputName.placeholder = 'Seu nome'
    inputName.value = objProfile.username

    const inputEmail = document.createElement('input')
    inputEmail.type = 'email'
    inputEmail.placeholder = 'Seu email'
    inputEmail.value = objProfile.email
    console.log(inputEmail);

    const inputPassword = document.createElement('input')
    inputPassword.type = 'password'
    inputPassword.placeholder = 'Sua senha'

    const pErro = document.createElement('p')
    pErro.className = 'mensage-erro'
    pErro.innerText = ''

    const button = document.createElement('button')
    button.innerText = 'Editar perfil'
    button.addEventListener('click', async () => {
 
        
        const newData = {
            username: inputName.value,
            password: inputPassword.value,
            email: inputEmail.value
        }

        if (newData.email != objProfile.email && newData.password != '') {
            await patchUser(newData)
            await getProfile()
            setTimeout(() => {
                window.location.replace('./index.html')
            }, 500)
        }
        else {
            pErro.innerText = 'Email ou senha inválidos'
        }
            
    })

    div1.appendChild(buttonClose)
    div2.append(h3, inputName, inputEmail, inputPassword, pErro, button)
    section.append(div1, div2)
    body.appendChild(section)

    return body
}


export function openEditProfile() {
    const buttonOpen = document.querySelector('.open-edit-profile')
    buttonOpen.addEventListener('click', (e) => {
        e.preventDefault()
        editProfile()
    })
}