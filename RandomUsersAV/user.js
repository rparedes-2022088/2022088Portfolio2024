//Asíncrona
//Esperar a que se ejecuten por completo una instrucción,
//sin obstruir el hilo de procesos.

//Formas de manejar la asíncronia:
/*
    1. Callbacks - está en desuso
    2. Promesas
    3. Async / Await - la mejor opción
*/

//callback
/*
function getUsersWithCallback(callback) {
    fetch('https://randomuser.me/api/') //consulta a un Endpoint
        .then(response => response.json()) //traducir o entender el json
        .then(data => {
            const { results } = data;
            callback(null, results); //1. error, 2. respuesta
        })
        .catch(error => {
            console.error(error);
            callback(error, null);
        })
}

getUsersWithCallback((error, results) => {
    if(error) console.error(error)
    const name = document.getElementById('name');
    const surname = document.getElementById('surname');
    const phone = document.getElementById('phone');
    for (const user of results) {
        name.innerText = user.name.first;
        surname.innerText = user.name.last;
        phone.innerText = user.phone;
    }
})
*/

//promises
/*
const getUsersWithPromise = ()=>{
    return new Promise((resolve, reject)=>{
        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const {results} = data;
            resolve(results);
        })
        .catch(error => reject(error)) 
    })
}

getUsersWithPromise()
    .then(results => {
        const name = document.getElementById('name');
        const surname = document.getElementById('surname');
        const phone = document.getElementById('phone');
        for (const user of results) {
            name.innerText = user.name.first;
            surname.innerText = user.name.last;
            phone.innerText = user.phone;
        }
    })
    .catch(error => console.error(error))
*/

//asyn / await
const getUserWithAsync = async ()=>{
    try {
        const response = await fetch('https://randomuser.me/api/?results=10') //automaticamento lo guarda en la constante
        const {results} = await response.json() //desestructuro y lo parseo
        const tabla = document.getElementById('tabla')
        for (const user of results) {
            tabla.innerHTML += `
                <tr>
                    <th>${user.name.first}</th>
                    <th>${user.name.last}</th>
                    <th>${user.phone}</th>
                </tr>
                `
        }    
    } catch (error) {
        console.error(error)
    }
}

getUserWithAsync()