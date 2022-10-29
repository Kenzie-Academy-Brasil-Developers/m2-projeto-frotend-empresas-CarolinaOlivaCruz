import { getCompanies } from "../../js/api.js"
import { getSectors } from "../../js/api.js"

import { buttonLogin } from "../../js/button.js"
import { buttonRegister } from "../../js/button.js"

const arrayCompanies = await getCompanies()

async function renderList(array) {
    const ul = document.querySelector('.list-companies')
    ul.innerHTML = ''
    
    array.forEach(element => {
        const li = document.createElement('li')

        const div = document.createElement('div')
        const h3 = document.createElement('h3')
        h3.innerText = element.name
        const pHours = document.createElement('p')
        pHours.innerText = element.opening_hours
        const pSector = document.createElement('p')
        pSector.innerText = element.sectors.description

        div.append(h3, pHours, pSector)
        li.appendChild(div)
        ul.appendChild(li)
    });

    return ul
}


async function containerSectors() {
    const ul = document.querySelector('.list-sectors')
    const arraySectors = await getSectors()

    arraySectors.forEach(element => {
        const li = document.createElement('li')
        const button = document.createElement('button')
        button.className = 'button-sector'
        button.innerText = element.description
        button.addEventListener('click', async (e) => {
            e.preventDefault()
            await filter(element.description)
        })
        li.appendChild(button)
        ul.appendChild(li)
    })
}

async function filter(button) {
    const arrayCompanies = await getCompanies()
    const filter = arrayCompanies.filter(element => element.sectors.description == button)

    renderList(filter)
}

renderList(arrayCompanies)
containerSectors()
buttonLogin('./pages/login/index.html')
buttonRegister('./pages/register/index.html')
