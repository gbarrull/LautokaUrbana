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

function resumenjs(){
    // TIPO MENÚ
    var tipoMenu = localStorage.getItem("menu");
    switch (tipoMenu){
        case "1":
            tipoMenu = "Menú BÁSICO";
        break;

        case "2":
            tipoMenu = "Menú YUMMY";
        break;
        case "3":
            tipoMenu = "Menú GOURMET";
        break;
        // default es lo mismo que else
        default: tipoMenu = "Error";
    }
    TipoMenu.innerHTML = tipoMenu;
        //variable global para enviar a stripe:
        menuprueba = tipoMenu;

    // FECHA CENA
    Fecha_cena.innerHTML = localStorage.getItem("fecha_cena");

    // Nº PERSONAS
    var numPersonas = localStorage.getItem("personas");
    NPersonas.innerHTML = "Para "+numPersonas+" personas";

    // CIUDAD
    var ciudad = localStorage.getItem("ciudad");
    Ciudad_seleccionada.innerHTML = ciudad;

    // REGALO
    var regalo = "false";
    regalo = localStorage.getItem("regalo");
    if (regalo == "true"){
        Regalo_seleccionado.innerHTML = "Es un regalo"
    }else {
        console.log("No es un regalo")
    }

    // PRECIO
    var menu = localStorage.getItem("menu");
    var personas = localStorage.getItem("personas");
    var precio;
    if (menu == "1"){
        if (personas == "2" || personas == "3" || personas == "4"){
            precio = 30*personas;
            console.log(precio);
        }else if(personas == "+4"){
            precio = "no determinado";
            console.log("+ de 4 persones");
        }else{
            console.log("else");
        }
    }else if (menu == "2"){
        if (personas == "2" || personas == "3" || personas == "4"){
            precio = 45*personas;
            console.log(precio);
        }else if(personas == "+4"){
            precio = "no determinado";
            console.log("+ de 4 persones");
        }else{
            console.log("else");
        }
    }else if (menu == "3"){
        if (personas == "2" || personas == "3" || personas == "4"){
            precio = 65*personas;
            console.log(precio);
        }else if(personas == "+4"){
            precio = "no determinado";
            console.log("+ de 4 persones");
        }else{
            console.log("else");
        }
    }else{
        console.log("Selecciona Menu");
    }

}


resumenjs();



















