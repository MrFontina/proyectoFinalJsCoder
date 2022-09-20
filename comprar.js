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




let apiDolarUrl = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"


fetch(apiDolarUrl)
    .then((response) => response.json())
    .then((dolar) => {console.log(dolar[1].casa.venta)})


