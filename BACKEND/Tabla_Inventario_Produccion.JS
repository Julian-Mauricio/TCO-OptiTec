const tableInvPro = document.querySelector('#tableInventarios');
document.getElementById("getfetchInvPro").addEventListener("click", getfetchInvPro)

async function getfetchInvPro() {
    const url = 'http://localhost:4000/api/Produccion';
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        mostrarFetchInvPro(data);
    } catch (error) {
        console.log('Error fetching data:', error);
    }
}

function mostrarFetchInvPro(data) {
    tableInvPro.innerHTML = '';
    const cabecera = document.createElement('tr');

    const id = document.createElement('th');
    id.textContent = 'ID';
    cabecera.appendChild(id);

    const NombreAdministrador = document.createElement('th');
    NombreAdministrador.textContent = 'Administrador';
    cabecera.appendChild(NombreAdministrador);

    const AdministradorCedulac = document.createElement('th');
    AdministradorCedulac.textContent = 'AdministradorCedula';
    cabecera.appendChild(AdministradorCedulac);

    const tipo = document.createElement('th');
    tipo.textContent = 'TIPO';
    cabecera.appendChild(tipo);

    const descripcion = document.createElement('th');
    descripcion.textContent = 'DESCRIPCCION';
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


    tableInvPro.appendChild(cabecera);

    for (let i = 0; i < data.body.length; i++) {
        const element = data.body[i];

        const contenido = document.createElement('tr');

        const id_mpc = document.createElement('td');
        id_mpc.textContent = element.id_Inventario_P;
        contenido.appendChild(id_mpc);

        const NombreAdministradorc = document.createElement('td');
        NombreAdministradorc.textContent = element.Nombre;
        contenido.appendChild(NombreAdministradorc);

        const AdministradorCedulacc = document.createElement('td');
        AdministradorCedulacc.textContent = element.Cedula;
        contenido.appendChild(AdministradorCedulacc);

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
            const id_Inventario_P = document.getElementById("id_InvPro");
            const TipoAct = document.getElementById("TipoInvPro");
            const DescripcionAct = document.getElementById("DescripcionInvPro");
            const EntradaAct = document.getElementById("EntradaInvPro");
            const StockAct = document.getElementById("StockInvPro");
            const SalidaAct = document.getElementById("SalidaInvPro");

            id_Inventario_P.value = element.id_Inventario_P;
            TipoAct.value = element.Tipo;
            DescripcionAct.value = element.Descripcion;
            EntradaAct.value = element.Entradas;
            StockAct.value = element.Stock;
            SalidaAct.value = element.Salida;

            $('#ActuInvPro').modal('show');
        }

        document.getElementById('ActualizarInvProCancelar').addEventListener('click', function () {
            $('#ActuInvPro').modal('hide');
        });

        //Creacion del Boton AGREGAR
        const buttonAgregar = document.createElement('button');
        buttonAgregar.textContent = 'AGREGAR';
        buttonAgregar.classList.add('btn', 'btn-success');
        contenido.appendChild(buttonAgregar);

        buttonAgregar.addEventListener('click', abrirModalRegistrar);

        //Funcion Para Abrir la Ventana Modal de Actualizar Registros
        function abrirModalRegistrar() {
            $('#RegistroInvPro').modal('show');
        }

        tableInvPro.appendChild(contenido);
    }
    // Agrega la tabla al elemento apropiado en el documento
    document.body.appendChild(tableInvPro);
}


function ActualizarInvProCancelar() {
    $('#ActuInvPro').modal('hide');
}
document.getElementById('ActualizarInvProCancelar').addEventListener('click', ActualizarInvProCancelar);  
    

function ocultarModalRegistroInvPro() {
    $('#RegistroInvPro').modal('hide');
}
document.getElementById('RegistrarInvProCancelar').addEventListener('click', ocultarModalRegistroInvPro);

//Se Traen Los Valores a Actualiar



const id_Inventario_P = document.getElementById("id_InvPro");
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
            ActualizarInvProCancelar();
        } else {
            alert(" no de registro la actualizacion")
        }

    } catch (error) {
        console.log("error", error);
    }
}




//Se Traen Los Valores  a Registrar


const FormRegistroInvPro = document.querySelector("#FormRegistroInvPro");
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
            Tipo: TipoRegistroIvnPro.value,
            Descripcion: DescripcionRegistroIvnPro.value,
            Entradas: EntradasRegistroIvnPro.value,
            Stock: StockRegistroIvnPro.value,
            Salida: SalidaRegistroIvnPro.value,
            Nombre:"julian",
            Cedula:"1110001110",
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
            FormRegistroInvPro.reset();
            alert("Se Agrego el Registro Correctamente");
            getfetchInvPro();
            ocultarModalRegistroInvPro();
        } else {
            alert("Error al intentar Agregar el Registro");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}


