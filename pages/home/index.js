import { getCompanies } from "../../js/api.js"
import { buttonLogin } from "../../js/button.js"
import { buttonRegister } from "../../js/button.js"

async function renderList() {
    const ul = document.querySelector('.list-companies')
    const api = await getCompanies()
    
    api.forEach(element => {
       
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
renderList()

buttonLogin('./pages/login/index.html')
buttonRegister('./pages/register/index.html')