const FormReCup = document.querySelector("#FormularioReCup"); //traer la informacion del id o clase
const UserReCup = document.querySelector("#UsernameLoguearse"); //traer la informacion del id o clase
const PasswordReCup = document.querySelector("#PasswordRecup"); //traer la informacion del id o clase

document.getElementById("EnviarRecup").addEventListener("click", LoginContraseña);

async function LoginContraseña(event) {
  event.preventDefault();
  try {
    const url = "http://localhost:4000/api/Login/UpdateReCup";
    const data = {
      Usuario: UserReCup.value,
      Password: PasswordReCup.value,
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
      FormReCup.reset();
      alert("Contraseña Recuperada")
      window.open('1.Pantalla_Principal.html', '_self');
    } else {
      alert("Error al actualizar la contraseña");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}