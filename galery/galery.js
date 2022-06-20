AOS.init();

 const sectin_carrousel = document.getElementById("section_carrousel");
 const carrousel = document.getElementById("carrousel");
 let fila = document.getElementById("columna")

const scroll = window.scrollX;


let boton_izquierdo = document.getElementById("flecha-izquierda")
boton_izquierdo.addEventListener("click",izquierda);
let boton_derecho = document.getElementById("flecha-derecha");
boton_derecho.addEventListener("click",derecha);

function derecha(e) {
    e.preventDefault();
    console.log(scroll.value)
    fila.scrollLeft += fila.offsetWidth;
}
function izquierda(e) {
    e.preventDefault();
     console.log(scroll.value)
     fila.scrollLeft -= fila.offsetWidth;
    
 }