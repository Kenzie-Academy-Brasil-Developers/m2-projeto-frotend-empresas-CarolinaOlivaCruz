import { getCompanies } from "../../js/api.js"
import { getCompanieDepartments } from "../../js/api.js"
import { getUsers } from "../../js/api.js"
import { buttonLogout } from "../../js/button.js"
import { getDepartments } from "../../js/api.js"
import { viewDepartment } from "../../js/view-departmente.js"
import { editDepartment } from "../../js/edit-department.js"
import { deleteConfirm } from "../../js/deleteDepartment.js"
import { buttonCreate } from "../../js/create-department.js"
import { editUser } from "../../js/edit-user.js"


async function selectCompanie(buttonSelect) {

    const arrayCompanies = await getCompanies()

    arrayCompanies.forEach(objCompanie => {
        const buttonOption = document.createElement('option')
        buttonOption.value = objCompanie.uuid
        buttonOption.innerText = objCompanie.name
        
        buttonSelect.appendChild(buttonOption)
    })
}


async function listDepartment() {
    const select = document.querySelector('.select-companie')
    const ulDepartment = document.querySelector('.list-department')
    
    await selectCompanie(select)

    select.addEventListener('change', async function () {
        ulDepartment.innerHTML = ''

        const id = select.value
        const arrayDepartment = await getCompanieDepartments(id)

        renderDepartment(arrayDepartment)
    })
}


function renderDepartment(array) {
    const ul = document.querySelector('.list-department')

    array.forEach(async department => {

        const li = document.createElement('li')

        const div1 = document.createElement('div')
        const h4 = document.createElement('h4')
        h4.innerText = department.description
        const pDescription = document.createElement('p')
        pDescription.innerText = department.companies.description
        const pName = document.createElement('p')
        pName.innerText = department.companies.name

        const div2 = document.createElement('div')
        const buttonView = document.createElement('button')
        buttonView.className = 'button-view'
        buttonView.id = department.uuid
        const imgView = document.createElement('img')
        imgView.src = '../../src/admin-page/icon-view.svg'
        buttonView.addEventListener('click', (e) => {
            e.preventDefault()
            viewDepartment(department)
        })
        
        const buttonPen = document.createElement('button')
        buttonPen.className = 'button-pen'
        buttonPen.id = department.uuid
        const imgPen = document.createElement('img')
        imgPen.src = '../../src/admin-page/icon-pen.svg'
        buttonPen.addEventListener('click',async (e) => {
            e.preventDefault()
            if(buttonPen.id == department.uuid){
               await editDepartment(department.uuid, department.description)
            }
        })


        const buttonDelete = document.createElement('button')
        buttonDelete.className = 'button-delete'
        buttonDelete.id = department.uuid
        const imgDelete = document.createElement('img')
        imgDelete.src = '../../src/admin-page/icon-delete.svg'
        imgDelete.alt = 'lixeira departamento'
        buttonDelete.addEventListener('click', (e) => {
            e.preventDefault()
            if(buttonDelete.id == department.uuid){
                const question = `Realmente deseja deletar o departamento ${department.description} e demitir seus funcionários?`
               deleteConfirm(question, department.uuid, imgDelete.alt)
            }
        })


        div1.append(h4, pDescription, pName)
        buttonView.appendChild(imgView)
        buttonPen.appendChild(imgPen)
        buttonDelete.appendChild(imgDelete)
        div2.append(buttonView, buttonPen, buttonDelete)
        li.append(div1, div2)
        ul.appendChild(li)

    })
}



async function renderUsers() {

    const ul = document.querySelector('.list-users')
    const array = await getUsers()
    const arrayDepartment = await getDepartments()

    array.forEach(user => {
        if (!user.is_admin) {

            const li = document.createElement('li')

            const div1 = document.createElement('div')
            const h4 = document.createElement('h4')
            h4.innerText = user.username

            const pDescription = document.createElement('p')
            pDescription.innerText = user.professional_level


            const pName = document.createElement('p')

            arrayDepartment.forEach(dept => {
                if (dept.uuid == user.department_uuid) {
                    pName.innerText = dept.companies.name
                } else if (user.department_uuid == null) {
                    pName.innerText = 'Não está contratado'
                }
            })

            const div2 = document.createElement('div')
            const buttonPen = document.createElement('button')
            buttonPen.id = user.uuid
            const imgPen = document.createElement('img')
            imgPen.src = '../../src/admin-page/icon-pen.svg'
            buttonPen.addEventListener('click',(e) => {
                e.preventDefault()
                if(buttonPen.id == user.uuid){
                  editUser(user.uuid)
                }
            })


            
            const buttonDelete = document.createElement('button')
            const imgDelete = document.createElement('img')
            buttonDelete.id = user.uuid
            imgDelete.src = '../../src/admin-page/icon-delete.svg'
            imgDelete.alt = 'lixeira funcionário'
            buttonDelete.addEventListener('click', (e) => {
                e.preventDefault()
                if(buttonDelete.id == user.uuid){
                    const question = `Realmente deseja remover o usuário ${user.username}?`
                   deleteConfirm(question, user.uuid, imgDelete.alt)
                }
            })


            div1.append(h4, pDescription, pName)
            buttonPen.appendChild(imgPen)
            buttonDelete.appendChild(imgDelete)
            div2.append(buttonPen, buttonDelete)
            li.append(div1, div2)
            ul.appendChild(li)

        }
    })
}

renderUsers()
listDepartment()
buttonLogout('../../index.html')
buttonCreate()