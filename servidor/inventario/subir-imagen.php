<?php

    include "../database/conexion.php";
    date_default_timezone_set('America/Matamoros');

    if($_FILES){
        $producto_id = $_GET['product_id'];
        $folder = "../../img/productos/";
        $folderFileCopy = $folder . basename($_FILES['file']['name']);

        if(move_uploaded_file($_FILES['file']['tmp_name'], $folderFileCopy)){

            $code = $_FILES['file']['name'];
            $codigo_sin_jpg = substr($code, 0, -4);
            $update_img = "UPDATE inventario SET img = ? WHERE codigo= ?";
            $resp = $con->prepare($update_img);
            $resp->execute([$codigo_sin_jpg , $codigo_sin_jpg ]);
            $resp->closeCursor();

            echo "Imagen subida correctamente";
           
        }else{
            echo "Error al subir la imagen";
        }
    }
    

   

?>