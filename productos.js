class nuevosProductos {
    constructor(id, tipo, precio, img){
    this.id = id
    this.tipo = tipo
    this.precio = precio
    this.img = img
    }
}

let stock = [
    {"id" : 0, "tipo" : "Cuchillo", "precio" : 2000, "img": "./img/Cuchillo1.jpeg"},
    {"id" : 1, "tipo" : "Cuchillo", "precio" : 3000, "img": "./img/cuchillo2.jpeg"},
    {"id" : 2, "tipo" : "Cuchillo", "precio" : 5000, "img": "./img/cuchillo3.jpeg"},
    {"id" : 3, "tipo" : "Bombilla", "precio" : 1500, "img": "./img/bombilla1.jpeg"},
    {"id" : 4, "tipo" : "Bombilla", "precio" : 6500, "img": "./img/bombilla2.jpeg"},
    {"id" : 5, "tipo" : "Bombilla", "precio" : 500, "img": "./img/bombilla3.jpeg"},
    {"id" : 6, "tipo" : "Mate", "precio" : 2500, "img": "./img/mate1.jpeg"},
    {"id" : 7, "tipo" : "Mate", "precio" : 3450, "img": "./img/mate2.jpeg"},
    {"id" : 8, "tipo" : "Mate", "precio" : 9999, "img": "./img/mate3.jpeg"},
    {"id" : 9, "tipo" : "Hebilla", "precio" : 6784, "img": "./img/hebilla1.jpeg"},
    {"id" : 10, "tipo" : "Hebilla", "precio" : 2333, "img": "./img/hebilla2.jpeg"},  
]

const hebilla3 = new nuevosProductos (11, "Hebilla", 2299, "./img/hebilla3.jpeg")
stock.push(hebilla3)