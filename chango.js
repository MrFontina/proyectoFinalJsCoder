let contenedorChango = document.getElementById('contenedorChango')

let chango = []

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
        <p>Precio: ${prod.precio}<p/>
        <button onclick="eliminarDelChango(${prod.id})" class="boton-eliminar">Eliminar<i class="fas fa-trash-alt"></i></button>
        </div>
        `
        contenedorChango.appendChild(div)
        localStorage.setItem('chango', JSON.stringify(chango))
    })
}

eliminarDelChango = (prodId) => {
    const itemRemove = chango.find((prod) => prod.id === prodId)
    const indice = chango.indexOf(itemRemove)
    chango.splice(indice, 1)
    actualizarChango()
}