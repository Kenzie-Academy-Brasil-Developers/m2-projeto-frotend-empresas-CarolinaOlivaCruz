import { getUsers } from "./api.js"



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
    const select = document.createElement('select')
    const option = document.createElement('option')
    const buttonAdd = document.createElement('button')
    buttonAdd.innerText = 'Contratar'
    
    const div3 = document.createElement('div')

    const ul = document.createElement('ul')
    const pNotUsers = document.createElement('p')

    const arrayUserDepart = users.filter(user => user.department_uuid == department.uuid)
    if (arrayUserDepart.length != 0) {
        
        arrayUserDepart.forEach(user => {

            const li = document.createElement('li')
            const divUser = document.createElement('div')
            const h4 = document.createElement('h4')
            h4.innerText = user.username
            const pLevel = document.createElement('p')
            pLevel.innerHTML = user.professional_level

            const pCompanie = document.createElement('p')
            pCompanie.innerText = department.companies.name

            const buttonRemove = document.createElement('button')
            divUser.append(h4, pLevel, pCompanie)
            li.append(divUser, buttonRemove)
            ul.appendChild(li)
        })
    }
    else {
        pNotUsers.innerText = 'Este setor não tem usuários'
    }


    div1.appendChild(buttonClose)

    p1.appendChild(strong)
    divDescription.append(p1, p2)

    select.appendChild(option)
    form.append(select, buttonAdd)

    div2.append(divDescription, form)

    div3.appendChild(ul)

    section.append(div1, h3, div2, div3, pNotUsers)
    body.appendChild(section)

}
