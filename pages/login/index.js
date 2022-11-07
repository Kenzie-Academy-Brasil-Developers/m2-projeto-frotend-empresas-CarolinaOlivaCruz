import { postLogin } from "../../js/api.js"
import { getTypeUser } from "../../js/api.js"
import { navButton } from "../../js/button.js"
import { buttonRegister } from "../../js/button.js"
import { buttonLoginDesk } from "../../js/button.js"
import { buttonRegisterDesk } from "../../js/button.js"

function login() {

  const inputEmail = document.getElementById('email')
  const inputPassaword = document.getElementById('password')
  const buttonSubmit = document.getElementById('loginSubmit')

  buttonSubmit.addEventListener('click', async (e) => {

    e.preventDefault()

    let data = {
      email: inputEmail.value,
      password: inputPassaword.value
    }

    if (data.email != '' && data.password != '') {

      const returnApi = await postLogin(data)

      if (returnApi != undefined) {
      const pError = document.querySelector('.p-error')
      pError.innerHTML = 'Email ou senha inválidos'
        console.log('Inválido');
      }
      else {
        const typeUser = await getTypeUser()
        inputEmail.value = ''
        inputPassaword.value = ''
        if (typeUser.is_admin == false) {
          window.location.replace('../../pages/user-page/index.html')
        }
        else if(typeUser.is_admin == true){
          window.location.replace('../../pages/admin-page/')
        }

      }
    }
  })
}




login()
buttonRegister()
buttonLoginDesk('../../pages/login/index.html')
buttonRegisterDesk('../../pages/register/index.html')
navButton('./index.html', '../../pages/login/index.html', '../../pages/register/index.html')
