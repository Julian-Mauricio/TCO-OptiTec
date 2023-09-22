const table = document.querySelector('#table');


async function getfetch() {
    const url = 'http://localhost:4000/api/Login';
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
        idc.textContent = element.id_Login;
        contenido.appendChild(idc);

        const namec = document.createElement('td');
        namec.textContent = element.Nombre;
        contenido.appendChild(namec);

        const userNamec = document.createElement('td');
        userNamec.textContent = element.Direccion;
        contenido.appendChild(userNamec);

        const emailc = document.createElement('td');
        emailc.textContent = element.Dni;
        contenido.appendChild(emailc);

        const phonec = document.createElement('td');
        phonec.textContent = element.Password;
        contenido.appendChild(phonec);

        const button = document.createElement('button');
        button.textContent = 'Acción';
        button.classList.add('btn', 'btn-danger');  // Clases de Bootstrap

        const button2 = document.createElement('button');
        button2.textContent = 'Acción';
        button2.classList.add('btn', 'btn-primary');  // Clases de Bootstrap

        const ACCIONC = document.createElement('td');
        ACCIONC.appendChild(button);
        ACCIONC.appendChild(button2);
        contenido.appendChild(ACCIONC);


        table.appendChild(contenido);
    }
    // Agrega la tabla al elemento apropiado en el documento
    document.body.appendChild(table);
}






