// ulizar la funcion para crear una plantilla de objeto

function Articulo(producto, talle, color, precio, cantidad) {
    this.producto = producto;
    this.talle = talle;
    this.color = color;
    this.precio = precio;
    this.cantidad = cantidad;
}

// crear una cantidad de objetos idefinida
// agrear un alert para mostran al cliente antes de decidir la comprar
const Articulo1 = new Articulo("Pantalon", "M", "Blanco", 3500, 5);
alert(`Articulo ${Articulo1.producto}
Talle:  ${Articulo1.talle}
Color:  ${Articulo1.color}
Precio:  ${Articulo1.precio}
Cantidad: ${Articulo1.cantidad}`);


const Articulo2 = new Articulo("Remera", "L", "Blanco", 1500, 3);
alert(`Articulo ${Articulo2.producto}
Talle: ${Articulo2.talle}
Color:  ${Articulo2.color}
Precio:  ${Articulo2.precio}
Cantidad:  ${Articulo2.cantidad}`);

const Articulo3 = new Articulo("Campra", "XL", "Blanco", 5500, 9);
alert(`Articulo ${Articulo3.producto}
Talle:  ${Articulo3.talle}
Color:  ${Articulo3.color}
Precio: ${Articulo3.precio}
cantidad: ${Articulo3.cantidad}`);

const Articulo4 = new Articulo("Buzo", "M", "Blanco", 2500, 7);
alert(`Articulo ${Articulo4.producto}
Talle: ${Articulo4.talle}
Color: ${Articulo4.color}
Precio:  ${Articulo4.precio}
Cantidad: ${Articulo4.cantidad}`);

// seccion de compra ofrecer a usuria los productos disponibles 
// mientras no ingrese cero puede segir comprando
const listaProducto = [];
listaProducto.push(Articulo1,Articulo2,Articulo3,Articulo4);
console.log(listaProducto);
const carrito =[];

let cantidad;
let total;

let opcion = prompt(`
Ingrese una producto: \n
1 ${Articulo1.producto} $ ${Articulo1.precio}
2 ${Articulo2.producto} $ ${Articulo2.precio}
3 ${Articulo3.producto} $ ${Articulo3.precio}
4 ${Articulo4.producto} $ ${Articulo4.precio}\n
Ingresar el cero para salir`);

while (opcion != "0") {
    switch (opcion) {
        case "1":
            alert(`Producto seleccionado ${Articulo1.producto}`);
            cantidad = parseInt(prompt("ingse la cantidad"));
            //alert(`Precio unitario ${Articulo1.precio}`);
            let total1 = cantidad * Articulo1.precio;
            alert(`subtotal de la compra ${total1}`);
            carrito.push(total1);
            //console.log(carrito);

            break;
        case "2":
            alert(`Producto seleccionado ${Articulo2.producto}`);
            cantidad = parseInt(prompt("ingse la cantidad"));
            //alert(`Precio unitario ${Articulo2.precio}`);
             let total2 = cantidad * Articulo2.precio;
            alert(`subtotal de la compra ${total2}`);
            carrito.push(total2);
            //console.log(carrito);
            break
        case "3":
            alert(`Producto seleccionado ${Articulo3.producto}`);
            cantidad = parseInt(prompt("ingse la cantidad"));
            //alert(`Pecio unitario ${Articulo3.precio}`);
            let total3 = cantidad * Articulo3.precio;
            alert(`Subtotal de la compra ${total3}`);
            carrito.push(total3);
            //console.log(carrito);
            break;
        case "4":
            alert(`Producto seleccionado ${Articulo4.producto}`);
            cantidad = parseInt(prompt("ingse la cantidad"));
           // alert(`Precio unitario ${Articulo4.precio}`)
            let total4 = cantidad * Articulo4.precio;
            alert(`Subtotal de la compra ${total4}`);
            carrito.push(total4);
            //console.log(carrito);
            break;
        default:
            alert("no es una opcion validad")
    }
    opcion = prompt(`
        Ingrese una producto: \n
        1 ${Articulo1.producto} $ ${Articulo1.precio}
        2 ${Articulo2.producto} $ ${Articulo2.precio}
        3 ${Articulo3.producto} $ ${Articulo3.precio}
        4 ${Articulo4.producto} $ ${Articulo4.precio}\n
        Ingresar el cero para salir`);
}


let sumarCarrito = carrito.reduce((totalCar, carrito) => totalCar + carrito);

    alert(`total de la compra es ${sumarCarrito}`);



//function verificarStock(cantidadPedida, productoSeleccionado) {
//    if (cantidadPedida < productoSeleccionado.stock) {
//        let stockMenosVenta = productoSeleccionado.stock - cantidadPedida;
//        let carrito = + cantidadPedida;
//        let total = cantidadPedida * productoSeleccionado.precio;
//        alert(` Se agregaron ${carrito}, ${productoSeleccionado.producto}, al carrito`);
//        alert(`Total de la comprar ${total}`)
//        alert(`soctok disponible ${stockMenosVenta}`)
//        console.log(` Se agregaron ${carrito}, ${productoSeleccionado.producto}`);
//    }
//    else {
//        alert(`Sin stock`)
//    }
//}
////verificarStock(cantidadPedida, productoSeleccionado.stock);