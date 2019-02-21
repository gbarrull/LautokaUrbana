<?php
$nombre = $_POST['nombre'];
$apellidos = $_POST['apellidos'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$servername = "qaah773.yummify.es";
$username = "qaah773";
$password = "LPeople1";
$dbname = "qaah773";
$todayh = getdate();
$d = $todayh['mday'];
$m = $todayh['mon'];
$y = $todayh['year'];
$h = $todayh['hours'];
$min = $todayh['minutes'];

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "INSERT INTO TEST_TABLA (fecha, nombre, apellidos, email, telefono)
           VALUES ('{$d}/{$m}/{$y} {$h}:{$min}', '$nombre', '$apellidos', '$email', '$telefono')";
    // use exec() because no results are returned
    $conn->exec($sql);
    }
catch(PDOException $e)
    {    }
$conn = null;
echo "<script>window.location = '../lo-sentimos.html'</script>"
?>