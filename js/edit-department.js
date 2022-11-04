import { patchDepartment } from "./api.js"


export async function editDepartment(idDepartmente, description) {
    
    const body = document.querySelector('body')
    const section = document.createElement('section')

    const div1 = document.createElement('div')
    const buttonClose = document.createElement('button')
    buttonClose.innerText = 'X'
    buttonClose.addEventListener('click', () => section.innerHTML = '')

    const div2 = document.createElement('div')

    const h3 = document.createElement('h3')
    h3.innerText = 'Editar Departamento'

    const textarea = document.createElement('textarea')
    textarea.value = description

    const buttonSubmit = document.createElement('button')
    buttonSubmit.type = 'submit'
    buttonSubmit.innerText = 'Alterar o departamento'
    buttonSubmit.addEventListener('click', async (e) => {
        e.preventDefault()
        let newDescription = {
            description: textarea.value
        }
        
        await patchDepartment(idDepartmente, newDescription)
    })

    div1.appendChild(buttonClose)
    div2.append(h3, textarea, buttonSubmit)
    section.append(div1, div2)
    body.appendChild(section)
}