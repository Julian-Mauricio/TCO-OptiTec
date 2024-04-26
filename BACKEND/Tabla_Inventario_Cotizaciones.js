const tableInvCot = document.querySelector('#tableInventarios');
const titulo = document.getElementById('#titulo');


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
    id.style.textAlign = 'center';

    const Nombre = document.createElement('th');
    Nombre.textContent = 'Nombre';
    cabecera.appendChild(Nombre);
    Nombre.style.textAlign = 'center';

    const Cedula = document.createElement('th');
    Cedula.textContent = 'Cedula';
    cabecera.appendChild(Cedula);
    Cedula.style.textAlign = 'center';

    const Nit = document.createElement('th');
    Nit.textContent = 'Nit';
    cabecera.appendChild(Nit);
    Nit.style.textAlign = 'center';

    const Direccion = document.createElement('th');
    Direccion.textContent = 'Direccion';
    cabecera.appendChild(Direccion);
    Direccion.style.textAlign = 'center';

    const Telefono = document.createElement('th');
    Telefono.textContent = 'Telefono';
    cabecera.appendChild(Telefono);
    Telefono.style.textAlign = 'center';

    const Email = document.createElement('th');
    Email.textContent = 'Email';
    cabecera.appendChild(Email);
    Email.style.textAlign = 'center';

    const Tipo_Elemento = document.createElement('th');
    Tipo_Elemento.textContent = 'Tipo Elemento';
    cabecera.appendChild(Tipo_Elemento);
    Tipo_Elemento.style.textAlign = 'center';

    const Cantidad = document.createElement('th');
    Cantidad.textContent = 'Cantidad';
    cabecera.appendChild(Cantidad);
    Cantidad.style.textAlign = 'center';

    const Medidas = document.createElement('th');
    Medidas.textContent = 'Medidas';
    cabecera.appendChild(Medidas);
    Medidas.style.textAlign = 'center';

    const Metod_Entrega = document.createElement('th');
    Metod_Entrega.textContent = 'Metodo Entrega';
    cabecera.appendChild(Metod_Entrega);
    Metod_Entrega.style.textAlign = 'center';

    const Estado = document.createElement('th');
    Estado.textContent = 'Estado';
    cabecera.appendChild(Estado);
    Estado.style.textAlign = 'center';

    const Precio_Total = document.createElement('td');
    Precio_Total.textContent = 'Precio Total';
    cabecera.appendChild(Precio_Total);
    Precio_Total.style.textAlign = 'center';

    const accion = document.createElement('th');
    accion.textContent = 'ACCION';
    cabecera.appendChild(accion);
    accion.style.textAlign = 'center';

    //Funcion Para Abrir la Ventana Modal de Actualizar Registros
    function abrirModalRegistrar() {
        $('#RegistroInvPro').modal('show');
    }

    tableInvCot.appendChild(cabecera);

    for (let i = 0; i < data.body.length; i++) {
        const element = data.body[i];

        const contenido = document.createElement('tr');

        const id_Cotizacionc = document.createElement('td');
        id_Cotizacionc.textContent = element.id_Cotizacion;
        contenido.appendChild(id_Cotizacionc);
        id_Cotizacionc.style.textAlign = 'center';

        const Nombrec = document.createElement('td');
        Nombrec.textContent = element.Nombre;
        contenido.appendChild(Nombrec);
        Nombrec.style.textAlign = 'center';

        const Cedulac = document.createElement('td');
        Cedulac.textContent = element.Cedula;
        contenido.appendChild(Cedulac);
        Cedulac.style.textAlign = 'center';

        const Nit_Empresarialc = document.createElement('td');
        Nit_Empresarialc.textContent = element.Nit_Empresarial;
        contenido.appendChild(Nit_Empresarialc);
        Nit_Empresarialc.style.textAlign = 'center';

        const Direccionc = document.createElement('td');
        Direccionc.textContent = element.Direccion;
        contenido.appendChild(Direccionc);
        Direccionc.style.textAlign = 'center';

        const Telefonoc = document.createElement('td');
        Telefonoc.textContent = element.Telefono;
        contenido.appendChild(Telefonoc);
        Telefonoc.style.textAlign = 'center';

        const Emailc = document.createElement('td');
        Emailc.textContent = element.Correo;
        contenido.appendChild(Emailc);
        Emailc.style.textAlign = 'center';

        const Tipo_Elementoc = document.createElement('td');
        Tipo_Elementoc.textContent = element.Tipo_Elemento;
        contenido.appendChild(Tipo_Elementoc);
        Tipo_Elementoc.style.textAlign = 'center';

        const Cantidadc = document.createElement('td');
        Cantidadc.textContent = element.Cantidad;
        contenido.appendChild(Cantidadc);
        Cantidadc.style.textAlign = 'center';

        const Medidasc = document.createElement('td');
        Medidasc.textContent = element.Medidas;
        contenido.appendChild(Medidasc);
        Medidasc.style.textAlign = 'center';

        const Metod_Entregac = document.createElement('td');
        Metod_Entregac.textContent = element.Metod_Entrega;
        contenido.appendChild(Metod_Entregac);
        Metod_Entregac.style.textAlign = 'center';

        const Estadoc = document.createElement('td');
        Estadoc.textContent = element.Estado;
        contenido.appendChild(Estadoc);
        Estadoc.style.textAlign = 'center';

        const Precio_Totalc = document.createElement('td');
        Precio_Totalc.textContent = element.Precio_Total;
        contenido.appendChild(Precio_Totalc);
        Precio_Totalc.style.textAlign = 'center';


        //Creacion del Boton Eliminar
        const buttonEliminar = document.createElement('button');
        buttonEliminar.textContent = 'ELIMINAR';
        buttonEliminar.classList.add('btn', 'btn-danger');  // Clases de Bootstrap
        contenido.appendChild(buttonEliminar);
        buttonEliminar.style.marginLeft = '5rem';
        buttonEliminar.style.marginTop = '5px';

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
        buttonActualizar.style.marginTop = '5px';
        buttonActualizar.style.marginLeft = '5rem';

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

        tableInvCot.appendChild(contenido);
    }
    // Agrega la tabla al elemento apropiado en el documento
    document.body.appendChild(tableInvCot);
}



// Cerrar el modal al hacer clic en otro botón, 
        // Asigna el evento de click para cerrar la modal al botón "Cancelar Cambios"
        function ocultarModalActuCot() {
            $('#ActuCot').modal('hide');
        }
        
        document.getElementById('ActualizarCancelarCot').addEventListener('click', ocultarModalActuCot);



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
            ocultarModalActuCot();
        } else {
            alert(" no de registro la actualizacion")
        }

    } catch (error) {
        console.log("error", error);
    }
}



