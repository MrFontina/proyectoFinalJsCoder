let formRegistro = document.getElementById('formRegistro')
let formMail = document.getElementById('formMail')
let formNombre = document.getElementById('formNombre')
let formTelefono = document.getElementById('formTel')

let mail = document.getElementById('mail')
let nombre = document.getElementById('nombreApellido')
let telefono = document.getElementById('telefono')
let pais = document.getElementById('selectPais')

const imgArg = "../img/argentina.jpg"
const imgChile = "../img/chile.jpg"
const imgUruguay = "../img/uruguay.jpg"

formRegistro.addEventListener('submit', validarDatosForm)





function validarDatosForm(e) {
    e.preventDefault()
    let nombreOk = nombre.value
    let mailOk = mail.value
    let telefonoOk = isFinite(telefono.value) && telefono.value > 0;
    let paisOk = (pais.value == 'Argentina' || pais.value == 'Uruguay' || pais.value == 'Chile')
    if ((nombreOk.length == 0) || (mailOk.length == 0) || !(telefonoOk) || !(paisOk)) {
        alert("MAL")

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



// function redirigir () = {
//     window.location.href = "https://www.google.com" 
// }