 const carrousel = document.querySelector(".carrousel");

 const fila = document.querySelector(".columnas");

 const camisetas = document.querySelectorAll(".camisetas")

 const scrollx = window.scrollX;
 
 const flecha_izquierda = document.getElementById("boton_izquierdo").addEventListener("click",listen_izquierda);

 const flecha_derecha = document.getElementById("boton_derecho").addEventListener("click",listen_derecha);


function listen_derecha(e) {
    event.preventDefault();
    console.log(scrollx.value)
    fila.scrollLeft += fila.offsetWidth;

    
}

 function listen_izquierda(e){
    event.preventDefault();
    console.log(scrollx.value)
    fila.scrollLeft -= fila.offsetWidth;

 }
