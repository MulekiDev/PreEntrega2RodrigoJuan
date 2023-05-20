//SISTEMA PARA AGREGAR PRODUCTOS; CON NOMBRE, PRECIO Y CODIGO :D
//PASO 1: declaro el array de productos

const productos=[]
let continuar=true

 //Paso 2: Crear objeto que agrega los productos al array vacio
while(continuar){
    const nombre=prompt("Ingrese nombre del producto")
    const precio=parseInt(prompt("Ingrese precio del producto"))
    const codigo=prompt("Ingrese el código del producto")
    productos.push({nombre,precio,codigo})
    continuar=confirm("¿Quiere seguir cargando productos?")
}
console.log(productos)
//LLAMO A LAS FUNCIONES PARA BUSCAR Y ELIMINAR EL PRODUCTO
buscarProducto()
eliminarProducto()

//FUNCIONES UTILES AL PROYECTO:

//crear una funcion para eliminar producto mediante CODIGO
function eliminarProducto() {
    continuar=confirm("¿Quiere eliminar un producto?")
    let codigo = prompt("Ingrese el código del producto a eliminar: ")
    let index = buscarProducto(codigo)
    if (index !== -1) {
    productos.splice(index, 1)
    alert("Producto eliminado con éxito")
    } else {
    alert("No se encontró ningún producto con ese código")
    }
}

//buscar producto y retornar el indice del mismo dentro del array
function buscarProducto(codigo) {
    let i = 0;
    while (i < productos.length) {
    if (productos[i].codigo === codigo) {
        return i
    }
    i++
    }
    return -1 // Si no se encuentra el producto, retorna -1
}
