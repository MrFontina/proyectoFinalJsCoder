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
        div.innerHTML = `<div><p>Nombre del producto: ${prod.tipo}</p><p>Precio: ${prod.precio}<p/></div>`
        contenedorChango.appendChild(div)
    })
}