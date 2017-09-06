


//Ajax calls using Fetch.
//Returns Promises
//This function can be refactored for jQuery | SuperAgent | Axios
function fetchJson(url, options) {
    //fetch api, standard browser specification

    console.log(url, options);
    return window.fetch(url, options)
           .then ( response => {
               return response.json();
           })
}
 
export function getJson(url, options) {
    return fetchJson(url, options);
}


export function postJson(url, data, headers = undefined) {
    return fetchJson(url, {
        method: 'POST',
        headers: Object.assign({
                    'Content-Type': 'application/json'
                 }, headers),
        body: JSON.stringify(data)
    })
}


export function putJson(url, data, headers = undefined) {
    return fetchJson(url, {
        method: 'PUT',
        headers: Object.assign({
                    'Content-Type': 'application/json'
                 }, headers),
        body: JSON.stringify(data)
    })
}


export function deleteJson(url, data, headers = undefined) {
    return fetchJson(url, {
        method: 'DELETE',
        headers: headers,
        body: JSON.stringify(data)
    })
}