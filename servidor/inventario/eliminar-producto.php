<?php
if ($_POST) {
    session_start();
    include "../database/conexion.php";
    date_default_timezone_set('America/Matamoros');

    $id = $_POST['id'];
    $fecha = date('Y-m-d');
    $hora = date('H:i:s');
 
    $select = "SELECT * FROM inventario WHERE id = ?";
    $res = $con->prepare($select);
    $res->execute([$id]);
    

    while ($row = $res->fetch()) {
       
        $insert = "INSERT INTO eliminados (id, codigo, descripcion, precio, fecha, hora, usuario) VALUES (null, ?, ?, ?, ?, ?, ?)";
        $re = $con->prepare($insert);
        $re->execute([$row['codigo'], $row['descripcion'], $row['costo'], $fecha, $hora, $_SESSION['nombre']. " " .$_SESSION['apellido']]);
        $re->closeCursor();
    }
    $res->closeCursor();

    $insert = "DELETE FROM inventario WHERE id= ?";
    $resp = $con->prepare($insert);
    $resp->execute([$id]);
    $resp->closeCursor();



    $response = array("status"=>true, "mensj"=>"El inventario se borró correctamentge");
    echo json_encode($response, JSON_UNESCAPED_UNICODE);


}

?>