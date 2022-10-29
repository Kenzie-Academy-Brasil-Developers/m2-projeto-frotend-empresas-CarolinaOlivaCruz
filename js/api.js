const baseUrl = 'http://localhost:6278/'
const headers = {
    'Content-Type': 'application/json'
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


export async function getSectors(){
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