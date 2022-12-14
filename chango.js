//Funciones del changuito de compras

const contenedorChango = document.getElementById('contenedorChango')

let chango = []





document.addEventListener('DOMContentLoaded', () => {localStorage.getItem('chango') ? (chango = JSON.parse(localStorage.getItem('chango')), actualizarChango()) : null})

agregarAlChango = (prodId) => {
    const item = stock.find((prod) => prod.id === prodId)
    chango.push(item)
    actualizarChango()
}

actualizarChango = () => {
    contenedorChango.innerHTML = ""
    chango.forEach((prod) => {
        let div = document.createElement('div')
        div.innerHTML = `<div><p>Nombre del producto: ${prod.tipo}</p>
        <p>Precio: USD${prod.precio}<p/>
        <button onclick="eliminarDelChango(${prod.id}), toastifyDelete()" class="boton-eliminar">Eliminar<i class="fas fa-trash-alt"></i></button>
        </div>
        `
        contenedorChango.appendChild(div)
        // localStorage.setItem('chango', JSON.stringify(chango))
    })
    localStorage.setItem('chango', JSON.stringify(chango))
    precioTotal.innerText = chango.reduce((acc, prod) => acc + prod.precio, 0)
}

eliminarDelChango = (prodId) => {
    const itemRemove = chango.find((prod) => prod.id === prodId)
    const indice = chango.indexOf(itemRemove)
    chango.splice(indice, 1)
    actualizarChango()
}

