// Selección del elemento de la tabla mediante su ID
const table = document.querySelector('#table');

// Selección del elemento de la tabla mediante su ID
async function getfetch() {
    const url = 'http://localhost:4000/api/Materia';
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        mostrarFetch(data);
    } catch (error) {
        console.log('Error fetching data:', error);
    }
}

// Función para mostrar los datos en la tabla

function mostrarFetch(data) {
    table.innerHTML = ''; // Limpia el contenido actual de la tabla

    // Creación de la cabecera de la tabla
    const cabecera = document.createElement('tr');

    // Creación de columnas para la cabecera
    const id = document.createElement('th');
    id.textContent = 'ID';
    cabecera.appendChild(id);

    const tipo = document.createElement('th');
    tipo.textContent = 'TIPO';
    cabecera.appendChild(tipo);

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


    table.appendChild(cabecera); // Agrega la cabecera a la tabla

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

        //Creacion del Boton Actualizar
        const buttonActualizar = document.createElement('button');
        buttonActualizar.textContent = 'ACTUALIZAR';
        buttonActualizar.classList.add('btn', 'btn-primary');

        //Creacion del Boton AGREGAR
        const buttonAgregar = document.createElement('button');
        buttonAgregar.textContent = 'AGREGAR';
        buttonAgregar.classList.add('btn', 'btn-success');

        //Anexo los Botones 
        const accionc = document.createElement('td');
        accionc.appendChild(buttonEliminar);
        accionc.appendChild(buttonActualizar);
        accionc.appendChild(buttonAgregar);
        contenido.appendChild(accionc);

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
                    getfetch();
                } else {
                    alert("No Se Elimino Ningun Registro");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }

        buttonActualizar.addEventListener('click', function () {
            // Llama a una función para abrir el modal
            abrirModal();
        });

        function abrirModal() {
            const modal = document.getElementById('exampleModal');
            const bootstrapModal = new bootstrap.Modal(modal);
            bootstrapModal.show();
        }



        /*FUNCION ACTUALIZAR DATOS*/
        const id_Inventario_MP = document.querySelector('#id_Inventario_MP')
        const Tipo = document.querySelector('#tipo');
        const entrada = document.querySelector('#entrada');
        const stock = document.querySelector('#stock');
        const salida = document.querySelector('#salida');

        const ActivarUpdae = document.querySelector('#ActivarUpdae')
        ActivarUpdae.addEventListener('click', UpdateRegistro);

        async function UpdateRegistro(event) {
            event.preventDefault();
            try {
                const url = "http://localhost:4000/api/Materia/Update";
                const data = {
                    id_Inventario_MP: id_Inventario_MP.value,
                    Tipo: Tipo.value,
                    Entradas: entrada.value,
                    Stock: stock.value,
                    Salidas: salida.value,
                };
                const requestOptions = {
                    method: "PATCH", // Método de solicitud PATCH
                    headers: {
                        "Content-Type": "application/json", // Tipo de contenido del cuerpo de la solicitud
                    },
                    body: JSON.stringify(data), // Convierte los datos a formato JSON y los coloca en el cuerpo de la solicitud
                };
                const response = await fetch(url, requestOptions);
                const Responses = await response.json();
                if (Responses.status === 200) {
                    alert("Registro editado correctamente");
                    getFetch()
                } else {
                    alert("Error al actualizar el registro");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }
























        table.appendChild(contenido);
    }
    // Agrega la tabla al elemento apropiado en el documento
    document.body.appendChild(table);
}





