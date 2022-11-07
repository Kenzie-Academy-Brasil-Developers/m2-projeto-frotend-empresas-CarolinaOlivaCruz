import { buttonLoginDesk } from "../../js/button.js"
import { buttonRegisterDesk } from "../../js/button.js"
import { buttonReturn } from "../../js/button.js"
import { postRegister } from "../../js/api.js"
import { navButton } from "../../js/button.js"

function register() {
    const formRegister = document.querySelector('#containerRegister')
    const inputName = formRegister.children[1]
    const inputPassaword = formRegister.children[3]
    const inputEmail = formRegister.children[2]
    const inputLevel = formRegister.children[4]
    console.log(inputLevel);
    const buttonRegister = formRegister.children[5]

    buttonRegister.addEventListener('click', async (e) => {
        e.preventDefault()

        let dataRegister = {
            username: inputName.value,
            password: inputPassaword.value,
            email: inputEmail.value,
            professional_level: inputLevel.value,
            kind_of_work: null,
            department_uuid: null
        }
        await postRegister(dataRegister)
    })
}


register()
buttonLoginDesk('../../pages/login/index.html')
buttonRegisterDesk('../../pages/register/index.html')
navButton('../../pages/register/index.html', '../../pages/login/index.html', '../../pages/register/index.html')
buttonReturn('../../index.html')