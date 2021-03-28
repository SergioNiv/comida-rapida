//menu de navegación responsive 

var btnMenuOpen = document.getElementById("header--button-open"),
    btnMenuClose = document.getElementById("header--button-close"),
    menuResponsive = document.getElementById("header--navegation");
    menuEnlaces = document.getElementById("header--navegation-list");

    //click abrir
    function activar(){
        menuResponsive.style.transitionDelay = "0.0s";
        menuResponsive.classList.add("activar");

    }
    //click cerrar
    function desactivar(){
        menuResponsive.classList.remove("activar");

    }
    //cerrar menú con elementos enlace
    function enlaces(){
        menuResponsive.style.transitionDelay = "0.4s"; 
        menuResponsive.classList.remove("activar");

    }
    btnMenuOpen.addEventListener("click", activar);
    btnMenuClose.addEventListener("click", desactivar);
    menuEnlaces.addEventListener("click", enlaces);
    
    //slider producto    
    var contenedor = document.querySelector(".primary--container-father"),
        btnIzquierdo = document.getElementById("main--btn-left"),
        btnDerecho = document.getElementById("main--btn-rigth");

        btnDerecho.addEventListener("click", function(){
            contenedor.scrollLeft += contenedor.offsetWidth;//offsetWidth -> indica el tamaño total del contenedor
        });

        btnIzquierdo.addEventListener("click", function(){
            contenedor.scrollLeft -= contenedor.offsetWidth;
        });

// VALIDACION DE FORMULARIO
var formulario = document.getElementById("formulario");

     function validar(e) {
          var  inputNombre = document.getElementById("nombre"),
               inputEmail = document.getElementById("email"),
               inpuComents = document.getElementById("comentarios"),
               alertSuccess = document.getElementById("alertSuccess"),
               alertError = document.getElementById("alertError");

          if (inputNombre.value == 0 || inputEmail.value == 0 || inpuComents.value == 0) {
               e.preventDefault();
               alertError.classList.remove("hide");
               alertError.classList.add("show");

               setTimeout(function() {
                    alertError.classList.remove("show");
                    alertError.classList.add("hide"); 
               }, 2000);     
          }else{
               e.preventDefault();
               alertSuccess.classList.remove("hide");
               alertSuccess.classList.add("show");

               setTimeout(function() {
                    alertSuccess.classList.remove("show");
                    alertSuccess.classList.add("hide"); 
               }, 2000);               
               inputNombre.value = "";
               inputEmail.value = "";
               inpuComents.value = "";
          }
     }


// Eventos del formulario
formulario.addEventListener("submit", validar);