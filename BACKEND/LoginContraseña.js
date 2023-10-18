const FormReCup = document.querySelector("#FormularioReCup"); 
const UserReCup = document.querySelector("#UsernameLoguearse"); 
const PasswordReCup = document.querySelector("#PasswordRecup"); 

document.getElementById("EnviarRecup").addEventListener("click", LoginContraseña);

async function LoginContraseña(event) {
  event.preventDefault();
  try {
    const url = "http://localhost:4000/api/Login/Update";
    const data = {
      Usuario: UserReCup.value,
      Password: PasswordReCup.value,
    };
    const requestOptions = {
      method: "PATCH", 
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(data), 
    };
    const response = await fetch(url, requestOptions);
    const Responses = await response.json();
    if (Responses.status === 200) {
      FormReCup.reset();
      alert("Contraseña Recuperada")
      window.open('1.Interfas_Principal.html', '_self');
    } else {
      alert("Error al actualizar la contraseña");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}