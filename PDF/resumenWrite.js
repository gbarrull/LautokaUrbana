/*================================================================================
FUNCIÓN TRATO DATOS LOCAL STORAGE.

Todas las variables utilizadas:
    tipoMenu
    Fecha_cena: se coge directamente del calendar
    numPersonas
    ciudad
    regalo
    precio


==================================================================================*/

function resumenWrite(){

// TIPO MENÚ

    TipoMenu.innerHTML = "Menú "+menuprueba;

    //FECHA CENA
    Fecha_cena.innerHTML = localStorage.getItem("fecha_cena");

    // Nº PERSONAS
    var numPersonas = localStorage.getItem("personas");
    NPersonas.innerHTML = "Para "+numPersonas+" personas";

    // CIUDAD
    var ciudad = localStorage.getItem("ciudad");
    if(Ciudad_seleccionada !== null) {
        Ciudad_seleccionada.innerHTML = ciudad;
    }

    // REGALO
    var regalo = "false";
    regalo = localStorage.getItem("regalo");
    if (regalo == "true"){
        Regalo_seleccionado.innerHTML = "Es un regalo"
    }else {
        console.log("No es un regalo")
    }

    // PRECIO
    PrecioFinal.innerHTML = preu + " €";

}







