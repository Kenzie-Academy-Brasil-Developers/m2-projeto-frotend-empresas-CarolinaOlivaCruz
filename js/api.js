const baseUrl = 'http://localhost:6278/'

const token = localStorage.getItem('token')
const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
}

const tokenAdmin = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMjczOTBhZGYtMzhhNy00Y2VlLTg5ZWQtYzJiYWVmMzY4YmZmIiwiaXNfYWRtaW4iOnRydWUsImlhdCI6MTY2NjkxNzQyMywiZXhwIjoxNjY3NzgxNDIzLCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.1VEwu65jMWZXistVAMZrjTjkJ1KzsADjj08j-VPDlOA'
const headersa = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${tokenAdmin}`
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
            console.log(responseJson.token);
        }
    }
    catch (err) {
        console.log(err)
        console.log('deu ruim');
    }
}


export async function getTypeUser() {
    try {
        const response = await fetch(`${baseUrl}auth/validate_user`, {
            method: 'GET',
            headers: headers
        })
        const responseJson = await response.json()
        return responseJson
    }
    catch (err) {
        console.log(err);
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
        return responseJson
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


export async function patchProfile(newData) {
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


export async function getCompanieDepartments(id) {

    try {
        const response = await fetch(`${baseUrl}departments/${id}`, {
            method: 'GET',
            headers: headers
        })

        const responseJson = await response.json()

        return responseJson
    }
    catch (err) {
        console.log(err)
    }
}


export async function getUsers() {
    const response = await fetch(`${baseUrl}users`, {
        method: 'GET',
        headers: headers
    })

    const responseJson = response.json()
    return responseJson
}


export async function postDepartments(data) {
    try {
        const response = await fetch(`${baseUrl}departments`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        })

        const responseJson = response.json()
        return responseJson
    }
    catch (err) {
        console.log(err);
    }
}


export async function getDepartments() {

    try {
        const response = await fetch(`${baseUrl}departments`, {
            method: 'GET',
            headers: headers
        })

        const responseJson = await response.json()

        return responseJson
    }
    catch (err) {
        console.log(err)
    }
}


export async function getOutOfWork() {
    const response = await fetch(`${baseUrl}admin/out_of_work`, {
        method: 'GET',
        headers: headers
    })

    const responseJson = response.json()
    return responseJson
}


export async function patchHire(data) {
    try {
        const response = await fetch(`${baseUrl}departments/hire/`, {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify(data)
        })
        console.log(data)

        const responseJson = response.json()
        return responseJson
    }
    catch (err) {
        console.log(err);
    }
}


export async function patchRemoveUser(idUser) {
    try {
        const response = await fetch(`${baseUrl}departments/dismiss/${idUser}`, {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify()
        })
        const responseJson = response.json
        return responseJson
    }
    catch (err) {
        console.log(err)
    }
}


export async function patchDepartment(idDepartment, newDescription) {
    try {
        const response = await fetch(`${baseUrl}departments/${idDepartment}`, {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify(newDescription)
        })
        const responseJson = response.json
        return responseJson
    }
    catch (err) {
        console.log(err)
    }
}


export async function deleteDepartment(idDepartment) {
    try {
        const response = await fetch(`${baseUrl}departments/${idDepartment}`, {
            method: 'DELETE',
            headers: headers
        })
        return response

    }
    catch (err) {
        console.log(err);
    }
}

export async function deleteUser(idUser) {
    try {
        const response = await fetch(`${baseUrl}admin/delete_user/${idUser}`, {
            method: 'DELETE',
            headers: headers
        })
        return response
    }
    catch (err) {
        console.log(err);
    }
}


export async function patchUser(newData, idUser) {

    try {
        const response = await fetch(`${baseUrl}admin/update_user/${idUser}`, {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify(newData)
        })

        const responseJson = response.json()
        return responseJson
    }
    catch (err) {
        console.log(err);
    }
}