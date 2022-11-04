import { deleteDepartment } from "./api.js"
import { deleteUser } from "./api.js"

export function deleteConfirm(question, id, imgAlt) {
    console.log(id);
    const body = document.querySelector('body')
    const section = document.createElement('section')

    const div1 = document.createElement('div')
    const buttonClose = document.createElement('button')
    buttonClose.innerText = 'X'
    buttonClose.addEventListener('click', () => section.innerHTML = '')

    const div2 = document.createElement('div')

    const h3 = document.createElement('h3')
    h3.innerText = question

    const buttonDelete = document.createElement('button')
    buttonDelete.innerText = 'Confirmar'
    buttonDelete.addEventListener('click', async (e) => {
        e.preventDefault()
        if (imgAlt == 'lixeira departamento') {
          await  deleteDepartment(id)
        }
        else if (imgAlt == 'lixeira funcionário') {
           await deleteUser(id)
        }
    })

    div1.appendChild(buttonClose)
    div2.append(h3, buttonDelete)
    section.append(div1, div2)
    body.appendChild(section)
}