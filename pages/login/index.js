import { buttonLogin } from "../../js/button.js"
import { buttonRegister } from "../../js/button.js"
import { postLogin } from "../../js/api.js"


function login() {
  const form = document.querySelector('#containerLogin')
  const inputEmail = form.children[2]
  const inputPassaword = form.children[4]
  const buttonSubmit = form.children[5]

  buttonSubmit.addEventListener('click', async (e) => {
    e.preventDefault()
    let data = {
      email: inputEmail.value,
      password: inputPassaword.value
    }

    const returnApi = await postLogin(data)
    if (returnApi != undefined) {
      console.log(returnApi);
    } else {
      inputs[0].value = ''
      inputs[1].value = ''
    }
  })
}




login()
buttonLogin('../../pages/login/index.html')
buttonRegister('../../pages/register/index.html')