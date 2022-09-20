let elementosDelChango = document.getElementById('elementosDelChango')

let obtenerDatosDelLocalStorage = JSON.parse(localStorage.getItem('chango'))

let precioTotal = document.getElementById('precioTotal')

let btnConverter = document.getElementById('btnConverter')

let contenedorComprar = document.getElementById('contenedorComprar')
// console.log(obtenerDatosDelLocalStorage)



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



let precio = obtenerDatosDelLocalStorage.reduce((acc, prod) => acc + prod.precio, 0)

console.log(precio)

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

btnConverter.addEventListener('click', getApi)


// fetch(apiDolarUrl)
//     .then((response) => response.json())
//     .then((dolar) => {dolarblue = (dolar[1].casa.venta) 
//         let dolarBlueNumber = parseFloat(dolarblue)
//         precioFinal = multiplicar(precio, dolarBlueNumber)
//         console.log(dolarblue)   
//         console.log(precioFinal)
//     })




// const contenedorProductos = document.getElementById('contenedorProductos')





// fetch(apiDolarUrl)
//     .then((response) => response.json())
//     .then((dolar) => {
//         dolar.forEach((dolar) => {
//             const div = document.createElement('div')
//             div.innerHTML = `
//             <h4>Dolar Blue </h4>
//             <p>Venta${dolar.casa.venta}</p>            
//             `
//             contenedorProductos.appendChild(div)
//         })
//     }  ) 
