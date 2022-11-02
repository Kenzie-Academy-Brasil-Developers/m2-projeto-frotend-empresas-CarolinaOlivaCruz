import { getProfile } from "../../js/api.js"
import { buttonLogout } from "../../js/button.js"
import { getCoworkers } from "../../js/api.js"
import { openEditProfile } from "../../js/edit-profile.js"


async function renderUser() {
    const profile = await getProfile()

    const div = document.querySelector('.container-profile')

    const h3 = document.createElement('h3')
    h3.innerText = profile.username

    const divData = document.createElement('div')
    const pEmail = document.createElement('p')
    pEmail.innerText = profile.email
    const pLevel = document.createElement('p')
    pLevel.innerText = profile.professional_level
    const plocal = document.createElement('p')
    plocal.innerText = profile.kind_of_work
    if (profile.kind_of_work == null) {
        plocal.innerText = 'Não contratado'
    }

    divData.append(pEmail, pLevel, plocal)
    div.append(h3, divData)
}


async function renderDashboard() {

    const arrayDepart = await getCoworkers()
    const profile = await getProfile()

    const section = document.querySelector('.container-dashboard')

    if (profile.department_uuid == null) {
        const h3 = document.createElement('h3')
        h3.innerText = 'Você ainda não foi contratado'

        section.appendChild(h3)
    }
    else {
        const div1 = document.createElement('div')
        const h3 = document.createElement('h3')
        h3.innerText = `Company Name - ${arrayDepart[0].name}`
        const div2 = document.createElement('div')
        const ul = document.createElement('ul')

        const arrayCoworkers = arrayDepart[0].users.filter(element => element.email != profile.email)

        arrayCoworkers.forEach(element => {
            const li = document.createElement('li')
            const pName = document.createElement('p')
            const strong = document.createElement('strong')
            strong.innerText = element.username
            const pLevel = document.createElement('p')
            pLevel.innerText = element.professional_level

            pName.appendChild(strong)
            li.append(pName, pLevel)
            ul.appendChild(li)
        });

        div1.appendChild(h3)
        div2.appendChild(ul)
        section.append(div1, div2)
    }
}








openEditProfile()
renderUser()
renderDashboard()
buttonLogout('../../index.html')