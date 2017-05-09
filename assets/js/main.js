// imagenes borrar
var divImagen = document.getElementsByClassName('pandas')[0];
var span = document.getElementsByClassName("close");
var sectionImgs = document.getElementsByClassName("sectionImg")[0];

for (var i = 0; i < span.length; i++){
  //span[i] = document.getElementsByClassName("close")[0];
  span[i].addEventListener("click",cerrar);
}

function cerrar() {
  this.parentNode.style.display="none";
}

// textos y botones
var botonOrigen = document.getElementById("botonOrigen");
var textoOrigen = document.getElementById('textoOrigen');

var botonHistoria = document.getElementById("botonHistoria");
var textoHistoria = document.getElementById('textoHistoria');

botonOrigen.addEventListener("click", mostrarO);
botonOrigen.addEventListener("dblclick", ocultarO);
 
botonHistoria.addEventListener("click", mostrarH);
botonHistoria.addEventListener("dblclick", ocultarH);

function mostrarO() {
  textoOrigen.style.visibility = "visible";
}
function ocultarO() {
  textoOrigen.style.visibility = "hidden";
}

function mostrarH() {
  textoHistoria.style.visibility = "visible";
}

function ocultarH() {
  textoHistoria.style.visibility = "hidden";
}

// Restaurar imagenes
var botonRestaura = document.getElementById('botonRestaurar');
botonRestaura.addEventListener("click", restaurarImagenes);

function restaurarImagenes() {
  for(var i=0; i < span.length; i++){
    span[i].parentNode.style.display = "flex";
  }
}




