
<?php

include("connexion.php");
$con = mysqli_connect($server, $user, $contrasena, $db) or die("Error al conectar al servidor");

//Variables del formulario:
$todayh = getdate();
$d = $todayh['mday'];
$m = $todayh['mon'];
$y = $todayh['year'];
$h = $todayh['hours'];
$min = $todayh['minutes'];

$email = $_POST['email'];
$telefono = $_POST['telf'];



$sql = "INSERT INTO Datos_Presupuesto
           VALUES ('{$d}/{$m}/{$y} {$h}:{$min}', '$email', '$telefono')";


$resultado = mysqli_query ($con, $sql) or die ("Error en el query databse");
mysqli_close($con);

//echo 'Parece que ha funcionado';




?>
