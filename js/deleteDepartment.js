import { deleteDepartment } from "./api.js"
import { deleteUser } from "./api.js"

export function deleteConfirm(question, id, imgAlt) {
  console.log(id);
  const body = document.querySelector('body')
  const section = document.createElement('section')
  section.className = 'section-modal'

  const div = document.createElement('div')
  div.className = 'container-modal'

  const div1 = document.createElement('div')
  div1.className = 'div-button'
  const buttonClose = document.createElement('button')
  buttonClose.innerText = 'X'
  buttonClose.addEventListener('click', () => window.location.replace('./index.html'))

  const div2 = document.createElement('div')

  const h3 = document.createElement('h3')
  h3.innerText = question

  const buttonDelete = document.createElement('button')
  buttonDelete.innerText = 'Confirmar'
  buttonDelete.addEventListener('click', async (e) => {
    e.preventDefault()
    if (imgAlt == 'lixeira departamento') {
      await deleteDepartment(id)
    }
    else if (imgAlt == 'lixeira funcionário') {
      await deleteUser(id)
     
    }
    
  })

  div1.appendChild(buttonClose)
  div2.append(h3, buttonDelete)
  div.append(div1, div2)
  section.append(div)
  body.appendChild(section)
}