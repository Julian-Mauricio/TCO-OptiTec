const table2 = document.querySelector('#table');


async function getfetch2() {
    const url = 'http://localhost:4000/api/Produccion';
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        mostrarFetch2(data);
    } catch (error) {
        console.log('Error fetching data:', error);
    }
}

function mostrarFetch2(data) {
    table2.innerHTML = '';
    const cabecera = document.createElement('tr');

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

    const descripcion = document.createElement('th');
    descripcion.textContent = 'Descripcion';
    cabecera.appendChild(descripcion);

    const accion = document.createElement('th');
    accion.textContent = 'ACCION';
    cabecera.appendChild(accion);


    table2.appendChild(cabecera);

    for (let i = 0; i < data.body.length; i++) {
        const element = data.body[i];
        const contenido = document.createElement('tr');

        const idc = document.createElement('td');
        idc.textContent = element.id_Inventario_P;
        contenido.appendChild(idc);

        const tipoc = document.createElement('td');
        tipoc.textContent = element.Tipo;
        contenido.appendChild(tipoc);

        const entradac = document.createElement('td');
        entradac.textContent = element.Entradas;
        contenido.appendChild(entradac);

        const stockc = document.createElement('td');
        stockc.textContent = element.Stock;
        contenido.appendChild(stockc);

        const salidac = document.createElement('td');
        salidac.textContent = element.Salida;
        contenido.appendChild(salidac);

        const descripcionc = document.createElement('td');
        descripcionc.textContent = element.Descripcion;
        contenido.appendChild(descripcionc);

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
                    getfetch();
                } else {
                    alert("No Se Elimino Ningun Registro");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }



        table2.appendChild(contenido);
    }
    // Agrega la tabla al elemento apropiado en el documento
    document.body.appendChild(table2);
}








