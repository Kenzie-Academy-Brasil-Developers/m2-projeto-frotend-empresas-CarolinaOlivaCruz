import { buttonLogin } from "../../js/button.js"
import { buttonRegister } from "../../js/button.js"
import { postLogin } from "../../js/api.js"


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
    console.log(data)

    const returnApi = await postLogin(data)
    if (returnApi != undefined) {
      console.log(returnApi);
      window.location.assign('../../pages/user-page/index.html')
    }
     else {
      inputs[0].value = ''
      inputs[1].value = ''
    }
  })
}




login()
buttonLogin('../../pages/login/index.html')
buttonRegister('../../pages/register/index.html')