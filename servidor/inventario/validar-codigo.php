<?php
if ($_POST) {
    include "../database/conexion.php";
    date_default_timezone_set('America/Matamoros');

    if(empty($_POST['modo'])){
        $codigo = $_POST['codigo'];
   
        $insert = "SELECT COUNT(*) FROM inventario WHERE codigo = ?";
        $resp = $con->prepare($insert);
        $resp->execute([$codigo]);
        $total = $resp->fetchColumn();
        $resp->closeCursor();
    
        if($total > 0) {
    
            $response = array("status"=>false, "mensj"=>"Ya existe ese codigo");
            echo json_encode($response, JSON_UNESCAPED_UNICODE);
        }else if($total == 0) {
            $response = array("status"=>true, "mensj"=>"Codigo disponible");
            echo json_encode($response, JSON_UNESCAPED_UNICODE);
        }
    }else{

        //Validando un codigo de un producto en modo de edicion
        $codigo = $_POST['codigo'];
        $codigo_actual = $_POST['codigo_actual'];	//Codigo actual del producto
   
        $insert = "SELECT COUNT(*) FROM inventario WHERE codigo = ? AND codigo != ?";
        $resp = $con->prepare($insert);
        $resp->execute([$codigo, $codigo_actual]);
        $total = $resp->fetchColumn();
        $resp->closeCursor();
    
        if($total > 0) {
    
            $response = array("status"=>false, "mensj"=>"Ya existe ese codigo");
            echo json_encode($response, JSON_UNESCAPED_UNICODE);
        }else if($total == 0) {
            $response = array("status"=>true, "mensj"=>"Codigo disponible");
            echo json_encode($response, JSON_UNESCAPED_UNICODE);
        }
    }

  



}

?>