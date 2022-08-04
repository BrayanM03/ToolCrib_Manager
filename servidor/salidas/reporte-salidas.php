<?php

include '../database/conexion.php';


//require '../../vistas/vendor/autoload.php';
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\SpreadSheet;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use PhpOffice\PhpSpreadsheet\Style\Border;
use PhpOffice\PhpSpreadsheet\Style\Color;

//require '../../vendor/autoload.php';

 require_once '../../vendor/phpoffice/phpspreadsheet/samples/Bootstrap.php'; 
date_default_timezone_set("America/Matamoros");
session_start(); 

$nombre_del_usuario = $_SESSION["nombre"] . " ". $_SESSION["apellido"];
$año = date("Y");
$fecha_inicio = $_GET["inicio"];
$fecha_final = $_GET["fin"];
$sucursal = 1;
$count = 0;  
$fecha = date("Y-m-d");
    

        //Creamos objeto de hoja de excel
        $spreadsheet = new SpreadSheet();
        $spreadsheet->getProperties()->setCreator($nombre_del_usuario)->setTitle("Primer excel");

        //ITERACIONES
      
            
            //Esablecemos y obtenemos la primera hoja activa -- 

            $spreadsheet->createSheet();
            
            $spreadsheet->setActiveSheetIndex(0);
            $hoja_activa = $spreadsheet->getActiveSheet();
            $hoja_activa->setTitle("Reporte " . $fecha);

            //$categoria = 'computadorascat';

            $arreglo = traerDetalles($con, $fecha_inicio, $fecha_final, $sucursal);
            echo json_encode($arreglo, JSON_UNESCAPED_UNICODE);
          
            $total_ingresos_efectivo = 0;
            
            $cantidad_resultado = count($arreglo);

             //Establecemos cabezera del reporte
           //Combinar y centrar
           $hoja_activa->mergeCells("A1:B1");
           $hoja_activa->mergeCells("C1:H1");
           $hoja_activa->mergeCells("I1:J1");
           $hoja_activa->setCellValue('C1', 'Reporte de salidas ToolCrib --- fecha: ' . $fecha);
           $hoja_activa->getStyle('C1')->getFont()->setBold(true);
           $hoja_activa->getStyle('C1')->getFont()->setSize(16);
           $hoja_activa->getRowDimension('1')->setRowHeight(50);
           $hoja_activa->getStyle('A1')->getAlignment()->setHorizontal('center');
           $hoja_activa->getStyle('A1')->getAlignment()->setVertical('center');
           $hoja_activa->getStyle('C1')->getAlignment()->setHorizontal('center');
           $hoja_activa->getStyle('C1')->getAlignment()->setVertical('center');

               //Establecer logos
           $drawing = new \PhpOffice\PhpSpreadsheet\Worksheet\Drawing();
           $drawing->setName('LogoPSC');
           $drawing->setDescription('Logo');
           $drawing->setPath('../../img/logo.jpg'); // put your path and image here
           $drawing->setCoordinates('A1');
           $drawing->setOffsetX(20);
           $drawing->setWidth(80);
           $drawing->setHeight(63);
           $drawing->setWorksheet($hoja_activa);
           
           $drawingOxxo_logo = new \PhpOffice\PhpSpreadsheet\Worksheet\Drawing();
           $drawingOxxo_logo->setName('LogoPSC');
           $drawingOxxo_logo->setDescription('Logo');
           $drawingOxxo_logo->setPath('../../img/logo.jpg'); // put your path and image here
           $drawingOxxo_logo->setCoordinates('I1');
           $drawingOxxo_logo->setOffsetX(20);
           $drawingOxxo_logo->setWidth(120);
           $drawingOxxo_logo->setHeight(63);
           $drawingOxxo_logo->setWorksheet($hoja_activa);
        

           //Validamos si se encontraron registros en la tabla, se valida 
   
 
            $hoja_activa->getColumnDimension('A')->setWidth(5);
            $hoja_activa->setCellValue('A3', '#');
            $hoja_activa->getColumnDimension('B')->setWidth(15);
            $hoja_activa->setCellValue('B3', 'Codigo');
            $hoja_activa->getColumnDimension('C')->setWidth(45);
            $hoja_activa->setCellValue('C3', 'Descripcion');
            $hoja_activa->getColumnDimension('D')->setWidth(10);
            $hoja_activa->setCellValue('D3', 'Ticket');
         //   $columnFilter = $autofilter->getColumn('D');
            $hoja_activa->getColumnDimension('E')->setWidth(10);
            $hoja_activa->setCellValue('E3', 'Cantidad requerida');
            $hoja_activa->getColumnDimension('F')->setWidth(17);
            $hoja_activa->setCellValue('F3', 'Costo');
            $hoja_activa->getColumnDimension('G')->setWidth(17);
            $hoja_activa->setCellValue('G3', 'Area');
            $hoja_activa->getColumnDimension('H')->setWidth(25);
            $hoja_activa->setCellValue('H3', 'Locación');
            $hoja_activa->getColumnDimension('I')->setWidth(20);
            $hoja_activa->setCellValue('I3', 'Categoria');
            $hoja_activa->getColumnDimension('J')->setWidth(20);
            $hoja_activa->setCellValue('J3', 'Fecha');
            $hoja_activa->getColumnDimension('K')->setWidth(20);
            $hoja_activa->setCellValue('K3', 'Hora');
            $hoja_activa->getColumnDimension('L')->setWidth(28);
            $hoja_activa->setCellValue('L3', 'Proveedor');
            $hoja_activa->getColumnDimension('M')->setWidth(20);
            $hoja_activa->setCellValue('M3', 'Empleado que solicita');
            $hoja_activa->getStyle('A3:M3')->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)->getStartColor()->setRGB('007bcc');
            $hoja_activa->getStyle('A3:M3')->getFont()->getColor()->setARGB(\PhpOffice\PhpSpreadsheet\Style\Color::COLOR_WHITE);
            $hoja_activa->getStyle('A3:M3')->getFont()->setBold(true);
            $hoja_activa->getRowDimension('3')->setRowHeight(20);

            

            if($cantidad_resultado == 0){
                
                $hoja_activa->getRowDimension('4')->setRowHeight(28);
                $hoja_activa->getStyle('A4:M4')->getAlignment()->setHorizontal('center');
                $hoja_activa->getStyle('A4:M4')->getAlignment()->setVertical('center');
                $hoja_activa->mergeCells("A4:M4");
                $hoja_activa->setCellValue('A4', 'Sin datos de los ingresos');
            }else{
                $i = 4;
                while ($row = array_shift($arreglo)) {
                    $hoja_activa->setCellValue('A'.$i, $i-3);
                    $hoja_activa->setCellValue('B'.$i, $row['codigo']);
                    $hoja_activa->setCellValue('C'.$i, $row['descripcion']);
                    $hoja_activa->setCellValue('D'.$i, $row['nombre']);
                    $hoja_activa->setCellValue('E'.$i, $row['cantidad']);
                    $hoja_activa->setCellValue('F'.$i, $row['costo']);
                    $hoja_activa->setCellValue('G'.$i, $row['area']);
                    $hoja_activa->setCellValue('H'.$i, $row['locacion']);
                    $hoja_activa->setCellValue('I'.$i, $row['categoria']);
                    $hoja_activa->setCellValue('J'.$i, $row['fecha']);
                    $hoja_activa->setCellValue('K'.$i, $row['hora']);
                    $hoja_activa->setCellValue('L'.$i, $row['estatus']);
                    $hoja_activa->setCellValue('M'.$i, $row['no_empleado']);
                    $i++;
                }

            }
           
           
        
            /* $count++; */ 
           
        
       

      
        

        /* header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        header('Content-Disposition: attachment;filename="Reporte de '.$fecha .'.xlsx"');
        header('Cache-Control: max-age=0'); */

        $writer = IOFactory::createWriter($spreadsheet, 'Xlsx');
        
        $writer->save('php://output');

    
        //Funcion que traera los datos de la base de datos
        function Consulta($con, $sucursal){
           
            $consulta = "SELECT COUNT(*) FROM inventario WHERE sucursal = ?";
            $res = $con->prepare($consulta);
            $res->execute([$sucursal]);
            $total = $res->fetchColumn();

            if($total > 0){
                $consulta = "SELECT * FROM inventario WHERE sucursal = ?";
                $res = $con->prepare($consulta);
                $res->execute([$sucursal]);

                  while ($row = $res->fetch()) {
                        $data[] = $row;

                    }
                return $data;
            }else{
                return array();
            }
            
        }

        function traerDetalles($con, $fecha_inicio, $fecha_fin){
            $consulta = "SELECT COUNT(*) FROM `detalle_salida` INNER JOIN salidas ON detalle_salida.salida_id = salidas.id INNER JOIN inventario ON detalle_salida.producto_id = inventario.id WHERE salidas.fecha BETWEEN ? AND ?";
            $res = $con->prepare($consulta);
            $res->execute([$fecha_inicio, $fecha_fin]);
            $total = $res->fetchColumn();

            if($total > 0){
                $consulta = "SELECT inventario.codigo, detalle_salida.concepto, salidas.nombre,  inventario.costo, detalle_salida.cantidad, inventario.area, inventario.locacion, inventario.categoria, salidas.fecha, salidas.hora, salidas.no_empleado FROM `detalle_salida` INNER JOIN salidas ON detalle_salida.salida_id = salidas.id INNER JOIN inventario ON detalle_salida.producto_id = inventario.id WHERE salidas.fecha BETWEEN ? AND ?";
                $res = $con->prepare($consulta);
                $res->execute([$fecha_inicio, $fecha_fin]);

                  while ($row = $res->fetch()) {
                        $data[] = $row;

                    }
                return $data;
            }else{
                return array();
            } 
        }

     

    

       
        //Funcion que emulara el get_result-----------------*
        function Arreglo_Get_Result( $Statement ) {
            $RESULT = array();
            $Statement->store_result();
            for ( $i = 0; $i < $Statement->num_rows; $i++ ) {
                $Metadata = $Statement->result_metadata();
                $PARAMS = array();
                while ( $Field = $Metadata->fetch_field() ) {
                    $PARAMS[] = &$RESULT[ $i ][ $Field->name ];
                }
                call_user_func_array( array( $Statement, 'bind_result' ), $PARAMS );
                $Statement->fetch();
            }
            return $RESULT;
        }

   ?>