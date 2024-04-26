const tableInvMp = document.querySelector('#tableInventarios');
document.getElementById("getfetchInvMp").addEventListener("click", getfetchInvMp)

// Selección del elemento de la tabla mediante su ID
async function getfetchInvMp() {
    const url = 'http://localhost:4000/api/Materia';
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        mostrarFetchInvMp(data);
    } catch (error) {
        console.log('Error fetching data:', error);
    }
}

// Función para mostrar los datos en la tabla

function mostrarFetchInvMp(data) {
    tableInvMp.innerHTML = ''; // Limpia el contenido actual de la tabla
    // Creación de la cabecera de la tabla
    const cabecera = document.createElement('tr');

    // Creación de columnas para la cabecera
    const id = document.createElement('th');
    id.textContent = 'ID';
    cabecera.appendChild(id);
    id.style.textAlign = 'center';

    const administrador = document.createElement('th');
    administrador.textContent = 'Administrador';
    cabecera.appendChild(administrador);
    administrador.style.textAlign = 'center';

    const administradorCedula = document.createElement('th');
    administradorCedula.textContent = 'Numero de Documento';
    cabecera.appendChild(administradorCedula);
    administradorCedula.style.textAlign = 'center';

    const tipo = document.createElement('th');
    tipo.textContent = 'Tipo';
    cabecera.appendChild(tipo);
    tipo.style.textAlign = 'center';

    const descripcion = document.createElement('th');
    descripcion.textContent = 'Descripción';
    cabecera.appendChild(descripcion);
    descripcion.style.textAlign = 'center';

    const entrada = document.createElement('th');
    entrada.textContent = 'Entrada';
    cabecera.appendChild(entrada);
    entrada.style.textAlign = 'center';

    const stock = document.createElement('th');
    stock.textContent = 'Stock';
    cabecera.appendChild(stock);
    stock.style.textAlign = 'center';

    const salida = document.createElement('th');
    salida.textContent = 'Salida';
    cabecera.appendChild(salida);
    salida.style.textAlign = 'center';

    const accion = document.createElement('th');
    accion.textContent = 'Acción';
    cabecera.appendChild(accion);
    accion.style.textAlign = 'center';

    tableInvMp.appendChild(cabecera); // Agrega la cabecera a la tabla

    // Itera sobre los datos y crea filas para cada entrada
    for (let i = 0; i < data.body.length; i++) {
        const element = data.body[i];

        const contenido = document.createElement('tr');

        const id_mpc = document.createElement('td');
        id_mpc.textContent = element.id_Inventario_MP;
        contenido.appendChild(id_mpc);
        id_mpc.style.textAlign = 'center';

        const administradorC = document.createElement('td');
        administradorC.textContent = element.Nombre;
        contenido.appendChild(administradorC);
        administradorC.style.textAlign = 'center';

        const administradorCedulaC = document.createElement('td');
        administradorCedulaC.textContent = element.Cedula;
        contenido.appendChild(administradorCedulaC);
        administradorCedulaC.style.textAlign = 'center';

        const tipoc = document.createElement('td');
        tipoc.textContent = element.Tipo;
        contenido.appendChild(tipoc);
        tipoc.style.textAlign = 'center';

        const Descripcionc = document.createElement('td');
        Descripcionc.textContent = element.Descripcion;
        contenido.appendChild(Descripcionc);
        Descripcionc.style.textAlign = 'center';

        const entradasc = document.createElement('td');
        entradasc.textContent = element.Entradas;
        contenido.appendChild(entradasc);
        entradasc.style.textAlign = 'center';

        const stockc = document.createElement('td');
        stockc.textContent = element.Stock;
        contenido.appendChild(stockc);
        stockc.style.textAlign = 'center';

        const salidac = document.createElement('td');
        salidac.textContent = element.Salida;
        contenido.appendChild(salidac);
        salidac.style.textAlign = 'center';

        //Creacion del Boton Eliminar
        const buttonEliminar = document.createElement('button');
        buttonEliminar.textContent = 'ELIMINAR';
        buttonEliminar.classList.add('btn', 'btn-danger');
        buttonEliminar.style.marginLeft = '9rem';
        buttonEliminar.style.marginTop = '5px';

        contenido.appendChild(buttonEliminar);

        buttonEliminar.addEventListener("click", EliminarRegistro)

        //Funcion de Eliminar Registros

        async function EliminarRegistro() {
            try {
                const url = "http://localhost:4000/api/Materia/Delete";
                const data = {
                    id_Inventario_MP: element.id_Inventario_MP,
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
                    getfetchInvMp();
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

        buttonActualizar.addEventListener('click', abrirModal);



        //Funcion Para Abrir la Ventana Modal de Actualizar Registros de Inventario de Materia Prima
        function abrirModal() {

            //Se traen los Campos  y se Igualan A los Valores de Los campos De Cada Fila
            const id_Inventario_MP = document.getElementById("id_InvMp");
            const TipoAct = document.getElementById("TipoInvMp");
            const DescripcionAct = document.getElementById("DescripcionInvMp");
            const EntradaAct = document.getElementById("EntradaInvMp");
            const StockAct = document.getElementById("StockInvMp");
            const SalidaAct = document.getElementById("SalidaInvMp");

            id_Inventario_MP.value = element.id_Inventario_MP;
            TipoAct.value = element.Tipo;
            DescripcionAct.value = element.Descripcion;
            EntradaAct.value = element.Entradas;
            StockAct.value = element.Stock;
            SalidaAct.value = element.Salida;

            $('#ActuInvMp').modal('show');
        }


        //Creacion del Boton AGREGAR
        const buttonAgregar = document.createElement('button');
        buttonAgregar.textContent = 'AGREGAR';
        buttonAgregar.classList.add('btn', 'btn-success');
        contenido.appendChild(buttonAgregar);
        buttonAgregar.style.marginTop = '5px';

        buttonAgregar.addEventListener('click', abrirModalRegistrar);

        //Funcion Para Abrir la Ventana Modal de Actualizar Registros
        function abrirModalRegistrar() {
            $('#RegistroMp').modal('show');
        }

        tableInvMp.appendChild(contenido);
    }
    // Agrega la tabla al elemento apropiado en el documento
    document.body.appendChild(tableInvMp);
}

// FALTA EL CERRA VENTANA MODAL Y NO ESPECIFICAR ID
function ocultarModal() {
    $('#ActuInvMp').modal('hide');
}
document.getElementById('ActualizarInvMpCancelar').addEventListener('click', ocultarModal);

function ocultarModalRegistroMp() {
    $('#RegistroMp').modal('hide');
}
document.getElementById('RegistrarInvMpCancelar').addEventListener('click', ocultarModalRegistroMp);


/*********************************************************************************************/



//Se Traen Los Valores a Actualiar
const FormRegistroInvMp = document.querySelector("#FormRegistroInvMp");
const id_Inventario_MP = document.getElementById("id_InvMp");
const TipoAct = document.getElementById("TipoInvMp");
const DescripcionAct = document.getElementById("DescripcionInvMp");
const EntradaAct = document.getElementById("EntradaInvMp");
const StockAct = document.getElementById("StockInvMp");
const SalidaAct = document.getElementById("SalidaInvMp");

document.getElementById("Actualizar").addEventListener("click", ActualizarDatos);

//Funcion de Actualizar Registros de Inventario de Materia Prima

async function ActualizarDatos(event) {
    event.preventDefault();
    try {
        const url = "http://localhost:4000/api/Materia/Update";
        const data = {
            id_Inventario_MP: id_Inventario_MP.value,
            Tipo: TipoAct.value,
            Descripcion: DescripcionAct.value,
            Entradas: EntradaAct.value,
            Stock: StockAct.value,
            Salida: SalidaAct.value,

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
            getfetchInvMp();
            ocultarModal();
        } else {
            alert(" no de registro la actualizacion")
        }

    } catch (error) {
        console.log("error", error);
    }
}


/*********************************************************************************************/

//Se Traen Los Valores  a Registrar
const FormRegistro = document.getElementById("FormRegistroInvMp");
const TipoRegistro = document.querySelector("#TipoRegistroInvMp");
const DescripcionRegistro = document.querySelector("#DescripcionRegistroInvMp");
const EntradasRegistro = document.querySelector("#EntradasRegistroInvMp");
const StockRegistro = document.querySelector("#StockRegistroInvMp");
const SalidaRegistro = document.querySelector("#SalidaRegistroInvMp");


document.getElementById("RegistrarInvMp").addEventListener("click", RegistroMateria);

//Funcion de  Registros de Inventario de Materia Prima
async function RegistroMateria(event) {
    event.preventDefault();
    try {
        const url = "http://localhost:4000/api/Materia/Insert";
        const data = {
            Tipo: TipoRegistro.value,
            Descripcion: DescripcionRegistro.value,
            Entradas: EntradasRegistro.value,
            Stock: StockRegistro.value,
            Salida: SalidaRegistro.value,
            Nombre: "Julian",
            Cedula: 1110001110,
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
            FormRegistro.reset();
            alert("Se Agrego el Registro Correctamente");
            getfetchInvMp();
            ocultarModalRegistroMp();
        } else {
            alert("Error al intentar Agregar el Registro");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

