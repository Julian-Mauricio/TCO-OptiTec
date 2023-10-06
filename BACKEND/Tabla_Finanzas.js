const tFinanzas = document.querySelector('#tableInventarios');
document.getElementById("getfetchFinz").addEventListener("click", getfetchFinz)

async function getfetchFinz() {
    const urlFinz = 'http://localhost:4000/api/Finanzas';
    try {
        const responseFinz = await fetch(urlFinz);
        const dataFinz = await responseFinz.json();
        console.log(dataFinz);
        mostrarFetchFinz(dataFinz);
    } catch (error) {
        console.log('Error fetching data:', error);
    }
}

// Función para mostrar los datos en la tabla

function mostrarFetchFinz(dataFinz) {
    tFinanzas.innerHTML = '';

    const cabFinz = document.createElement('tr');

    const idCorFinz = document.createElement('th');
    idCorFinz.textContent = 'Id Corte';
    cabFinz.appendChild(idCorFinz);

    const NombreFinz = document.createElement('th');
    NombreFinz.textContent = 'Usuario';
    cabFinz.appendChild(NombreFinz);

    const NombreCedulaFinz = document.createElement('th');
    NombreCedulaFinz.textContent = 'Cedula';
    cabFinz.appendChild(NombreCedulaFinz);

    const saldFinz = document.createElement('th');
    saldFinz.textContent = 'Saldo';
    cabFinz.appendChild(saldFinz);

    const pagFinz = document.createElement('th');
    pagFinz.textContent = 'Metodo Pago';
    cabFinz.appendChild(pagFinz);

    const totFinz = document.createElement('th');
    totFinz.textContent = 'Total';
    cabFinz.appendChild(totFinz);

    tFinanzas.appendChild(cabFinz);

    for (let i = 0; i < dataFinz.body.length; i++) {
        const elementFinz = dataFinz.body[i];

        const contFinz = document.createElement('tr');

        const id_Finz = document.createElement('td');
        id_Finz.textContent = elementFinz.id_Corte;
        contFinz.appendChild(id_Finz);

        const NombreFinzc = document.createElement('td');
        NombreFinzc.textContent = elementFinz.Nombre;
        contFinz.appendChild(NombreFinzc);

        const NombreCedulaFinzc = document.createElement('td');
        NombreCedulaFinzc.textContent = elementFinz.Cedula;
        contFinz.appendChild(NombreCedulaFinzc);

        const Sald = document.createElement('td');
        Sald.textContent = elementFinz.Saldo;
        contFinz.appendChild(Sald);

        const metPag = document.createElement('td');
        metPag.textContent = elementFinz.Metodo_Pago;
        contFinz.appendChild(metPag);

        const totMon = document.createElement('td');
        totMon.textContent = elementFinz.Total_Monto;
        contFinz.appendChild(totMon);

        //Creacion del Boton Eliminar
        const deletFinz = document.createElement('button');
        deletFinz.textContent = 'ELIMINAR';
        deletFinz.classList.add('btn', 'btn-danger');

        contFinz.appendChild(deletFinz);
        deletFinz.addEventListener('click', DeleteFinz)

        //Funcion de Eliminar Registros

        async function DeleteFinz() {
            try {
                const urlFinzDel = 'http://localhost:4000/api/Finanzas/Delete';
                const data = {
                    id_Corte: elementFinz.id_Corte,
                }
                const requestOptions = {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                };
                const responseFinzDel = await fetch(urlFinzDel, requestOptions);
                const responDelFinz = await responseFinzDel.json();

                if (responDelFinz.status === 200) {
                    alert("Se Elimino de Manera Correcta el Registro");
                    getfetchFinz();
                } else {
                    alert("No Se Elimino Ningun Registro");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }

        //Creacion del Boton Actualizar
        const buttonUpdFinz = document.createElement('button')
        buttonUpdFinz.textContent = 'ACTUALIZAR';
        buttonUpdFinz.classList.add('btn', 'btn-primary');
        contFinz.appendChild(buttonUpdFinz);

        buttonUpdFinz.addEventListener('click', updateFinz);

        function updateFinz() {
            const id_Finanzas = document.getElementById("id_actFinz");
            const saldoFinanza = document.getElementById("saldoactFinz");
            const NombreFinanza = document.getElementById("NombreactFinz");
            const CedulaFinanza = document.getElementById("CedulaactFinz");
            const metPagFinzs = document.getElementById("metPagactFinz");
            const totMonFinzs = document.getElementById("totMonactFinz");

            
            id_Finanzas.value = elementFinz.id_Corte;
            NombreFinanza.value = elementFinz.Nombre;
            CedulaFinanza.value = elementFinz.Cedula;
            saldoFinanza.value = elementFinz.Saldo;
            metPagFinzs.value = elementFinz.Metodo_Pago;
            totMonFinzs.value = elementFinz.Total_Monto;

            $('#ActuFinz').modal('show');
        }

        //Creacion del Boton AGREGAR
        const buttonAgregarFinz = document.createElement('button');
        buttonAgregarFinz.textContent = 'AGREGAR';
        buttonAgregarFinz.classList.add('btn', 'btn-success');
        contFinz.appendChild(buttonAgregarFinz);

        buttonAgregarFinz.addEventListener('click', abrirModalRegistrarFinz);

        function abrirModalRegistrarFinz() {
            $('#Registro_Finz').modal('show');
        }


        tFinanzas.appendChild(contFinz);
    }
    // Agrega la tabla al elemento apropiado en el documento
    document.body.appendChild(tFinanzas);
}

// Cerrar el modal al hacer clic en otro botón, 
// Asigna el evento de click para cerrar la modal al botón "Cancelar Cambios"
function ocultarModalActuFinz() {
    $('#ActuFinz').modal('hide');
}
document.getElementById('ActualizarCancelarFinz').addEventListener('click', ocultarModalActuFinz);


function ocultarModalRegistroFinz() {
    $('#Registro_Finz').modal('hide');
}
document.getElementById('RegistrarFinzCancelar').addEventListener('click', ocultarModalRegistroFinz);


const id_Finanzas = document.getElementById("id_actFinz");
const NombreFinanza = document.getElementById("NombreactFinz");
const CedulaFinanza = document.getElementById("CedulaactFinz");
const saldo_Finanza = document.getElementById("saldoactFinz");
const metPag_Finzs = document.getElementById("metPagactFinz");
const totMon_Finzs = document.getElementById("totMonactFinz");

document.getElementById("ActualizarFinz").addEventListener("click", ActualizarFinz);

//Funcion de Actualizar Registros de Inventario de Materia Prima

async function ActualizarFinz(event) {
    event.preventDefault();
    try {
        const urlupdFinz = "http://localhost:4000/api/Finanzas/Update";
        const data = {
            id_Corte: id_Finanzas.value,
            Nombre: NombreFinanza.value,
            Cedula: CedulaFinanza.value,
            Saldo: saldo_Finanza.value,
            Metodo_Pago: metPag_Finzs.value,
            Total_Monto: totMon_Finzs.value
        }

        const requestOptions = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };

        const responseactFinz = await fetch(urlupdFinz, requestOptions);
        const reponsesactFinzs = await responseactFinz.json();
        console.log(reponsesactFinzs);
        if (reponsesactFinzs.status === 200) {
            getfetchFinz();
            ocultarModalActuFinz();
        } else {
            alert(" no de registro la actualizacion")
        }

    } catch (error) {
        console.log("error", error);
    }
}

//Se Traen Los Valores  a Registrar

const id_CorteReg = document.querySelector("#id_regFinz");
const Nombre_RegFinz = document.querySelector("#NombreregFinz");
const Cedula_RegFinz = document.querySelector("#CedularegFinz");
const saldo_RegFinz = document.querySelector("#saldoregFinz");
const metPag_RegFinz = document.querySelector("#metPagregFinz");
const totMon_RegFinz = document.querySelector("#totMonregFinz");

document.getElementById("RegistrarButton_Finz").addEventListener("click", RegistroFinanzas);

async function RegistroFinanzas(event) {
    event.preventDefault();
    try {
        const urlreg = "http://localhost:4000/api/Finanzas/Insert";
        const data = {
            Nombre: Nombre_RegFinz.value,
            Cedula: Cedula_RegFinz.value,
            Saldo: saldo_RegFinz.value,
            Metodo_Pago: metPag_RegFinz.value,
            Total_Monto: totMon_RegFinz.value
        };
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };
        const responsereg = await fetch(urlreg, requestOptions);
        const ResponsesReg = await responsereg.json();
        if (ResponsesReg.status === 200) {
            alert("Se Agrego el Registro Correctamente");
            getfetchFinz();
            ocultarModalRegistroFinz();
        } else {
            alert("Error al intentar Agregar el Registro");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}