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

    const tipo = document.createElement('th');
    tipo.textContent = 'TIPO';
    cabecera.appendChild(tipo);

    const descripcion = document.createElement('th');
    descripcion.textContent = 'Descripcion';
    cabecera.appendChild(descripcion);

    const entrada = document.createElement('th');
    entrada.textContent = 'ENTRADA';
    cabecera.appendChild(entrada);

    const stock = document.createElement('th');
    stock.textContent = 'STOCK';
    cabecera.appendChild(stock);

    const salida = document.createElement('th');
    salida.textContent = 'SALIDA';
    cabecera.appendChild(salida);

    const accion = document.createElement('th');
    accion.textContent = 'ACCION';
    cabecera.appendChild(accion);


    tableInvMp.appendChild(cabecera); // Agrega la cabecera a la tabla

    // Itera sobre los datos y crea filas para cada entrada
    for (let i = 0; i < data.body.length; i++) {
        const element = data.body[i];

        const contenido = document.createElement('tr');

        const id_mpc = document.createElement('td');
        id_mpc.textContent = element.id_Inventario_MP;
        contenido.appendChild(id_mpc);

        const tipoc = document.createElement('td');
        tipoc.textContent = element.Tipo;
        contenido.appendChild(tipoc);

        const Descripcionc = document.createElement('td');
        Descripcionc.textContent = element.Descripcion;
        contenido.appendChild(Descripcionc);

        const entradasc = document.createElement('td');
        entradasc.textContent = element.Entradas;
        contenido.appendChild(entradasc);

        const stockc = document.createElement('td');
        stockc.textContent = element.Stock;
        contenido.appendChild(stockc);

        const salidac = document.createElement('td');
        salidac.textContent = element.Salida;
        contenido.appendChild(salidac);

        //Creacion del Boton Eliminar
        const buttonEliminar = document.createElement('button');
        buttonEliminar.textContent = 'ELIMINAR';
        buttonEliminar.classList.add('btn', 'btn-danger');  // Clases de Bootstrap
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

            const modal = new bootstrap.Modal(document.getElementById('ActuInvMp'));
            modal.show();
        }

        //Creacion del Boton AGREGAR
        const buttonAgregar = document.createElement('button');
        buttonAgregar.textContent = 'AGREGAR';
        buttonAgregar.classList.add('btn', 'btn-success');
        contenido.appendChild(buttonAgregar);

        buttonAgregar.addEventListener('click', abrirModalRegistrar);

        //Funcion Para Abrir la Ventana Modal de Actualizar Registros
        function abrirModalRegistrar() {
            const modal = new bootstrap.Modal(document.getElementById('RegistroMp'));
            modal.show();
        }

        tableInvMp.appendChild(contenido);
    }
    // Agrega la tabla al elemento apropiado en el documento
    document.body.appendChild(tableInvMp);
}

// FALTA EL CERRA VENTANA MODAL Y NO ESPECIFICAR ID


/*********************************************************************************************/

document.getElementById("ActualizarCancelar").addEventListener("click", ActualizarCancelar);
function ActualizarCancelar() {
    console.log("cancela");
    const modal = new bootstrap.Modal(document.getElementById('ActuInvMp'));
    modal.hide();    
}

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
const id_Login = document.querySelector("#id_LoginInvMp");
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
            id_Login: id_Login.value,
            Tipo: TipoRegistro.value,
            Descripcion: DescripcionRegistro.value,
            Entradas: EntradasRegistro.value,
            Stock: StockRegistro.value,
            Salida: SalidaRegistro.value,
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
        } else {
            alert("Error al intentar Agregar el Registro");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

