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

    const Cedula = document.createElement('th');
    Cedula.textContent = 'Cedula';
    cabecera.appendChild(Cedula);

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

    const Precio_Total = document.createElement('td');
    Precio_Total.textContent = 'Precio Total';
    cabecera.appendChild(Precio_Total);

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

        const Cedulac = document.createElement('td');
        Cedulac.textContent = element.Cedula;
        contenido.appendChild(Cedulac);

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

        const Precio_Totalc = document.createElement('td');
        Precio_Totalc.textContent = element.Precio_Total;
        contenido.appendChild(Precio_Totalc);


        //Creacion del Boton Eliminar
        const buttonEliminar = document.createElement('button');
        buttonEliminar.textContent = 'ELIMINAR';
        buttonEliminar.classList.add('btn', 'btn-danger');  // Clases de Bootstrap
        contenido.appendChild(buttonEliminar);

        buttonEliminar.addEventListener("click", EliminarRegistroCot)

        //Funcion de Eliminar Registros

        async function EliminarRegistroCot() {
            try {
                const url = "http://localhost:4000/api/Cotizacion/Delete";
                const data = {
                    id_Cotizacion: element.id_Cotizacion,
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
                    getfetchInvCot();
                } else {
                    alert("No Se Elimino Ningun Registro");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }

        //Creacion del Boton Actualizar
        const buttonActualizar = document.createElement('button');
        buttonActualizar.textContent = 'ACTUALIZAR';
        buttonActualizar.classList.add('btn', 'btn-primary');
        contenido.appendChild(buttonActualizar);

        buttonActualizar.addEventListener('click', abrirModalCot);

        // Función para cerrar la ventana modal

        //Funcion Para Abrir la Ventana Modal de Actualizar Registros de Inventario de Materia Prima
        function abrirModalCot() {
            //Se traen los Campos  y se Igualan A los Valores de Los campos De Cada Fila
            const id_actAct = document.getElementById("id_actCot");
            const NombreAct = document.getElementById("NombreCot");
            const CedulaAct = document.getElementById("CedulaCot");
            const NitAct = document.getElementById("NitCot");
            const DireccionAct = document.getElementById("DireccionCot");
            const TelefonoAct = document.getElementById("TelefonoCot");
            const EmailAct = document.getElementById("EmailCot");
            const TipoAct = document.getElementById("TipoCot");
            const CantidadAct = document.getElementById("CantidadCot");
            const MedidasAct = document.getElementById("MedidasCot");
            const MetoEntregaAct = document.getElementById("MetoEntregaCot");
            const TotalAct = document.getElementById("TotalCot");
            const EstadoAct = document.getElementById("EstadoCot");


            id_actAct.value = element.id_Cotizacion;
            NombreAct.value = element.Nombre;
            CedulaAct.value = element.Cedula;
            NitAct.value = element.Nit_Empresarial;
            DireccionAct.value = element.Direccion;
            TelefonoAct.value = element.Telefono;
            EmailAct.value = element.Correo;
            TipoAct.value = element.Tipo_Elemento;
            CantidadAct.value = element.Cantidad;
            MedidasAct.value = element.Medidas;
            MetoEntregaAct.value = element.Metod_Entrega;
            TotalAct.value = element.Precio_Total;
            EstadoAct.value = element.Estado;

            $('#ActuCot').modal('show');

        }





        // Cerrar el modal al hacer clic en otro botón, 
        // Asigna el evento de click para cerrar la modal al botón "Cancelar Cambios"
        document.getElementById('ActualizarCancelarCot').addEventListener('click', function () {
            $('#ActuCot').modal('hide');
        });


        tableInvCot.appendChild(contenido);
    }
    // Agrega la tabla al elemento apropiado en el documento
    document.body.appendChild(tableInvCot);
}







//Se Traen Los Valores a Actualiar



const id_actAct = document.getElementById("id_actCot");
const NombreAct = document.getElementById("NombreCot");
const CedulaAct = document.getElementById("CedulaCot");
const NitAct = document.getElementById("NitCot");
const DireccionAct = document.getElementById("DireccionCot");
const TelefonoAct = document.getElementById("TelefonoCot");
const EmailAct = document.getElementById("EmailCot");
const TipoElementoAct = document.getElementById("TipoCot");
const CantidadAct = document.getElementById("CantidadCot");
const MedidasAct = document.getElementById("MedidasCot");
const MetoEntregaAct = document.getElementById("MetoEntregaCot");
const TotalAct = document.getElementById("TotalCot");
const EstadoAct = document.getElementById("EstadoCot");

document.getElementById("ActualizarCot").addEventListener("click", ActualizarCot);

//Funcion de Actualizar Registros de Inventario de Materia Prima

async function ActualizarCot(event) {
    event.preventDefault();
    try {
        const url = "http://localhost:4000/api/Cotizacion/Update";
        const data = {

            id_Cotizacion: id_actAct.value,
            Nombre: NombreAct.value,
            Cedula: CedulaAct.value,
            Nit_Empresarial: NitAct.value,
            Direccion: DireccionAct.value,
            Telefono: TelefonoAct.value,
            Correo: EmailAct.value,
            Tipo_Elemento: TipoElementoAct.value,
            Cantidad: CantidadAct.value,
            Medidas: MedidasAct.value,
            Metod_Entrega: MetoEntregaAct.value,
            Precio_Total: TotalAct.value,
            Estado: EstadoAct.value,

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
            getfetchInvCot();
        } else {
            alert(" no de registro la actualizacion")
        }

    } catch (error) {
        console.log("error", error);
    }
}



