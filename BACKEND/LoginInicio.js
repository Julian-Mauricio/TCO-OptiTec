const form1 = document.querySelector("#formularioLogin"); //traer la informacion del id o clase
const input1 = document.querySelector("#UsernameLoguearse"); //traer la informacion del id o clase
const input2 = document.querySelector("#PasswordLoguearse"); //traer la informacion del id o clase

document.getElementById("EnviarLogin").addEventListener("click", WhereLogin);

async function WhereLogin(event) {
    event.preventDefault();
    try {
        const url = "http://localhost:4000/api/Login/Where";
        const data = {
            Usuario: input1.value,
            Password: input2.value,

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
        console.log(Responses);
        if (Responses.body[0]?.Rol === "Admin") {
            form1.reset();
            window.open('4.Inventarios.html', '_self');
        } else if (Responses.body[0]?.Rol === "User") {
            form1.reset();
            window.open('1.Pantalla_Principal.html', '_self');
        } else {
            alert("El usuarion con las credenciales ingresadas no puede acceder a la aplicacion por favor registrese");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}