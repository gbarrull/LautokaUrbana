/*================================================================================
LOCAL STORAGE -> OPCIONES ESCOGIDAS
==================================================================================*/

function storageIndex (menu) {
    localStorage.setItem("menu", menu);
    localStorage.setItem("metros", document.getElementById("metros" + menu).value);
    localStorage.setItem("wc", document.getElementById("wc" + menu).value);
    localStorage.setItem("bide", document.getElementById("bide" + menu).value);
    localStorage.setItem("mueble", document.getElementById("mueble" + menu).value);
    localStorage.setItem("griferia", document.getElementById("griferia" + menu).value);
    localStorage.setItem("moderno", document.getElementById("moderno" + menu).checked);
    localStorage.setItem("clasico", document.getElementById("clasico" + menu).checked);
    localStorage.setItem("modernoYclasico", document.getElementById("modernoYclasico" + menu).checked);

    var metros = localStorage.getItem("metros");
    var wc = localStorage.getItem("wc");
    var bide = localStorage.getItem("bide");
    var mueble = localStorage.getItem("mueble");
    var griferia = localStorage.getItem("griferia");
    var moderno = localStorage.getItem("moderno");
    var clasico = localStorage.getItem("clasico");
    var modernoYclasico = localStorage.getItem("modernoYclasico");


    console.log(menu);
    console.log("metros", metros);
    console.log("wc", wc);
    console.log("bide", bide);
    console.log("mueble", mueble);
    console.log("griferia", griferia);
    console.log("moderno", moderno);
    console.log("clasico", clasico);
    console.log("modernoYclasico", modernoYclasico);

    if (menu === 1){
        console.log("1");
        document.getElementById("tablaCaract").style.display = "none";
        document.getElementById("pdf").style.display = "block";
        document.getElementById("pdf").src = "img/pdf/prueba2.pdf";
        document.getElementById("titulo1").style.display = "block";
        document.getElementById("foto1").style.display = "inline-block";
        document.getElementById("foto2").style.display = "inline-block";
        document.getElementById("foto3").style.display = "inline-block";
        document.getElementById("foto4").style.display = "inline-block";
        document.getElementById("foto1").src = "img/fotoTipo/1.jpg";
        document.getElementById("foto2").src = "img/fotoTipo/2.jpg";
        document.getElementById("foto3").src = "img/fotoTipo/3.jpg";
        document.getElementById("foto4").src = "img/fotoTipo/3.jpg";
    }else if (menu === 2){
        console.log("2");
        if(wc === "suelo" && bide === "suelo" && mueble === "estandar" && griferia === "empotrada" && moderno === "false" && clasico === "false" && modernoYclasico === "false"){

            document.getElementById("tablaCaract").style.display = "none";
            document.getElementById("pdf").style.display = "block";
            document.getElementById("pdf").src = "img/pdf/prueba2.pdf";
            document.getElementById("titulo1").style.display = "block";
            document.getElementById("foto1").style.display = "inline-block";
            document.getElementById("foto2").style.display = "inline-block";
            document.getElementById("foto3").style.display = "inline-block";
            document.getElementById("foto4").style.display = "inline-block";
            document.getElementById("foto1").src = "img/fotoTipo/1.jpg";
            document.getElementById("foto2").src = "img/fotoTipo/2.jpg";
            document.getElementById("foto3").src = "img/fotoTipo/3.jpg";
            document.getElementById("foto4").src = "img/fotoTipo/3.jpg";

        }else if(wc === "suelo" && bide === "suelo" && mueble === "estandar" && griferia === "empotrada" && moderno === false && clasico === false && modernoYclasico === false){

        }//poner todos los demás casos


    }else if (menu === 3){
        console.log("3");
    }else{

    }


}

//window.location.href='index.html';

