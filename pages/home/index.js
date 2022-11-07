import { getCompanies } from "../../js/api.js"
import { getSectors } from "../../js/api.js"
import { buttonLoginDesk } from "../../js/button.js"
import { buttonRegisterDesk } from "../../js/button.js"
import { navButton } from "../../js/button.js"

const arrayCompanies = await getCompanies()

async function renderList(array) {
    const ul = document.querySelector('.list-companies')
    ul.innerHTML = ''

    array.forEach(element => {
        const li = document.createElement('li')

        const div = document.createElement('div')
        div.className = 'container-list-data'
        const h3 = document.createElement('h3')
        h3.innerText = element.name
        const pHours = document.createElement('p')
        pHours.innerText = element.opening_hours
        const div2 = document.createElement('div')
        const pSector = document.createElement('p')
        pSector.className = 'p-sector'
        pSector.innerText = element.sectors.description
       
       
        div2.appendChild(pSector)
        div.append(h3, pHours, div2)
        li.appendChild(div)
        ul.appendChild(li)
    })

    return ul
}


async function containerSectors() {
    const select = document.querySelector('.list-sectors')
    const arraySectors = await getSectors()

    const optionAll = document.createElement('option')
    optionAll.value = 'Todos'
    optionAll.innerText = 'Todos'

    arraySectors.forEach(element => {
        const option = document.createElement('option')
        option.value = element.description
        option.innerText = element.description
        option.addEventListener('click', async (e) => {
            e.preventDefault()
            console.log(button);
            const h2 = document.querySelector('.home-select')
            h2.innerText = option.innerText
        })
        select.appendChild(option)
    })

    select.appendChild(optionAll)
    filter(select)
}


async function filter(select) {

    const arrayCompanies = await getCompanies()

    select.addEventListener('change', async () => {
        console.log(select.value);
        if (select.value == 'Todos') {
            renderList(arrayCompanies)
        }
        else {
            const filter = arrayCompanies.filter(element => element.sectors.description == select.value)
            console.log(filter);
            renderList(filter)
        }
    })
}

containerSectors()
navButton('index.html', './pages/login/index.html', './pages/register/index.html')
buttonRegisterDesk('./pages/register/index.html')
buttonLoginDesk('./pages/login/index.html')
renderList(arrayCompanies)
