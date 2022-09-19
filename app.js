let contenedorProductos = document.getElementById('contenedorProductos')

let btnCuchillos = document.getElementById('btnCuchillos')

let btnMates = document.getElementById('btnMates')

let btnHebillas = document.getElementById('btnHebillas')

let btnBombillas = document.getElementById('btnBombillas')

let btnTodos = document.getElementById('btnTodos')

let btnComprar = document.getElementById('btnComprar')

// let form = document.getElementById('form')

// let filtro = document.getElementById('filtro').value






//TODOS LOS PRODUCTOS

stock.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
        <h4>${producto.tipo}</h4>
        <p>Precio: ${producto.precio}</p>
        <img src="${producto.img} ">
        <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
    `
    contenedorProductos.appendChild(div)
    const boton = document.getElementById(`agregar${producto.id}`)
    boton.addEventListener('click', () => {
    agregarAlChango(producto.id)
    })
})


//FILTROS

filtrarPorCuchillos = () => {
    while (contenedorProductos.firstChild) {
        contenedorProductos.removeChild(contenedorProductos.firstChild);
    }
    stock.filter(producto => producto.tipo === "Cuchillo").forEach((producto) => {

        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
            <h4>${producto.tipo}</h4>
            <p>Precio: ${producto.precio}</p>
            <img src="${producto.img} ">
            <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
        `
        contenedorProductos.appendChild(div)
        const boton = document.getElementById(`agregar${producto.id}`)

        boton.addEventListener ('click', () => {
            agregarAlChango(producto.id)
        })
    })
}





filtrarPorMates = () => {
    while (contenedorProductos.firstChild) {
        contenedorProductos.removeChild(contenedorProductos.firstChild);
    }
    stock.filter(producto => producto.tipo === "Mate").forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
            <h4>${producto.tipo}</h4>
            <p>Precio: ${producto.precio}</p>
            <img src="${producto.img} ">
            <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
        `
        contenedorProductos.appendChild(div)
        const boton = document.getElementById(`agregar${producto.id}`)

        boton.addEventListener ('click', () => {
            agregarAlChango(producto.id)
        })
    })
}



filtrarPorBombillas = () => {
    while (contenedorProductos.firstChild) {
        contenedorProductos.removeChild(contenedorProductos.firstChild);
    }
    stock.filter(producto => producto.tipo === "Bombilla").forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
            <h4>${producto.tipo}</h4>
            <p>Precio: ${producto.precio}</p>
            <img src="${producto.img} ">
            <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
        `
        contenedorProductos.appendChild(div)
        const boton = document.getElementById(`agregar${producto.id}`)

        boton.addEventListener ('click', () => {
            agregarAlChango(producto.id)
        })
    })
}

filtrarPorHebillas = () => {
    while (contenedorProductos.firstChild) {
        contenedorProductos.removeChild(contenedorProductos.firstChild);
    }
    stock.filter(producto => producto.tipo === "Hebilla").forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
            <h4>${producto.tipo}</h4>
            <p>Precio: ${producto.precio}</p>
            <img src="${producto.img} ">
            <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
        `
        contenedorProductos.appendChild(div)
        const boton = document.getElementById(`agregar${producto.id}`)

        boton.addEventListener ('click', () => {
            agregarAlChango(producto.id)
        })
    })
}

todosAgain = () => {
    while (contenedorProductos.firstChild) {
        contenedorProductos.removeChild(contenedorProductos.firstChild);
    }
    stock.forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
            <h4>${producto.tipo}</h4>
            <p>Precio: ${producto.precio}</p>
            <img src="${producto.img} ">
            <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
        `
        contenedorProductos.appendChild(div)
        const boton = document.getElementById(`agregar${producto.id}`)

        boton.addEventListener ('click', () => {
            agregarAlChango(producto.id)
        })
    
        
    })    
}


//EVENTOS

btnCuchillos.addEventListener('click', filtrarPorCuchillos)
btnMates.addEventListener('click', filtrarPorMates)
btnBombillas.addEventListener('click', filtrarPorBombillas)
btnHebillas.addEventListener('click', filtrarPorHebillas)
btnTodos.addEventListener('click', todosAgain)