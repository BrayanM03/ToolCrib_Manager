<?php
$usuario = "root";
$pass = "";
try {
    $con = new PDO('mysql:host=localhost;dbname=toolcrip_manager;charset=utf8mb4', $usuario, $pass);
   
} catch (PDOException $e) {
    print "¡Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>