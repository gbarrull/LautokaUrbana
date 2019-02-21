<?php
    if ($_REQUEST["pMenu"] != ""){
        setcookie("cookie_menu", (String) $_REQUEST["pMenu"], time() + 3600);
        setcookie("cookie_preu", (String) $_REQUEST["pPreu"], time() + 3600);
        setcookie("cookie_numeromenu", (String) $_POST["tMenu"], time() + 3600);
        setcookie("cookie_numeropersonas", (String) $_POST["nPersonas"], time() + 3600);
        setcookie("cookie_nciudad", (String) $_POST["tCiudad"], time() + 3600);
        setcookie("cookie_tfecha", (String) $_POST["nFecha"], time() + 3600);
        setcookie("cookie_nRegalo", (String) $_POST["tRegalo"], time() + 3600);
        echo "DINS DEL IF<br>";
    }

    //aqui si que se muestra esta variable en la web, el problema es entrar esta misma variable dentro del stripe...
    echo ($_COOKIE["cookie_menu"]);
    echo ($_COOKIE["cookie_preu"]);
    //echo ($_COOKIE["cookie_numeromenu"]);
    //echo ($_COOKIE["cookie_numeropersonas"]);
    //echo ($_COOKIE["cookie_nciudad"]);
    //echo ($_COOKIE["cookie_tfecha"]);
    //echo ($_COOKIE["cookie_nRegalo"]);
    echo "---";


?>

