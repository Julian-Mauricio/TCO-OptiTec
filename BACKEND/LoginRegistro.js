const FormRegistro = document.querySelector("#FormularioRegistro"); 
const NombreRegistro = document.querySelector("#NombreRegistro");
const ApellidoRegistro = document.querySelector("#ApellidoRegistro"); 
const DniRegistro = document.querySelector("#DniRegistro"); 
const DireccionRegistro = document.querySelector("#DireccionRegistro"); 
const CorreoRegistro = document.querySelector("#CorreoRegistro");
const TelefonoRegistro = document.querySelector("#TelefonoRegistro");
const UsuarioRegistro = document.querySelector("#UsuarioRegistro");
const PasswordRegistro = document.querySelector("#PasswordRegistro");
const FechaNacimientoRegistro = document.querySelector("#FechaNacimientoRegistro");
const GeneroRegistro = document.querySelector("#GeneroRegistro");


document.getElementById("EnviarRegistro").addEventListener("click", RegistroLogin);

async function RegistroLogin(event) {
  event.preventDefault();
  try {
    const url = "http://localhost:4000/api/Login/Insert";
    const data = {
        Nombre: NombreRegistro.value,
        Apellido: ApellidoRegistro.value,
        Dni: DniRegistro.value,
        Direccion: DireccionRegistro.value,
        Correo: CorreoRegistro.value,
        Telefono: TelefonoRegistro.value,
        Usuario: UsuarioRegistro.value,
        Password: PasswordRegistro.value,
        Fecha_Nacimiento: FechaNacimientoRegistro.value,
        Rol: "UserUsuario",
        Gender: GeneroRegistro.value,
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
      FormRegistro.reset();
      alert("El usuario se registro correctamente");
      window.open('1.Interfas_Principal.html', '_self');
    }else {
      alert("Error al intentar registrarse");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}