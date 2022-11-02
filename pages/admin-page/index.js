import { getCompanies } from "../../js/api.js"
import { getCompanieDepartments } from "../../js/api.js"


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

    select.addEventListener('change', async function () {
        const ul = document.querySelector('.list-department')
        ul.innerHTML = ''
        const id = select.value
        const arrayDepartment = await getCompanieDepartments(id)
        renderDepartment(arrayDepartment)
    })
}


function renderDepartment(array) {

    const ul = document.querySelector('.list-department')

    array.forEach(department => {
        console.log(department)
    
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
    return ul
}


listDepartment()
