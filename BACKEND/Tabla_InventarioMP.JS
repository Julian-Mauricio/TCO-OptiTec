const table = document.querySelector('#table');


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

function mostrarFetch(data) {
    table.innerHTML = '';
    const cabecera = document.createElement('tr');

    const id = document.createElement('th');
    id.textContent = 'ID';
    cabecera.appendChild(id);

    const name = document.createElement('th');
    name.textContent = 'NOMBRE';
    cabecera.appendChild(name);

    const userName = document.createElement('th');
    userName.textContent = 'NOMBRE DE USUARIO';
    cabecera.appendChild(userName);

    const email = document.createElement('th');
    email.textContent = 'CORREO ELECTRÓNICO';
    cabecera.appendChild(email);

    const phone = document.createElement('th');
    phone.textContent = 'TELÉFONO';
    cabecera.appendChild(phone);

    const ACCION = document.createElement('th');
    ACCION.textContent = 'ACCION';
    cabecera.appendChild(ACCION);


    table.appendChild(cabecera);

    for (let i = 0; i < data.body.length; i++) {
        const element = data.body[i];
        const contenido = document.createElement('tr');

        const idc = document.createElement('td');
        idc.textContent = element.id_Inventario_MP;
        contenido.appendChild(idc);

        const namec = document.createElement('td');
        namec.textContent = element.Tipo;
        contenido.appendChild(namec);

        const userNamec = document.createElement('td');
        userNamec.textContent = element.Entradas;
        contenido.appendChild(userNamec);

        const emailc = document.createElement('td');
        emailc.textContent = element.Stock
            ;
        contenido.appendChild(emailc);

        const phonec = document.createElement('td');
        phonec.textContent = element.Salida;
        contenido.appendChild(phonec);

        //Creacion del Boton Eliminar

        const buttonEliminar = document.createElement('button');
        buttonEliminar.textContent = 'Acción';
        buttonEliminar.classList.add('btn', 'btn-danger');  // Clases de Bootstrap

        //Creacion del Boton Actualizar

        const buttonActualizar = document.createElement('button');
        buttonActualizar.textContent = 'Acción';
        buttonActualizar.classList.add('btn', 'btn-primary');

        //Anexo los Botones 

        const ACCIONC = document.createElement('td');
        ACCIONC.appendChild(buttonEliminar);
        ACCIONC.appendChild(buttonActualizar);
        contenido.appendChild(ACCIONC);

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
























        table.appendChild(contenido);
    }
    // Agrega la tabla al elemento apropiado en el documento
    document.body.appendChild(table);
}





