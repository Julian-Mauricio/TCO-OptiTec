const tableInvCot = document.querySelector('#tableInventarios');
document.getElementById("getfetchInvCot").addEventListener("click", getfetchInvCot)

async function getfetchInvCot() {
    const url = 'http://localhost:4000/api/Cotizacion';
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        mostrarFetchInvCot(data);
    } catch (error) {
        console.log('Error fetching data:', error);
    }
}

function mostrarFetchInvCot(data) {
    tableInvCot.innerHTML = '';
    const cabecera = document.createElement('tr');

    const id = document.createElement('th');
    id.textContent = 'ID';
    cabecera.appendChild(id);

    const Nombre = document.createElement('th');
    Nombre.textContent = 'Nombre';
    cabecera.appendChild(Nombre);

    const Nit = document.createElement('th');
    Nit.textContent = 'Nit';
    cabecera.appendChild(Nit);
    
    const Direccion = document.createElement('th');
    Direccion.textContent = 'Direccion';
    cabecera.appendChild(Direccion);

    const Telefono = document.createElement('th');
    Telefono.textContent = 'Telefono';
    cabecera.appendChild(Telefono);

    const Email = document.createElement('th');
    Email.textContent = 'Email';
    cabecera.appendChild(Email);

    const Tipo_Elemento = document.createElement('th');
    Tipo_Elemento.textContent = 'Tipo_Elemento';
    cabecera.appendChild(Tipo_Elemento);

    const Cantidad = document.createElement('th');
    Cantidad.textContent = 'Cantidad';
    cabecera.appendChild(Cantidad);


    const Medidas = document.createElement('th');
    Medidas.textContent = 'Medidas';
    cabecera.appendChild(Medidas);


    const Metod_Entrega = document.createElement('th');
    Metod_Entrega.textContent = 'Metod_Entrega';
    cabecera.appendChild(Metod_Entrega);

    const Estado = document.createElement('th');
    Estado.textContent = 'Estado';
    cabecera.appendChild(Estado);

    const accion = document.createElement('th');
    accion.textContent = 'ACCION';
    cabecera.appendChild(accion);


    tableInvCot.appendChild(cabecera);

    for (let i = 0; i < data.body.length; i++) {
        const element = data.body[i];

        const contenido = document.createElement('tr');

        const id_Cotizacionc = document.createElement('td');
        id_Cotizacionc.textContent = element.id_Cotizacion;
        contenido.appendChild(id_Cotizacionc);

        const Nombrec = document.createElement('td');
        Nombrec.textContent = element.Nombre;
        contenido.appendChild(Nombrec);

        const Nit_Empresarialc = document.createElement('td');
        Nit_Empresarialc.textContent = element.Nit_Empresarial;
        contenido.appendChild(Nit_Empresarialc);

        const Direccionc = document.createElement('td');
        Direccionc.textContent = element.Direccion;
        contenido.appendChild(Direccionc);

        const Telefonoc = document.createElement('td');
        Telefonoc.textContent = element.Telefono;
        contenido.appendChild(Telefonoc);

        const Emailc = document.createElement('td');
        Emailc.textContent = element.Correo;
        contenido.appendChild(Emailc);

        const Tipo_Elementoc = document.createElement('td');
        Tipo_Elementoc.textContent = element.Tipo_Elemento;
        contenido.appendChild(Tipo_Elementoc);

        const Cantidadc = document.createElement('td');
        Cantidadc.textContent = element.Cantidad;
        contenido.appendChild(Cantidadc);

        const Medidasc = document.createElement('td');
        Medidasc.textContent = element.Medidas;
        contenido.appendChild(Medidasc);

        const Metod_Entregac = document.createElement('td');
        Metod_Entregac.textContent = element.Metod_Entrega;
        contenido.appendChild(Metod_Entregac);

        const Estadoc = document.createElement('td');
        Estadoc.textContent = element.Estado;
        contenido.appendChild(Estadoc);



        //Creacion del Boton Eliminar
        const buttonEliminar = document.createElement('button');
        buttonEliminar.textContent = 'ELIMINAR';
        buttonEliminar.classList.add('btn', 'btn-danger');  // Clases de Bootstrap
        contenido.appendChild(buttonEliminar);

       // buttonEliminar.addEventListener("click", EliminarRegistro)

        //Funcion de Eliminar Registros

       /* async function EliminarRegistro() {
            try {
                const url = "http://localhost:4000/api/Produccion/Delete";
                const data = {
                    id_Inventario_P: element.id_Inventario_P,
                };
                const requestOptions = {
                    method: "DELETE", // Método de solicitud POST
                    headers: {
                        "Content-Type": "application/json", // Tipo de contenido del cuerpo de la solicitud
                    },
                    body: JSON.stringify(data), // Convierte los datos a formato JSON y los coloca en el cuerpo de la solicitud
                };
                const response = await fetch(url, requestOptions);
                const Responses = await response.json();
                if (Responses.status === 200) {
                    alert("Se Elimino de Manera Correcta el Registro");
                    getfetchInvPro();
                } else {
                    alert("No Se Elimino Ningun Registro");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }*/

        //Creacion del Boton Actualizar
        const buttonActualizar = document.createElement('button');
        buttonActualizar.textContent = 'ACTUALIZAR';
        buttonActualizar.classList.add('btn', 'btn-primary');
        contenido.appendChild(buttonActualizar);

        //buttonActualizar.addEventListener('click', abrirModal);




        //Funcion Para Abrir la Ventana Modal de Actualizar Registros de Inventario de Materia Prima
       /* function abrirModal() {
            //Se traen los Campos  y se Igualan A los Valores de Los campos De Cada Fila
            const id_Inventario_P = document.getElementById("id_InvPro");
            const TipoAct = document.getElementById("TipoInvPro");
            const EntradaAct = document.getElementById("EntradaInvPro");
            const StockAct = document.getElementById("StockInvPro");
            const SalidaAct = document.getElementById("SalidaInvPro");

            id_Inventario_P.value = element.id_Inventario_P;
            TipoAct.value = element.Tipo;
            EntradaAct.value = element.Entradas;
            StockAct.value = element.Stock;
            SalidaAct.value = element.Salida;

            const modal = new bootstrap.Modal(document.getElementById('ActuInvPro'));
            modal.show();
        }*/


        //Creacion del Boton AGREGAR
        const buttonAgregar = document.createElement('button');
        buttonAgregar.textContent = 'AGREGAR';
        buttonAgregar.classList.add('btn', 'btn-success');
        contenido.appendChild(buttonAgregar);

        //buttonAgregar.addEventListener('click', abrirModalRegistrar);

        //Funcion Para Abrir la Ventana Modal de Actualizar Registros
        /*function abrirModalRegistrar() {
            const modal = new bootstrap.Modal(document.getElementById('RegistroInvPro'));
            modal.show();
        }*/

        tableInvCot.appendChild(contenido);
    }
    // Agrega la tabla al elemento apropiado en el documento
    document.body.appendChild(tableInvCot);
}

