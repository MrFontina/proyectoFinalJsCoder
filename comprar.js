let elementosDelChango = document.getElementById('elementosDelChango')

let obtenerDatosDelLocalStorage = JSON.parse(localStorage.getItem('chango'))

console.log(obtenerDatosDelLocalStorage)



obtenerDatosDelLocalStorage.forEach((prod) => {
    const div = document.createElement('div')
    div.classList.add('productoFinal')
    div.innerHTML = `<div><p>${prod.tipo}</p>
    <p>Precio: ${prod.precio}</p>
    <img src=".${prod.img}">
    </div>`
    elementosDelChango.appendChild(div)
})


let urlFetch = "https://api-dolar-argentina.herokuapp.com/api/dolarblue"

fetch(urlFetch)
    .then((res) => res.json())
    .then((dolar) => {console.log(dolar)})