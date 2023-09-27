const table3 = document.querySelector('#table');


async function getfetch3() {
    const url = 'http://localhost:4000/api/Finanzas';
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        mostrarFetch3(data);
    } catch (error) {
        console.log('Error fetching data:', error);
    }
}

function mostrarFetch3(data) {
    table3.innerHTML = '';
    const cabecera = document.createElement('tr');

    const id = document.createElement('th');
    id.textContent = 'ID';
    cabecera.appendChild(id);

    const metodo_p = document.createElement('th');
    metodo_p.textContent = 'METODO_PAGO';
    cabecera.appendChild(metodo_p);

    const saldo = document.createElement('th');
    saldo.textContent = 'SALDO';
    cabecera.appendChild(saldo);

    const total_m = document.createElement('th');
    total_m.textContent = 'TOTAL_MONTO';
    cabecera.appendChild(total_m);

    const usuario = document.createElement('th');
    usuario.textContent = 'USUARIO';
    cabecera.appendChild(usuario);

    const accion = document.createElement('th');
    accion.textContent = 'ACCION';
    cabecera.appendChild(accion);


    table3.appendChild(cabecera);

    for (let i = 0; i < data.body.length; i++) {
        const element = data.body[i];
        const contenido = document.createElement('tr');

        const idc = document.createElement('td');
        idc.textContent = element.id_Corte;
        contenido.appendChild(idc);

        const metodo_pc = document.createElement('td');
        metodo_pc.textContent = element.Metodo_Pago;
        contenido.appendChild(metodo_pc);

        const saldoc = document.createElement('td');
        saldoc.textContent = element.Saldo;
        contenido.appendChild(saldoc);

        const total_m = document.createElement('td');
        total_m.textContent = element.Total_Monto;
        contenido.appendChild(total_m);

        const usuarioc = document.createElement('td');
        usuarioc.textContent = element.id_Login;
        contenido.appendChild(usuarioc);


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
                const url = "http://localhost:4000/api/Finanzas/Delete";
                const data = {
                    id_Corte: element.id_Corte,
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
                    id_Inventario_MP:id_Inventario_MP.value,
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
























        table3.appendChild(contenido);
    }
    // Agrega la tabla al elemento apropiado en el documento
    document.body.appendChild(table3);
}








