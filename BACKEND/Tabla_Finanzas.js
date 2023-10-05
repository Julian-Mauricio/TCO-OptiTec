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

    const idFinz = document.createElement('th');
    idFinz.textContent = 'Id';
    cabFinz.appendChild(idFinz);

    const idCorFinz = document.createElement('th');
    idCorFinz.textContent = 'Id Corte';
    cabFinz.appendChild(idCorFinz);

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

        const id_LonFinz = document.createElement('td');
        id_LonFinz.textContent = elementFinz.id_Login;
        contFinz.appendChild(id_LonFinz);

        const id_Finz = document.createElement('td');
        id_Finz.textContent = elementFinz.id_Corte;
        contFinz.appendChild(id_Finz);

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
                    id_Corte: element.id_Corte,
                }
                const requestOptions = {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                };
                const responseFinzDel = await fetch(urlFinzDel, requestOptions);
                const responDelFinz = await responseFinzDel.JSON();
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
            const metPagFinzs = document.getElementById("metPagactFinz");
            const totMonFinzs = document.getElementById("totMonactFinz");

            id_Finanzas.value = element.id_Login;
            saldoFinanza.value = element.Saldo;
            metPagFinzs.value = element.Metodo_Pago;
            totMonFinzs.value = element.Total_Monto;

            const modalFinzs = new bootstrap.Modal(document.getElementById('ActuFinz'));
            modalFinzs.show();
        }

        //Creacion del Boton AGREGAR
        const buttonAgregarFinz = document.createElement('button');
        buttonAgregarFinz.textContent = 'AGREGAR';
        buttonAgregarFinz.classList.add('btn', 'btn-success');
        contFinz.appendChild(buttonAgregarFinz);

        buttonAgregarFinz.addEventListener('click', abrirModalRegistrarFinz);

        function abrirModalRegistrarFinz() {
            const modalFinzs = new bootstrap.Modal(document.getElementById('RegistroFinz'));
            modalFinzs.show();
        }

        tFinanzas.appendChild(contFinz);
    }
    // Agrega la tabla al elemento apropiado en el documento
    document.body.appendChild(tFinanzas);
}


const id_Finanzas = document.getElementById("id_actFinz");
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
            id_Login: id_Finanzas.value,
            Saldo: saldoFinanza.value,
            Metodo_Pago: metPagFinzs.value,
            Total_Monto: totMonFinzs.value
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
            getfetchInvPro();
        } else {
            alert(" no de registro la actualizacion")
        }

    } catch (error) {
        console.log("error", error);
    }
}

//Se Traen Los Valores  a Registrar

const id_CorteReg = document.querySelector("#id_regFinz");
const saldoRegFinz = document.querySelector("#saldoregFinz");
const metPagRegFinz = document.querySelector("#metPagregFinz");
const totMonRegFinz = document.querySelector("#totMonregFinz");
const descripcionRegistroFinz = document.querySelector("#DescripcionRegistroFinz");

document.getElementById("RegistrarFinz").addEventListener("click", RegistroFinanzas);

async function RegistroFinanzas(event) {
    event.preventDefault();
    try {
        const urlreg = "http://localhost:4000/api/Finanzas/Insert";
        const data = {
            id_Login: id_CorteReg.value,
            Saldo: saldoRegFinz.value,
            Metodo_Pago: metPagRegFinz.value,
            Total_Monto: totMonRegFinz.value,
            Descripcion: descripcionRegistroFinz.value
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
            getfetchInvPro();
        } else {
            alert("Error al intentar Agregar el Registro");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}