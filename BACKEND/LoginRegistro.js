const form = document.querySelector("#FormRegistro"); //traer la informacion del id o clase
const input1c = document.querySelector("#NombreRegistro"); //traer la informacion del id o clase
const input2c = document.querySelector("#ApellidoRegistro"); //traer la informacion del id o clase
const input3c = document.querySelector("#DniRegistro"); //traer la informacion del id o clase
const input4c = document.querySelector("#DireccionRegistro"); //traer la informacion del id o clase
const input5c = document.querySelector("#CorreoRegistro"); //traer la informacion del id o clase 
const input6c = document.querySelector("#TelefonoRegistro");
const input7c = document.querySelector("#UsuarioRegistro");
const input8c = document.querySelector("#PasswordRegistro");
const input9c = document.querySelector("#FechaNacimientoRegistro");
const input10c = document.querySelector("#GeneroRegistro");


document.getElementById("EnviarRegistro").addEventListener("click", RegistroLogin);

async function RegistroLogin(event) {
  event.preventDefault();
  console.log(input9c.value);
  try {
    const url = "http://localhost:4000/api/Login/Insert";
    const data = {
        Nombre: input1c.value,
        Apellido: input2c.value,
        Dni: input3c.value,
        Direccion: input4c.value,
        Correo: input5c.value,
        Telefono: input6c.value,
        Usuario: input7c.value,
        Password: input8c.value,
        Fecha_Nacimiento: input9c.value,
        Rol: "User",
        Gender: input10c.value,
    };
    const requestOptions = {
      method: "POST", // Método de solicitud POST
      headers: {
        "Content-Type": "application/json", // Tipo de contenido del cuerpo de la solicitud
      },
      body: JSON.stringify(data), // Convierte los datos a formato JSON y los coloca en el cuerpo de la solicitud
    };
    const response = await fetch(url, requestOptions);
    const Responses = await response.json();
    if (Responses.status === 200) {
      form.reset();
      alert("El usuario se registro correctamente");
      window.open('1.Pantalla_Principal.html', '_self');
    }else {
      alert("Error al intentar registrarse");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}