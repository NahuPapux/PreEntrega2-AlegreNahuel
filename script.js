// Clases
class Producto {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

// Funciones
function get(){
    let name = document.getElementById("producto").value;
    let price = document.getElementById("precio").value;

    productoNuevo = new Producto(name, price);
    
    if (name && price) add();
    else console.log("Campos vacios!");
}

function add(){
    todosLosProductos.push(productoNuevo);
    console.log(todosLosProductos);
    document.getElementById("tabla").innerHTML += '<tbody><td>'+productoNuevo.name+'</td><td>'+('$ '+productoNuevo.price)+'</td></tbody>';
}

// Variables
const todosLosProductos = [];
let productoNuevo;
