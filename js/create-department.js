
import { getCompanies } from "./api.js"
import { postDepartments } from "./api.js"

export function buttonCreate() {
    const button = document.querySelector('.create-departmente')
    button.addEventListener('click', (e) => {
        e.preventDefault()
        createDepartment()
    })
}


async function createDepartment() {

    const body = document.querySelector('body')
    const section = document.createElement('section')

    const div1 = document.createElement('div')
    const buttonClose = document.createElement('button')
    buttonClose.innerText = 'X'
    buttonClose.addEventListener('click', () => section.innerHTML = '')

    const div2 = document.createElement('div')

    const input1 = document.createElement('input')
    input1.placeholder = 'Nome do departamento'
    input1.required = 'true'

    const input2 = document.createElement('input')
    input2.placeholder = 'Descrição'
    input2.required = 'true'

    const select = await selectCompanie()
    select.required = 'true'

    const buttonCreate = document.createElement('button')
    buttonCreate.innerText = 'Criar o departamento'
    buttonCreate.type = 'submit'
    buttonCreate.addEventListener('click', async (e) => {
        e.preventDefault()
        const newDepartment = {
            name: input1.value,
            description: input2.value,
            company_uuid: select.value
        }

       await postDepartments(newDepartment)
    })


    div2.append(input1, input2, select, buttonCreate)
    section.append(div1, div2)
    body.appendChild(section)
}


async function selectCompanie() {
    const select = document.createElement('select')
    select.className = 'select-companies'

    const optionSelect = document.createElement('option')
    optionSelect.innerText = 'Selecione uma empresa'
    optionSelect.disabled = 'true'
    optionSelect.selected = 'true'

    const arrayCompanies = await getCompanies()

    arrayCompanies.forEach(objCompanie => {
        const buttonOption = document.createElement('option')
        buttonOption.value = objCompanie.uuid
        buttonOption.innerText = objCompanie.name

        select.append(buttonOption)
    })

    select.appendChild(optionSelect)
    return select
}





