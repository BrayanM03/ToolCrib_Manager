<?php
if ($_POST) {
    include "../database/conexion.php";
    date_default_timezone_set('America/Matamoros');



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
    $estatus = "Activo";
    $fecha = date('Y-m-d');
    $hora = date('H:i:s');
    $imagen = "NA";

    $insert = "INSERT INTO inventario(id,
                                       proveedor,
                                       codigo,
                                       costo,
                                       stock,
                                       minimo,
                                       maximo,
                                       estatus,
                                       sucursal,
                                       locacion,
                                       categoria,
                                       descripcion,
                                       fecha,
                                       hora,
                                       img)VALUES(null,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    $resp = $con->prepare($insert);
    $resp->execute([$proveedor, $codigo, $costo, $cantidad, $stock_minimo, $stock_maximo, $estatus, $sucursal, $locacion, $categoria, $descripcion, $fecha, $hora, $imagen]);
    $resp->closeCursor();
    $last_id = $con->lastInsertId();

    $response = array("status"=>true, "mensj"=>"El registro se insertó correctamente", "id_nuevo"=> $last_id);
    echo json_encode($response, JSON_UNESCAPED_UNICODE);


}

?>