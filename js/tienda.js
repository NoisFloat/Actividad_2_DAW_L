var productos = [];

function inicializacion() {
    document.getElementById('formProductos').onsubmit = function (e) {
        e.preventDefault();
        var obtenerNombreDeProducto = document.getElementById('nombreProducto').value;
        var obtenerDescripcionDeProducto = document.getElementById('descripcionProducto').value;
        var obtenerPrecioDeProducto = parseFloat(document.getElementById('precioProducto').value);
        insertarNuevoProducto(obtenerNombreDeProducto, obtenerDescripcionDeProducto, obtenerPrecioDeProducto);
    };
}
//Funcion para insertar un nuevo producto = nuevo Objeto producto


function insertarNuevoProducto(nombreProducto, descripcionProducto, precioProducto) {
    var id_para_cada_producto = productos.length;
    var objetoProducto = {
        idProducto: id_para_cada_producto,
        nombreProducto: nombreProducto,
        descripcionProducto: descripcionProducto,
        precio: precioProducto,
        fecha: obtenerFechaActual()
    };

    productos.push(objetoProducto);

    pintarHTML();

}


//FUNCION PARA MOSTRAR EN UNA TABLA EL OBJETO PRODUCTO CON SUS VALORES
function pintarHTML() {
    // Obtén el elemento donde deseas insertar la tabla
    const insertarNuevaFila = document.getElementById('fila'); // Reemplaza 'tabla' con el ID de tu tabla

    // Vacía el contenido actual de la tabla
    insertarNuevaFila.innerHTML = "";

    // Obtén el elemento donde deseas insertar la venta total de hoy
    const ventaDelDia = document.getElementById('divVenta'); // Reemplaza 'divVenta' con el ID del elemento donde deseas mostrar la venta
    // Vacía el contenido actual del elemento
    ventaDelDia.innerHTML = "";
     var ventaTotal = 0;
    // Itera sobre cada producto en el arreglo 'productos'
    productos.forEach(objetoProducto => {
        // Accede a las propiedades de cada objeto
        const pintarIdProduct = objetoProducto.idProducto;
        const pintarNombreProducto = objetoProducto.nombreProducto;
        const pintarDescripcionProducto = objetoProducto.descripcionProducto;
        const pintarPrecioProducto = objetoProducto.precio;
        const pintarFechaProducto = objetoProducto.fecha;
       
        ventaTotal += objetoProducto.precio;
        // Crea una nueva fila en la tabla con los datos del producto
        const nuevaFila = `
            <tr>
                <td>${pintarIdProduct}</td>
                <td>${pintarNombreProducto}</td>
                <td>${pintarDescripcionProducto}</td>
                <td>${pintarPrecioProducto}$</td>
                <td>${pintarFechaProducto}</td>
            </tr>
        `;

        // Inserta la nueva fila en la tabla
        insertarNuevaFila.innerHTML += nuevaFila;
        ventaDelDia.innerHTML ='La venta del dia de hoy es ' + ventaTotal;
    });

    alert('Insertaste un producto');
    
    //Obten el espacio para poner la venta del dia


}






//FIN DE FUNCION PARA MOSTRAR EN UNA TABLA EL OBJETO PRODUCTO CON SUS VALORES

//Funcion para obtener la fecha actual

function obtenerFechaActual() {
    const fechaActual = new Date();
    const dia = fechaActual.getDate().toString().padStart(2, '0'); // Obtén el día y asegúrate de que tenga dos dígitos
    const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // Obtén el mes (los meses son base 0, por lo que sumamos 1) y asegúrate de que tenga dos dígitos
    const anio = fechaActual.getFullYear();

    return `${dia}/${mes}/${anio}`;
}

const fechaActual = obtenerFechaActual();
console.log(fechaActual);
//Fin de funcion para obtener la fecha de hoy




//SOLO ESTETICA GENERADA POR GPT

function toggleVisibility() {
    var form = document.getElementById("formProductos");
    var toggleButton = document.getElementById("toggleForm");

    if (form.style.display === "none") {
        form.style.display = "block";
        toggleButton.textContent = "Ocultar Formulario";
    } else {
        form.style.display = "none";
        toggleButton.textContent = "Mostrar Formulario";
    }
}
window.onload = inicializacion;
