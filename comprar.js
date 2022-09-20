//Traigo los elementos del html

const elementosDelChango = document.getElementById('elementosDelChango')

let obtenerDatosDelLocalStorage = JSON.parse(localStorage.getItem('chango'))

const precioTotal = document.getElementById('precioTotal')

const btnConverter = document.getElementById('btnConverter')

const contenedorComprar = document.getElementById('contenedorComprar')

const btnFinalizar = document.getElementById('btnFinalizar')

//imagen para la alerta

const imgApu = "../img/apus.jpg"

//obtener los datos del chango en el local storage

obtenerDatosDelLocalStorage.forEach((prod) => {
    const div = document.createElement('div')
    div.classList.add('productoFinal')
    div.innerHTML = `<div><p>${prod.tipo}</p>
    <p>Precio en USD: ${prod.precio}</p>
    <img src=".${prod.img}">
    </div>`
    elementosDelChango.appendChild(div)
    precioTotal.innerText = obtenerDatosDelLocalStorage.reduce((acc, prod) => acc + prod.precio, 0)
})


//calcular el precio total y guardarlo en una variable para convertirlo a pesos argentinos

let precio = obtenerDatosDelLocalStorage.reduce((acc, prod) => acc + prod.precio, 0)

//obtener cotizacion del dolar blue desde una api, y multiplarlo por el precio anterior en USD

let dolarblue;

let precioFinal;

let apiDolarUrl = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"


multiplicar = (a, b) =>{
    return(a * b)
}

const getApi = async () => {
    const response = await fetch(apiDolarUrl)
    .then((response) => response.json())
    .then((dolar) => {dolarblue = (dolar[1].casa.venta) 
        let dolarBlueNumber = parseFloat(dolarblue)
        precioFinal = multiplicar(precio, dolarBlueNumber)
        let div = document.createElement('div')
        div.innerHTML = `<h4>Precio final en ARS:</h4>
        <p>${precioFinal}</p>
        `
        contenedorComprar.appendChild(div)

        console.log(dolarblue)   
        console.log(precioFinal)
    })
}

//eventos para ejecutar la conversion a ARS y para finalizar compra

btnConverter.addEventListener('click', getApi)

btnFinalizar.addEventListener('click', () => {swal({
    title: "Gracias por tu compra!!",
    text: "Vuelvas Prontos",
    icon: imgApu,
}) } )


