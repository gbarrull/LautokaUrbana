/*================================================================================



==================================================================================*/



<!--Hover para mostrar las fotos del menu-->
function precioMenu1(){

    // Seleccionamos la opción del menu que se selecciona (barato, mediano, caro)
    var option = localStorage.getItem("option");
    console.log("option: ", option);

    //HOVER DEL WC:
    var wc = document.getElementById("wc" + option);
    var wcIndex = wc.selectedIndex;


    if(option === "1"){
        if (wcIndex === 0){
            document.getElementById("fotoWC1").src = "img/fotoTipo/1.jpg";
        }else if (wcIndex === 1){
            document.getElementById("fotoWC1").src = "img/fotoTipo/2.jpg";
        }
    }else if(option === "2"){
        if (wcIndex === 0){
            document.getElementById("fotoWC2").src = "img/fotoTipo/1.jpg";
        }else if (wcIndex === 1){
            document.getElementById("fotoWC2").src = "img/fotoTipo/2.jpg";
        }
    }else if(option === "3"){
    if (wcIndex === 0){
        document.getElementById("fotoWC3").src = "img/fotoTipo/1.jpg";
    }else if (wcIndex === 1){
        document.getElementById("fotoWC3").src = "img/fotoTipo/2.jpg";
    }
    }

    console.log("wcIndex", wcIndex);


    //HOVER DEL BIDE:
    var bi = document.getElementById("bide" + option);
    var biIndex = bi.selectedIndex;


    //copiar el codigo del menu, de momento de aqui a bajo aun no funciona
    if (biIndex === 0){
        document.getElementById("fotoBI1").src = "img/fotoTipo/1.jpg";
    }else if (biIndex === 1){
        document.getElementById("fotoBI1").src = "img/fotoTipo/2.jpg";
    }

    console.log("biIndex", biIndex);

    //HOVER DEL MUEBLE:
    var mu = document.getElementById("mueble" + option);
    var muIndex = mu.selectedIndex;

    if (muIndex === 0){
        document.getElementsByName("fotoMU").src = "img/fotoTipo/1.jpg";
    }else if (muIndex === 1){
        document.getElementsByName("fotoMU").src = "img/fotoTipo/2.jpg";
    }

    console.log("muIndex", muIndex);


    //HOVER DE LA GRIFERÍA:
    var gr = document.getElementById("griferia" + option);
    var grIndex = gr.selectedIndex;

    if (grIndex === 0){
        document.getElementsByName("fotoGR").src = "img/fotoTipo/1.jpg";
    }else if (grIndex === 1){
        document.getElementsByName("fotoGR").src = "img/fotoTipo/2.jpg";
    }

    console.log("grIndex", grIndex);

    //HOVER DE LA DUCHA O BAÑERA:
    var db = document.getElementById("ducha" + option);
    var dbIndex = db.selectedIndex;

    if (dbIndex === 0){
        document.getElementsByName("fotoDB").src = "img/fotoTipo/1.jpg";
    }else if (dbIndex === 1){
        document.getElementsByName("fotoDB").src = "img/fotoTipo/2.jpg";
    }else if (dbIndex === 2){
        document.getElementsByName("fotoDB").src = "img/fotoTipo/3.jpg";
    }

    console.log("dbIndex", dbIndex);



    //jQuery que simula al hover. La primera función para cuando pasas el raton por encima y la segunda cuando lo sacas
    $(document).ready(function(){
        $("hoverDescripcion").hover(function(){
            $("hoverDescripcion img").css("display", "block");
        }, function(){
            $(this).css("display", "none");
        });
    });

}