// FALTA EL CERRA VENTANA MODAL Y NO ESPECIFICAR ID



//Se Traen Los Valores a Actualiar



/*const id_Inventario_P = document.getElementById("id_InvPro");
const TipoActPro = document.getElementById("TipoInvPro");
const EntradaActPro = document.getElementById("EntradaInvPro");
const StockActPro = document.getElementById("StockInvPro");
const SalidaActPro = document.getElementById("SalidaInvPro");

document.getElementById("ActualizarInvPro").addEventListener("click", ActualizarDatos);

//Funcion de Actualizar Registros de Inventario de Materia Prima

async function ActualizarDatos(event) {
    event.preventDefault();
    try {
        const url = "http://localhost:4000/api/Produccion/Update";
        const data = {
            id_Inventario_P: id_Inventario_P.value,
            Tipo: TipoActPro.value,
            Entradas: EntradaActPro.value,
            Stock: StockActPro.value,
            Salida: SalidaActPro.value,

        };


        const requestOptions = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };

        const response = await fetch(url, requestOptions);
        const reponses = await response.json();
        console.log(reponses);
        if (reponses.status === 200) {
            getfetchInvPro();
        } else {
            alert(" no de registro la actualizacion")
        }

    } catch (error) {
        console.log("error", error);
    }
}




//Se Traen Los Valores  a Registrar

const id_LoginIvnPro = document.querySelector("#id_LoginInvPro");
const TipoRegistroIvnPro = document.querySelector("#TipoRegistroInvPro");
const DescripcionRegistroIvnPro = document.querySelector("#DescripcionRegistroInvPro");
const EntradasRegistroIvnPro = document.querySelector("#EntradasRegistroInvPro");
const StockRegistroIvnPro = document.querySelector("#StockRegistroInvPro");
const SalidaRegistroIvnPro = document.querySelector("#SalidaRegistroInvPro");


document.getElementById("RegistrarInvPro").addEventListener("click", RegistroMateria);

//Funcion de  Registros de Inventario de Materia Prima
async function RegistroMateria(event) {
    event.preventDefault();
    try {
        const url = "http://localhost:4000/api/Produccion/Insert";
        const data = {
            id_Login: id_LoginIvnPro.value,
            Tipo: TipoRegistroIvnPro.value,
            Descripcion: DescripcionRegistroIvnPro.value,
            Entradas: EntradasRegistroIvnPro.value,
            Stock: StockRegistroIvnPro.value,
            Salida: SalidaRegistroIvnPro.value,
        };
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };
        const response = await fetch(url, requestOptions);
        const Responses = await response.json();
        if (Responses.status === 200) {
            alert("Se Agrego el Registro Correctamente");
            getfetchInvPro();
        } else {
            alert("Error al intentar Agregar el Registro");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

*/
