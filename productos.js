class nuevosProductos {
    constructor(id, tipo, precio, img){
    this.id = id
    this.tipo = tipo
    this.precio = precio
    this.img = img
    }
}

let stock = [
    {"id" : 0, "tipo" : "Cuchillo", "precio" : 200, "img": "./img/Cuchillo1.jpeg"},
    {"id" : 1, "tipo" : "Cuchillo", "precio" : 300, "img": "./img/cuchillo2.jpeg"},
    {"id" : 2, "tipo" : "Cuchillo", "precio" : 500, "img": "./img/cuchillo3.jpeg"},
    {"id" : 3, "tipo" : "Bombilla", "precio" : 150, "img": "./img/bombilla1.jpeg"},
    {"id" : 4, "tipo" : "Bombilla", "precio" : 650, "img": "./img/bombilla2.jpeg"},
    {"id" : 5, "tipo" : "Bombilla", "precio" : 50, "img": "./img/bombilla3.jpeg"},
    {"id" : 6, "tipo" : "Mate", "precio" : 250, "img": "./img/mate1.jpeg"},
    {"id" : 7, "tipo" : "Mate", "precio" : 345, "img": "./img/mate2.jpeg"},
    {"id" : 8, "tipo" : "Mate", "precio" : 999, "img": "./img/mate3.jpeg"},
    {"id" : 9, "tipo" : "Hebilla", "precio" : 678, "img": "./img/hebilla1.jpeg"},
    {"id" : 10, "tipo" : "Hebilla", "precio" : 233, "img": "./img/hebilla2.jpeg"},  
]

const hebilla3 = new nuevosProductos (11, "Hebilla", 229, "./img/hebilla3.jpeg")
stock.push(hebilla3)