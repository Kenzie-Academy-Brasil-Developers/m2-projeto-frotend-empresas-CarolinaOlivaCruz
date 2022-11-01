const baseUrl = 'http://localhost:6278/'
const token = localStorage.getItem('token')
const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
}

export async function getCompanies() {

    try {
        const response = await fetch(`${baseUrl}companies`, {
            method: 'GET',
            headers: headers
        })

        const responseJson = response.json()
        return responseJson
    }
    catch (err) {
        console.log(err)
    }
}


export async function getSectors() {
    try {
        const response = await fetch(`${baseUrl}sectors`, {
            method: 'GET',
            headers: headers
        })
        const responseJson = response.json()
        return responseJson
    }
    catch (err) {
        console.log(err)
    }
}


export async function postLogin(data) {
    console.log(data);
    try {
        const response = await fetch(`${baseUrl}auth/login`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        })

        const responseJson = await response.json()
        localStorage.setItem('token', responseJson.token)

        if (responseJson.token) {
            console.log('deu certo')
        }
    }
    catch (err) {
        console.log(err)
        console.log('deu ruim');
    }
}


export async function postRegister(data) {
    console.log(data);
    try {
        const response = await fetch(`${baseUrl}auth/register`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        })

        const responseJson = await response.json()

        if (response.status < 300) {
            window.location.assign('../../pages/login/index.html')
        }
    }
    catch (err) {
        console.log(err);
    }
}

export async function getProfile() {
    const response = await fetch(`${baseUrl}users/profile`, {
        method: 'GET',
        headers: headers
    })
    const responseJson = await response.json()
    return responseJson
}

export async function getCoworkers() {
    const response = await fetch(`${baseUrl}users/departments/coworkers`, {
        method: 'GET',
        headers: headers
    })

    const responseJson = await response.json()
    return responseJson
}


export async function patchUser(newData) {
    try {
        const response = await fetch(`${baseUrl}users`, {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify(newData)
        })

        const responseJson = await response.json()
        
        return responseJson
    }
    catch (err) {
        console.log(err);
    }

}