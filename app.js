//Obtengo elementos del html

let contenedorProductos = document.getElementById('contenedorProductos')

let btnCuchillos = document.getElementById('btnCuchillos')

let btnMates = document.getElementById('btnMates')

let btnHebillas = document.getElementById('btnHebillas')

let btnBombillas = document.getElementById('btnBombillas')

let btnTodos = document.getElementById('btnTodos')

let btnComprar = document.getElementById('btnComprar')

let btnVaciar = document.getElementById('btnVaciar')

let precioTotal = document.getElementById('precioTotal')

//TODOS LOS PRODUCTOS en el DOM

stock.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
        <h4>${producto.tipo}</h4>
        <p>Precio: USD ${producto.precio}</p>
        <img src="${producto.img} ">
        <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
    `
    contenedorProductos.appendChild(div)
    const boton = document.getElementById(`agregar${producto.id}`)
    boton.addEventListener('click', () => {
    agregarAlChango(producto.id), toastifyAdd()
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
            <p>Precio: USD${producto.precio}</p>
            <img src="${producto.img} ">
            <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
        `
        contenedorProductos.appendChild(div)
        const boton = document.getElementById(`agregar${producto.id}`)

        boton.addEventListener ('click', () => {
            agregarAlChango(producto.id), toastifyAdd()
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
            <p>Precio: USD${producto.precio}</p>
            <img src="${producto.img} ">
            <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
        `
        contenedorProductos.appendChild(div)
        const boton = document.getElementById(`agregar${producto.id}`)

        boton.addEventListener ('click', () => {
            agregarAlChango(producto.id), toastifyAdd()
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
            <p>Precio: USD${producto.precio}</p>
            <img src="${producto.img} ">
            <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
        `
        contenedorProductos.appendChild(div)
        const boton = document.getElementById(`agregar${producto.id}`)

        boton.addEventListener ('click', () => {
            agregarAlChango(producto.id), toastifyAdd()
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
            <p>Precio: USD${producto.precio}</p>
            <img src="${producto.img} ">
            <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
        `
        contenedorProductos.appendChild(div)
        const boton = document.getElementById(`agregar${producto.id}`)

        boton.addEventListener ('click', () => {
            agregarAlChango(producto.id), toastifyAdd()
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
            <p>Precio: USD${producto.precio}</p>
            <img src="${producto.img} ">
            <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
        `
        contenedorProductos.appendChild(div)
        const boton = document.getElementById(`agregar${producto.id}`)

        boton.addEventListener ('click', () => {
            agregarAlChango(producto.id), toastifyAdd()
        })
    
        
    })    
}


//EVENTOS

btnCuchillos.addEventListener('click', filtrarPorCuchillos)
btnMates.addEventListener('click', filtrarPorMates)
btnBombillas.addEventListener('click', filtrarPorBombillas)
btnHebillas.addEventListener('click', filtrarPorHebillas)
btnTodos.addEventListener('click', todosAgain)
btnVaciar.addEventListener('click', () => {
    chango.length = 0
    actualizarChango()
})

//notificaciones toastify

function toastifyAdd(){
    Toastify({
    text: "Agregaste un producto!",
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", 
    position: "right", 
    stopOnFocus: true, 
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    submit: function(){} 
  }).showToast();}

  function toastifyDelete(){
    Toastify({
    text: "Eliminaste un producto!",
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", 
    position: "right", 
    stopOnFocus: true, 
    style: {
      background: "red",
    },
    submit: function(){} 
  }).showToast();}