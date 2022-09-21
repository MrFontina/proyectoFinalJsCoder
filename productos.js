class nuevosProductos {
    constructor(id, tipo, precio, img){
    this.id = id
    this.tipo = tipo
    this.precio = precio
    this.img = img
    }
}

let stock = [
    {"id" : 0, "tipo" : "CUCHILLO", "precio" : 200, "img": "./img/Cuchillo1.jpeg"},
    {"id" : 1, "tipo" : "CUCHILLO", "precio" : 300, "img": "./img/cuchillo2.jpeg"},
    {"id" : 2, "tipo" : "CUCHILLO", "precio" : 500, "img": "./img/cuchillo3.jpeg"},
    {"id" : 3, "tipo" : "BOMBILLA", "precio" : 150, "img": "./img/bombilla1.jpeg"},
    {"id" : 4, "tipo" : "BOMBILLA", "precio" : 650, "img": "./img/bombilla2.jpeg"},
    {"id" : 5, "tipo" : "BOMBILLA", "precio" : 50, "img": "./img/bombilla3.jpeg"},
    {"id" : 6, "tipo" : "MATE", "precio" : 250, "img": "./img/mate1.jpeg"},
    {"id" : 7, "tipo" : "MATE", "precio" : 345, "img": "./img/mate2.jpeg"},
    {"id" : 8, "tipo" : "MATE", "precio" : 999, "img": "./img/mate3.jpeg"},
    {"id" : 9, "tipo" : "HEBILLA", "precio" : 678, "img": "./img/hebilla1.jpeg"},
    {"id" : 10, "tipo" : "HEBILLA", "precio" : 233, "img": "./img/hebilla2.jpeg"},  
]

const hebilla3 = new nuevosProductos (11, "HEBILLA", 229, "./img/hebilla3.jpeg")
stock.push(hebilla3)