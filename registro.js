//elementos del formulario

const formRegistro = document.getElementById('formRegistro')
const formMail = document.getElementById('formMail')
const formNombre = document.getElementById('formNombre')
const formTelefono = document.getElementById('formTel')

const mail = document.getElementById('mail')
const nombre = document.getElementById('nombreApellido')
const telefono = document.getElementById('telefono')
const pais = document.getElementById('selectPais')

//imagenes para alerta

const imgArg = "../img/argentina.jpg"
const imgChile = "../img/chile.jpg"
const imgUruguay = "../img/uruguay.jpg"


//Validacion de datos

formRegistro.addEventListener('submit', validarDatosForm)


function validarDatosForm(e) {
    e.preventDefault()
    let nombreOk = nombre.value
    let mailOk = mail.value
    let telefonoOk = isFinite(telefono.value) && telefono.value > 0;
    let paisOk = (pais.value == 'Argentina' || pais.value == 'Uruguay' || pais.value == 'Chile')
    if ((nombreOk.length == 0) || (mailOk.length == 0) || !(telefonoOk) || !(paisOk)) {
        swal({
            title: "Error",
            text: "Ingrese los datos con mas cuidado",
            
        })

    } else {
        switch (pais.value) {
            case 'Argentina':
                swal({
                    title: "Bienvenido:",
                    text: nombre.value.toUpperCase(),
                    icon: imgArg,
                });
                setTimeout(() => {
                    window.location.href = "comprar.html";
                }, 3000)

                break;
            case 'Uruguay':
                swal({
                    title: "Bienvenido:",
                    text: nombre.value.toUpperCase(),
                    icon: imgUruguay,
                });
                setTimeout(() => {
                    window.location.href = "comprar.html";
                }, 3000)
                break;
            case 'Chile':
                swal({
                    title: "Bienvenido:",
                    text: nombre.value.toUpperCase(),
                    icon: imgChile,
                });
                setTimeout(() => {
                    window.location.href = "comprar.html";
                }, 3000)
                break;

            default:
                break;
        }
    }

}



