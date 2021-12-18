//datos
let lista = ['img/matrix.jpg','img/venom.jpg','img/wason.jpg','img/shaolin.jpg', 'img/blade.jpg'];
var indice = 0;
// seleccionar los botones
let botones = document.querySelectorAll('.contenedorBotones img');
let btnAgregar = botones[0];
let btnEliminar = botones[1];

btnAgregar.addEventListener('click', function(){ agregar(lista) } );
btnEliminar.addEventListener('click', eliminar);


let filas = document.querySelectorAll('tr');

let contador = 5;

for( i=1; i<filas.length; i++){
    filas[i].addEventListener('mouseover', function(){
        mostrarImagen(this.id);
    });
}


function agregar( lista ){
    
    let nombrePelicula = prompt("Pelicula");
    console.log("Pelicula: "+nombrePelicula);

    let calificacionPelicula = prompt("Calificacion");
    console.log("Calificacion: "+calificacionPelicula);

    let urlImagen = prompt("Imagen");
    console.log("Imagen:"+urlImagen);
    lista[contador] = urlImagen;

    let tablaPeliculas = document.getElementById("tablaPeliculas");
    let mifila = document.createElement('tr');
    let tdid = document.createElement('td');
    contador = contador+1;
    tdid.innerText=contador;
    let tdtitulo = document.createElement('td');
    tdtitulo.innerText = nombrePelicula;    
    let tdcalificacion = document.createElement('td');
    tdcalificacion.innerText = calificacionPelicula;

    mifila.appendChild(tdid);
    mifila.appendChild(tdtitulo);
    mifila.appendChild(tdcalificacion);
    mifila.id=contador;
    

    mifila.addEventListener('mouseover', function(){
        mostrarImagen(this.id);
    });

    tablaPeliculas.appendChild(mifila);
    
    
    let imgActual = document.getElementById("imagenActual");
    imgActual.src = lista [contador-1];
}



function eliminar(){
    //seleccion de contenedor
    let contenedorPeliculas = document.querySelector('.contenedorPeliculas');
    //seleccion de elemento a eliminar
    let ultimo = contenedorPeliculas.lastChild;


    //eliminar el elemento
    contenedorPeliculas.removeChild(ultimo);


}


function mostrarImagen(id){
    let imgActual = document.getElementById("imagenActual");
    imgActual.src=lista[id-1];
}





