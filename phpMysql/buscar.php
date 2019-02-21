
<?php

include("connexion.php");
$con = mysqli_connect($server, $user, $contrasena, $db) or die("Error al conectar al servidor");
$con->set_charset('UTF-8');

//pre-tratamiento de datos

    $m2 = $_POST['metros'];
    $wc = $_POST['wc'];
    $bide = $_POST['bide'];
    $mueble = $_POST['mueble'];
    $griferia = $_POST['griferia'];
    $duba = $_POST['duba'];





// SQL

    //      WC
    $productosWC = array();

    // $statement es la variable de la consulta y en la siguiente la ejecuta
    $statementWC = $con->prepare("SELECT * FROM precios WHERE id = '$wc'");
    $statementWC->execute();
    // guardamos el resultado de la consulta
    $resultadoWC = $statementWC->get_result();

    // se guarda la fila que se esta mirando en ese momento en $row, y cada $row se va almacenando en $productos[] como un vector/matriz grande
    while($rowWC = $resultadoWC->fetch_assoc()) $productosWC[] = $rowWC;

    //      BIDE
    $productosDB = array();

    // $statement es la variable de la consulta y en la siguiente la ejecuta
    $statementDB = $con->prepare("SELECT * FROM precios WHERE id = '$duba'");
    $statementDB->execute();
    // guardamos el resultado de la consulta
    $resultadoDB = $statementDB->get_result();

    // se guarda la fila que se esta mirando en ese momento en $row, y cada $row se va almacenando en $productos[] como un vector/matriz grande
    while($rowDB = $resultadoDB->fetch_assoc()) $productosDB[] = $rowDB;




mysqli_close($con);

//var_dump($productos);
//die();

?>
