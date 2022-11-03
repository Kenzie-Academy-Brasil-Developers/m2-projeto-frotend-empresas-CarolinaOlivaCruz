import { getUsers } from "./api.js"
import { getOutOfWork } from "./api.js"
import { patchHire } from "./api.js"


export async function viewDepartment(department) {

    const users = await getUsers()

    const body = document.querySelector('body')
    const section = document.createElement('section')

    const div1 = document.createElement('div')
    const buttonClose = document.createElement('button')
    buttonClose.innerText = 'X'
    buttonClose.addEventListener('click', () => section.innerHTML = '')

    const h3 = document.createElement('h3')
    h3.innerText = department.name

    const div2 = document.createElement('div')

    const divDescription = document.createElement('div')
    const p1 = document.createElement('p')
    const strong = document.createElement('strong')
    strong.innerText = department.description

    const p2 = document.createElement('p')
    p2.innerText = department.companies.name

    const form = document.createElement('form')

    const select = await listUserOutOfWork()
    const optionDescription = document.createElement('option')
    optionDescription.innerText = 'Selecione'
    optionDescription.disabled = 'true'
    optionDescription.selected = 'true'

    const buttonHire = document.createElement('button')
    buttonHire.className = 'buttonHire'
    buttonHire.innerText = 'Contratar'
    buttonHire.addEventListener('click', async (e) => {
        e.preventDefault()
       
        let data = {
            user_uuid: select.value,
            department_uuid: department.uuid
        }

        await patchHire(data)
    })

    const div3 = document.createElement('div')

    const pNotUsers = document.createElement('p')

    const arrayUserDepart = await users.filter(user => user.department_uuid == department.uuid)

    if (arrayUserDepart.length != 0) {
        const ul = listUserDepart(department.companies.name, arrayUserDepart)
        div3.appendChild(ul)
    }
    else {
        pNotUsers.innerText = 'Este setor não tem usuários'
    }

    div1.appendChild(buttonClose)

    p1.appendChild(strong)
    divDescription.append(p1, p2)

    select.appendChild(optionDescription)
    form.append(select, buttonHire)
    div2.append(divDescription, form)

    section.append(div1, h3, div2, div3, pNotUsers)
    body.appendChild(section)

}


function listUserDepart(department, arrayUserDepart) {
    const ul = document.createElement('ul')
    ul.innerHTML = ''
    arrayUserDepart.forEach(user => {
        const li = document.createElement('li')
        const divUser = document.createElement('div')
        const h4 = document.createElement('h4')
        h4.innerText = user.username
        const pLevel = document.createElement('p')
        pLevel.innerHTML = user.professional_level

        const pCompanie = document.createElement('p')
        pCompanie.innerText = department

        const buttonRemove = document.createElement('button')
        divUser.append(h4, pLevel, pCompanie)
        li.append(divUser, buttonRemove)

        ul.appendChild(li)
    })

    return ul
}


async function listUserOutOfWork() {

    const select = document.createElement('select')
    select.className = 'select-users-of'
    const arrayUser = await getOutOfWork()

    arrayUser.forEach(user => {
        const option = document.createElement('option')
        option.className = 'user-of'
        option.innerText = user.username
        option.value = user.uuid

        select.appendChild(option)
    })

    return select
}

