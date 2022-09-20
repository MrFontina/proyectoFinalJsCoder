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


let precio = 2

let dolarblue;

let precioFinal;

let apiDolarUrl = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"


let operation = (numero1, numero2, op) => {
    return op(numero1, numero2)
}

multiplicar = (a, b) =>{
    return(a * b)
}


fetch(apiDolarUrl)
    .then((response) => response.json())
    .then((dolar) => {dolarblue = (dolar[1].casa.venta) 
        let dolarBlueNumber = parseFloat(dolarblue)
        // precioFinal = operation(precio, dolarblue, (a, b) => a + b)
        precioFinal = multiplicar(precio, dolarBlueNumber)
        console.log(dolarblue)   
        console.log(precioFinal)
    })



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
