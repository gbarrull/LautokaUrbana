<?php
$email = $_POST['newsletter'];
$procedencia= "index";
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
    $sql = "INSERT INTO Newsletter (fecha, Procedencia, email)
           VALUES ('{$d}/{$m}/{$y} {$h}:{$min}', '$procedencia', '$email')";
    // use exec() because no results are returned
    $conn->exec($sql);
    }
catch(PDOException $e)
    {    }
//$conn = null;
//echo "{$email}"
header('Location: ../index.html');
?>