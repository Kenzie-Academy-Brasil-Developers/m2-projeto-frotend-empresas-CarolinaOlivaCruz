import { patchDepartment } from "./api.js"
import { renderDepartment } from "../pages/admin-page/index.js"
import { getCompanieDepartments } from "./api.js"

export async function editDepartment(department) {
    
    const body = document.querySelector('body')
    const section = document.createElement('section')
    section.className = 'section-modal'

    const div = document.createElement('div')
    div.className = 'container-modal'

    const div1 = document.createElement('div')
    div1.className = 'div-button'
    const buttonClose = document.createElement('button')
    buttonClose.innerText = 'X'
    buttonClose.addEventListener('click', () => {
        section.className = 'close'
        section.innerHTML = ''
    })

    const div2 = document.createElement('div')

    const h3 = document.createElement('h3')
    h3.innerText = 'Editar Departamento'
    h3.className = 'modal-name'

    const textarea = document.createElement('textarea')
    textarea.value = department.description

    const buttonSubmit = document.createElement('button')
    buttonSubmit.type = 'submit'
    buttonSubmit.innerText = 'Alterar o departamento'
    buttonSubmit.addEventListener('click', async (e) => {
        e.preventDefault()
        let newDescription = {
            description: textarea.value
        }

        await patchDepartment(department.uuid, newDescription)
        const listDepartment = await getCompanieDepartments(department.companies.uuid)
        renderDepartment(listDepartment)
    })

    div1.appendChild(buttonClose)
    div2.append(h3, textarea, buttonSubmit)
    div.append(div1, div2)
    section.append(div)
    body.appendChild(section)
}