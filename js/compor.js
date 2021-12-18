let btnBolita=document.querySelector('.contenedorchatbot');

btnBolita.addEventListener('click',aparece);


function aparece(){
    let cuadroChatbot=document.querySelector('.cuadroChatbot');
    cuadroChatbot.setAttribute('style','display:block');
}
//Seleccion del Boton Cerrar 
let btnCerrar=document.querySelector('.btnCerrar');
btnCerrar.addEventListener('click',desaparecer);

function desaparecer(){
    let cuadroChatbot=document.querySelector('.cuadroChatbot');
    cuadroChatbot.setAttribute('style','display:none');
}
//enter para mandar escribir
let escrituraInput = document.querySelector('.mensajes');
escrituraInput.addEventListener('keyup',tecleado );

function tecleado( event ){
    if (event.key === "Enter")
    agregarTexto();
}

//seleccionar el boton enviar
let btnEnviar = document.querySelector('.btnEnviar');
btnEnviar.addEventListener('click', agregarTexto );

function agregarTexto(){
    //selecionar la caja de texto
    let cajaMensajes = document.querySelector('.mensajes');
    //obtenemos el texto de la caja
    let textoPregunta = cajaMensajes.value;
    //Borrar el texto del input
    cajaMensajes.value = "";
    //seleccionamos el chat
    let contenedorChat = document.querySelector('.chatChatbot');
    //creamo un elemento parrafo
    let parrafoNuevo = document.createElement('p');
    //agregamos una clase a p
    parrafoNuevo.className = 'mensajeUsuario';
    //añadir el texto al parrafo nuevo
    parrafoNuevo.innerHTML= "Tú: "+ textoPregunta;
    //añadir el parrafo chat
    contenedorChat.appendChild(parrafoNuevo);


    //IA
    let parrafoIA = document.createElement('p');
    parrafoIA.innerHTML = "IA: "+ IA(textoPregunta);
    contenedorChat.appendChild(parrafoIA);
    //linea de codigo para que se ponga hacia a bajo
    contenedorChat.scrollTop = contenedorChat.scrollHeight;   
}

function IA(pregunta){

    //pregunta 1
    let carreraPregunta = /años[a-z\s]*dura/gi;
    if(carreraPregunta.test(pregunta)){
        return "La carrera dura entre 4 a 5 años";
    } 
    //pregunta 2
    let comPregunta = /cómo[a-z\s]*está/gi;
    if(comPregunta.test(pregunta)){
        return "hola bien, en que te puedo ayudar";
    } 
    //pregunta 3
    let productoPregunta = /cuanto[a-z\s]*cuesta/gi;
    if(productoPregunta.test(pregunta)){
        return "Dependiendo de la marca del equipo, para mayor información contactame";
    } 
    //pregunta 4
    let radioPregunta = /marca[a-z\s]*radio/gi;
    if(radioPregunta.test(pregunta)){
        return "kenwood y motorola son marcas muy buenas y robustos";
    } 
    //pregunta 5
    let cursoPregunta = /curso[a-z\s]*recomienda/gi;
    if(cursoPregunta.test(pregunta)){
        return "todos los cursos son buenos, te recomiendo programación web";
    } 

}