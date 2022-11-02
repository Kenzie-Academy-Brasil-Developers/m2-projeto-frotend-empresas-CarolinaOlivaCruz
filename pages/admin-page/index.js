import { getCompanies } from "../../js/api.js"
import { getCompanieDepartments } from "../../js/api.js"
import { getUsers } from "../../js/api.js"

async function selectCompanie() {

    const buttonSelect = document.querySelector('.select-companie')

    const arrayCompanies = await getCompanies()
    arrayCompanies.forEach(objCompanie => {
        const buttonOption = document.createElement('option')
        buttonOption.value = objCompanie.uuid
        buttonOption.innerText = objCompanie.name

        buttonSelect.appendChild(buttonOption)
    });
}


async function listDepartment() {
    await selectCompanie()

    const select = document.querySelector('.select-companie')
    const ulDepartment = document.querySelector('.list-department')
    const ulUsersCompanie = document.querySelector('.list-users')

    select.addEventListener('change', async function () {
        ulDepartment.innerHTML = ''
        ulUsersCompanie.innerHTML = ''
        const id = select.value
        const arrayDepartment = await getCompanieDepartments(id)

        renderDepartment(arrayDepartment)
        filterUsersCompanie(arrayDepartment)
    })
}


function renderDepartment(array) {

    const ul = document.querySelector('.list-department')

    array.forEach(department => {

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
        const buttonPen = document.createElement('button')
        const buttonDelete = document.createElement('button')

        div1.append(h4, pDescription, pName)
        div2.append(buttonView, buttonPen, buttonDelete)
        li.append(div1, div2)
        ul.appendChild(li)

    })
}



function filterUsersCompanie(arrayDepartment) {
    console.log(arrayDepartment);
    arrayDepartment.forEach(async (department) => {

        const arrayUsers = await getUsers()
        let arrayFilter = arrayUsers.filter(user => user.department_uuid == department.uuid)

        renderUsers(arrayFilter, department.companies.name)
    })
}


function renderUsers(array, nameCompanie) {
    console.log(array)
    console.log(nameCompanie);
    const ul = document.querySelector('.list-users')
    
    array.forEach(user => {
        const li = document.createElement('li')

        const div1 = document.createElement('div')
        const h4 = document.createElement('h4')
        h4.innerText = user.username

        const pDescription = document.createElement('p')
        pDescription.innerText = user.professional_level

        const pName = document.createElement('p')
        pName.innerText = nameCompanie

        const div2 = document.createElement('div')
        const buttonPen = document.createElement('button')
        const buttonDelete = document.createElement('button')

        div1.append(h4, pDescription, pName)
        div2.append(buttonPen, buttonDelete)
        li.append(div1, div2)
        ul.appendChild(li)
    })

}






listDepartment()
