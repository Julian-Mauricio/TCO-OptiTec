const formularioLogin = document.querySelector("#formularioLogin"); 
const UsernameLoguearse = document.querySelector("#UsernameLoguearse"); 
const PasswordLoguearse = document.querySelector("#PasswordLoguearse"); 

document.getElementById("EnviarLogin").addEventListener("click", WhereLogin);
//FALTA EL MOSTRAR EL USUARIO
async function WhereLogin(event) {
    event.preventDefault();
    try {
        const url = "http://localhost:4000/api/Login/Where";
        const data = {
            Usuario: UsernameLoguearse.value,
            Password: PasswordLoguearse.value,

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
        console.log(Responses);
        if (Responses.body[0]?.Rol === "Administrador") {
            formularioLogin.reset();
            window.open('4.Inventarios.html', '_self');
        } else if (Responses.body[0]?.Rol === "Usuario Normal") {
            formularioLogin.reset();
            window.open('1.Pantalla_Principal.html', '_self');
        } else {
            alert("El usuarion con las credenciales ingresadas no puede acceder a la aplicacion por favor intente de nuevo");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}