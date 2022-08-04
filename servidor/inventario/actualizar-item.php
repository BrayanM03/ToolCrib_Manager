<?php
if ($_POST) {
    include "../database/conexion.php";
    date_default_timezone_set('America/Matamoros');

    $id = $_POST['id'];
    $proveedor = $_POST['proveedor'];
    $locacion= $_POST['locacion'];
    $costo = $_POST['costo'];
    $codigo = $_POST['codigo'];
    $locacion = $_POST['locacion'];
    $cantidad = $_POST['cantidad'];
    $stock_minimo = $_POST["stock_minimo"];
    $stock_maximo = $_POST["stock_maximo"];
    $categoria = $_POST['categoria'];
    $descripcion = $_POST['descripcion'];
    $sucursal = $_POST['sucursal'];
    $area=  $_POST['area'];
    /* $fecha = date('Y-m-d');
    $hora = date('H:i:s'); */

    $traer_img_name  = "SELECT img FROM inventario WHERE id = ?";
    $resp = $con->prepare($traer_img_name);
    $resp->execute([$id]);

    while ($row = $resp->fetch()) {
        if($row['img'] == "NA"){
            $img = "NA";
            $cod_img = "NA";
        }else{
            $img = $row['img'];
            $cod_img = $codigo;
            rename("../../img/productos/" . $img . ".jpg", "../../img/productos/" . $codigo . ".jpg");
        }
        
       
    }
    
    $fecha_t = new DateTime();
    $timestamp = $fecha_t->getTimestamp();


    $insert = "UPDATE inventario SET proveedor = ?,
                                       codigo = ?,
                                       costo = ?,
                                       stock = ?,
                                       minimo = ?,
                                       maximo = ?,
                                       area = ?,
                                       sucursal = ?,
                                       locacion =?,
                                       categoria=?,
                                       descripcion=?,
                                       img=?,
                                       timestamp =? WHERE id= ?";
    $resp = $con->prepare($insert);
    $resp->execute([$proveedor, $codigo, $costo, $cantidad, $stock_minimo, $stock_maximo, $area, $sucursal, $locacion, $categoria, $descripcion, $cod_img, $timestamp, $id]);
    $resp->closeCursor();

    

    $response = array("status"=>true, "mensj"=>"La refacción se actualizó correctamente");
    echo json_encode($response, JSON_UNESCAPED_UNICODE);


}

?>