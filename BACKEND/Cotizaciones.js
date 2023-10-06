//Se Traen Los Valores  a Registrar
const FormularioCotizacion = document.getElementById("FormularioCotizacion");
const Nombre = document.querySelector("#Nombre");
const Telefono = document.querySelector("#Telefono");
const Email = document.querySelector("#Email");
const NombreEmpresa = document.querySelector("#NombreEmpresa");
const Nit = document.querySelector("#Nit");
const Medidas = document.querySelector("#Medidas");
const Cantidad = document.querySelector("#Cantidad");
const Direccion = document.querySelector("#Direccion");
const MetodoEntrega = document.querySelector("#MetodoEntrega");
const TipoMaterial = document.querySelector("#TipoMaterial");


document.getElementById("RegistrarCotizacion").addEventListener("click", RegistrarCotizacion);

//Funcion de  Registros de Inventario de Materia Prima
async function RegistrarCotizacion(event) {
    event.preventDefault();
    try {
        const url = "http://localhost:4000/api/Cotizacion/Insert";
        const data = {
            Nombre: Nombre.value,
            Nit_Empresarial: Nit.value,
            Direccion: Direccion.value,
            Telefono: Telefono.value,
            Correo: Email.value,
            Tipo_Elemento: TipoMaterial.value,
            Cantidad: Cantidad.value,
            Medidas: Medidas.value,
            Metod_Entrega: MetodoEntrega.value,
            Estado: "Pendiente",
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
            FormularioCotizacion.reset();
            alert("Se Agrego el Registro Correctamente");
            RegistrarCotizacion();
        } else {
            alert("Error al intentar Agregar el Registro");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

