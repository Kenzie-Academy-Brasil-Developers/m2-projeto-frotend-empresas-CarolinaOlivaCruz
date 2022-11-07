import { patchUser } from "./api.js"
import { renderUsers } from "../pages/admin-page/index.js"

export function editUser(idUser) {

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
    h3.innerText = 'Editar Usuário'
    h3.className = 'modal-name'

    const select1 = document.createElement('select')
    select1.required = 'true'

    const option1Work = document.createElement('option')
    option1Work.innerText = 'Selecionar modalidade de trabalho '
    option1Work.disabled = 'true'
    option1Work.selected = 'true'

    const option2Work = document.createElement('option')
    option2Work.innerText = 'hibrido'
    option2Work.value = 'hibrido'

    const option3Work = document.createElement('option')
    option3Work.innerText = 'home-office'
    option3Work.value = 'home office'

    const option4Work = document.createElement('option')
    option4Work.innerText = 'presencial'
    option4Work.value = 'presencial'

    const select2 = document.createElement('select')
    select2.required = 'true'

    const option1 = document.createElement('option')
    option1.innerText = 'Selecionar nível profissional'
    option1.disabled = 'true'
    option1.selected = 'true'

    const option2 = document.createElement('option')
    option2.innerText = 'estágio'
    option2.value = 'estágio'

    const option3 = document.createElement('option')
    option3.innerText = 'júnior'
    option3.value = 'júnior'

    const option4 = document.createElement('option')
    option4.innerText = 'pleno'
    option4.value = 'pleno'

    const option5 = document.createElement('option')
    option5.innerText = 'sênior'
    option5.value = 'sênior'

    const buttonEdit = document.createElement('button')
    buttonEdit.innerText = 'Editar o usuário'
    buttonEdit.type = 'submit'
    buttonEdit.addEventListener('click', async (e) => {
        e.preventDefault()
        const newData = {
            kind_of_work: select1.value,
            professional_level: select2.value
        }
       
        await patchUser(newData, idUser)
        renderUsers()
    })

    div1.appendChild(buttonClose)
    select1.append(option1Work, option2Work, option3Work, option4Work)
    select2.append(option1, option2, option3, option4, option5)
    div2.append(h3, select1, select2)
    div.append(div1, div2, buttonEdit)
    section.append(div)
    body.appendChild(section)
}