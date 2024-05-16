// Código de validaciones del formulario

const formulario = document.querySelector("#formulario");
const nombreInput = document.querySelector('#nombre');
const apellidosInput = document.querySelector('#apellidos');
const correoInput = document.querySelector('#correo');
const usuarioInput = document.querySelector('#usuario');
const claveInput = document.querySelector('#clave');
const telefonoInput = document.querySelector('#telefono');
const errorValidacion = document.querySelector('#error_validacion');
const divRespuestaServidor = document.querySelector('#info-respuesta');
const respuestaServidor = document.querySelector('#respuesta-servidor');

let formValidado = false;

function validarNombre() {
    /*  ### REGEX ### El siguiente Regex permite nombres simples y nombres compuestos de entre 1 y 20 carácteres
    
    ^(?=.{1,20}$) -> "?=" Positive lookahead. Comprueba sin afectar al resto de la expresión, que la cadena se compone de entre 1 y 20 caracteres cualquiera excepto salto de linea "."
    [a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+ -> Especifica que debe tener más de un caracter de los definidos en el corchete
    (\s[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+)? -> Si tras lo anterior hay un espacio, debe haber también uno o más carácteres de los definidos en el corchete
    */
    if (/^(?=.{1,20}$)[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+(\s[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+)?$/.test(nombreInput.value)) { // Vemos si el valor del input reune los criterios de validación

        if(nombreInput.classList.contains('error')){ // Codigo que se ejecuta si la validación había fallado previamente en este campo del formulario

            nombreInput.classList.remove("error"); // Borramos la clase que resalta el campo en rojo por error de validación
            comprobarErrorValidacion(); // Revisamos si procede que siga activo el mensaje de error de validación (si hay algún otro fallo de validación en otro campo debe permanecer)
        }

    }else{  // Codigo que se ejecuta si el valor del input no ha pasado la validación

        nombreInput.classList.add("error"); // Añadimos a la lista de clases la clase que resalta el campo en rojo por error de validación
        errorValidacion.style.display = "block"; // Hacemos visible el mensaje de error de validación. Nos da igual si los otros está validados o no
    }
}

function validarApellidos() {
    // El siguiente Regex permite un apellido, o varios separados por un solo espacio. La cadena debe tener entre 2 y 40 caracteres
    if(/^(?=.{2,40}$)[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+(\s[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+)*$/.test(apellidosInput.value)) {

        if(apellidosInput.classList.contains('error')){

            apellidosInput.classList.remove("error");
            comprobarErrorValidacion();
        }

    }else{

        apellidosInput.classList.add("error");
        errorValidacion.style.display = "block";
    }
}

function validarCorreo() {
    // El siguiente Regex permite carácteres alfanuméricos además de los símbolos habituales permitidos "._-" antes y después de la @,  
    // acabando necesariamente con los dominios de nivel superior ".com, .net, .es, .gal, o .org".
    if(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.(com|net|es|gal|org)$/.test(correoInput.value)) {

        if(correoInput.classList.contains('error')){

            correoInput.classList.remove("error");
            comprobarErrorValidacion();
        }

    }else{

        correoInput.classList.add("error");
        errorValidacion.style.display = "block";
    }
}

function validarUsuario() {
    // El siguiente Regex permite carácteres alfanuméricos, máximo 20 y no puede quedar vacio
    if(/^[a-zA-Z0-9ñÑ]{1,20}$/.test(usuarioInput.value)){

        if(usuarioInput.classList.contains('error')){

            usuarioInput.classList.remove("error");
            comprobarErrorValidacion();
        }

    }else{

        usuarioInput.classList.add("error");
        errorValidacion.style.display = "block";
    }
}


function validarClave(){
    /* REGEX: Permite contraseñas con al menos una mayúscula, una minúscula, un número y un símbolo, y de al menos 8 caracteres

    (?=.*[a-z]) -> ?= Possitive lookahead. Comprueba sin afectar al resto de la expresión, que la cadena se compone de al menos una minúscula
                   en cualquier posición (Esto lo hace con .*, que significa que puede tener o no algun caracter cualquiera excepto salto de linea
                   delante de la minúscula)
    (?=.*[A-Z])(?=.*\d)(?=.*[$@¡!%*+#¿?&_\-]) -> Repite lo anterior para comprobar que hay también mayúsculas, números y símbolos. 
    [A-Za-z\dñÑ$@¡!%*+#¿?&_\-]{8,} -> La cadena debe tener al menos 8 carácteres del tipo especificado en los corchetes
    */
    if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@¡!%*+#¿?&_\-])[A-Za-z\dñÑ$@¡!%*+#¿?&_\-]{8,}$/.test(claveInput.value)){


        if(claveInput.classList.contains('error')){

            claveInput.classList.remove("error");
            comprobarErrorValidacion();
        }

    }else{

        claveInput.classList.add("error");
        errorValidacion.style.display = "block";
    }
}


function validarTelefono() {
    /* REGEX: Permite contraseñas con al menos una mayúscula, una minúscula, un número y un símbolo, y de al menos 8 caracteres

    (?=.*[a-z]) -> ?= Possitive lookahead. Comprueba sin afectar al resto de la expresión, que la cadena se compone de al menos una minúscula
                   en cualquier posición (Esto lo hace con .*, que significa que puede tener o no algun caracter cualquiera excepto salto de linea
                   delante de la minúscula)
    (?=.*[A-Z])(?=.*\d)(?=.*[$@¡!%*+#¿?&_\-]) -> Repite lo anterior para comprobar que hay también mayúsculas, números y símbolos. 
    [A-Za-z\d$@¡!%*+#¿?&_\-]{8,} -> La cadena debe tener al menos 8 carácteres del tipo especificado en los corchetes
    */
    if (/^\d{9}$/.test(telefonoInput.value)) {


        if (telefonoInput.classList.contains('error')){
            
            telefonoInput.classList.remove("error");
        }
        comprobarErrorValidacion();

    } else {

        telefonoInput.classList.add("error");
        errorValidacion.style.display = "block";
    }
}


function comprobarErrorValidacion() { // Comprueba si procede que siga activo el mensaje de error de validación verificando que todos los campos estén validados
// Esta función solo detecta errores de validación de campos que han tenido el foco, no queremos que de error antes de que se haya dado tiempo a intentar completar los campos
    if (nombreInput.classList.contains('error') || apellidosInput.classList.contains('error') || correoInput.classList.contains('error') ||
        usuarioInput.classList.contains('error') || claveInput.classList.contains('error') || telefonoInput.classList.contains('error')) {

        errorValidacion.style.display = "block"; // Hacemos visible el mensaje de error de validación. 
        formValidado = false; // Registramos fallo de validación para bloquear luego el envío del formulario

    } else {

        errorValidacion.style.display = "none"; // Hacemos invisible el mensaje de error de validación. 
        formValidado = true; // Registramos validación correcta de todos los campos para desbloquear el envío del formulario. Nótese que necesita de pasar el foco por todos los campos en el momento previo del envío
    }
}

//Eventlisteners para disparar las validaciones en cada input
nombreInput.addEventListener("blur", validarNombre);
apellidosInput.addEventListener("blur", validarApellidos);
correoInput.addEventListener("blur", validarCorreo);
usuarioInput.addEventListener("blur", validarUsuario);
claveInput.addEventListener("blur", validarClave);
telefonoInput.addEventListener("blur", validarTelefono);

formulario.addEventListener("submit", function (event){ // Eventlistener de envío del formulario

    event.preventDefault(); // Bloqueamos la recarga de la página y el envío estandar de datos, lo haremos con XHR - XMLHttpRequest

    nombreInput.focus(); // Desde aqui...
    apellidosInput.focus();
    correoInput.focus();
    usuarioInput.focus();
    claveInput.focus();
    telefonoInput.focus();
    telefonoInput.blur(); // ...Hasta aqui hacemos el barrido de inputs para que salten posibles errores de validación en los campos del formulario
    comprobarErrorValidacion(); // Llamamos a la función que tras el barrido comprueba si está todo validado o no. (Se ha explicado porque no se hace dentro de la función)

    if(formValidado === true){ // Comprobamos la variable global que bloquea o desbloquea el envío del formulario, la configura la función comprobarErrorValidacion()

        enviarDatos(); // Ejecutamos el código de envío de formulario con XHR - XMLHttpRequest

    }
});

// Envio de datos con XMLHttpRequest

function enviarDatos(){

    const xhr = new XMLHttpRequest(); // Creamos objecto de solicitud HTTP

    xhr.open("POST", "http://localhost/registrar.php", true); // Configuramos el objecto con la dirección del script de servidor
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); // Configuramos cabecera de la solicitud
    
    
    xhr.onreadystatechange = function () { 
        // Asignamos al evento de cambio de estado de la solicitud una función anónima que comprueba que el estado de la misma
        // es COMPLETED (valor 4) y si el código de estado HTTP es 200 (que significa OK)
        if (xhr.readyState === 4 && xhr.status === 200){

            divRespuestaServidor.style = "block"; // Hacemos visible el div que contiene el elemento <p> que contendrá la respuesta del servidor
            respuestaServidor.innerHTML = xhr.responseText; // Extraemos el mensaje del servidor del objecto XHR y lo metemos en el elemento <p>
        }
    };
    
    // Con el método send enviamos los datos del formulario al servidor PHP
    xhr.send(`nombre=${nombreInput.value}&apellidos=${apellidosInput.value}&correo=${correoInput.value}
        &usuario=${usuarioInput.value}&clave=${claveInput.value}&telefono=${telefonoInput.value}`);
}
