<div class="row justify-content-center">
    <div class="col-12 col-md-8">
        <div class="card">
            <div class="card-header text-center">
                <!-- <div class="row">
                    <div class="col-12 col-md-1" id="backbtn_area">
                        <div class="btn" onclick="RegresarAtras(1)">
                            <i class="fa-solid fa-circle-left fa-2xl icono" style="color:#E5BE01"></i>
                        </div>

                    </div>
                    <div class="col-12 col-md-11">
                        <h5 class="card-title mb-0" id="title-card">Ingresa los datos del producto</h5>
                    </div>
                </div> -->


            </div>
            <div class="card-body" id="card-body">


                <div class="row mb-3">


                    <div class="col-12 col-md-6">
                        <label for="sucursal">Planta</label>
                        <!-- <select name="proveedor" class="form-control" id="proveedor"></select> -->
                        <select name="sucursal" class="form-control" id="sucursal" disabled>
                            <option value="1">Sliding de México</option>
                        </select>

                    </div>
                </div>

                

                <div class="row mb-3">

                    

                    <div class="col-12 col-md-6">
                        <label for="date">Fecha</label>
                        <!-- <select name="proveedor" class="form-control" id="proveedor"></select> -->
                        <input type="date" class="form-control" id="fecha" value="<?php echo date('Y-m-d') ?>">

                    </div>



                </div>



                <div class="row mb-3">
                    <div class="col-12 col-md-6">
                        <label for="codigo">Codigo</label>
                        <!-- <select name="proveedor" class="form-control" id="proveedor"></select> -->
                        <select name="codigo" class="form-control" id="codigo">
                        </select>

                    </div>

                    <div class="col-12 col-md-4">
                        <label for="cantidad"><b>Cantidad:</b></label>
                        <input type="number" placeholder="0" id="cantidad" name="cantidad" class="form-control">
                        <div class="valid-feedback" id="feedback">
                            Looks good!
                        </div>
                    </div>

                    <div class="col-12 col-md-2 text-start">
                        <div class="btn btn-primary" valid="false" id="btn-add" style="margin-top:20px" onclick="agregarPreSalida()">Agregar</div>
                    </div>


                </div>

                <div class="row mb-5">

                    <div class="col-12 col-md-8">

                        <div class="producto-data" style="margin-top:22px;border: 1px dashed #c3c3c3; padding:15px; border-radius: 8px">
                            <div class="row mb-2">
                                <div class="col-12 col-sm-4"><b>Codigo:</b></br>
                                    <span id="codigo-data"></span>
                                </div>

                                <div class="col-12 col-sm-4"><b>Proveedor:</b></br>
                                    <span id="proveedor-data"></span>
                                </div>

                                <div class="col-12 col-sm-4"><b>Stock:</b></br>
                                    <span id="stock-data" class="text-center"></span>
                                </div>

                               
                                    <input id="producto_id" style="display:none">
                                

                            </div>

                            <div class="row">
                                <div class="col-12 col-sm-4"><b>Locación:</b></br>
                                    <span id="locacion-data"></span>
                                </div>

                                <div class="col-12 col-sm-4"><b>Categoria:</b></br>
                                    <span id="categoria-data"></span>
                                </div>

                                <div class="col-12 col-sm-4"><b>Descripción:</b></br>
                                    <span id="descripcion-data" class="text-center"></span>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div class="col-12 col-md-4">
                        <label for=""><b>Imagen</b></label>
                        <div class="img-container">
                            <img src="img/productos/NA.jpg" id="img-prod" class="img-fluid" width="120" height="120" alt="Responsive image" style="border:1px solid #c3c3c3; border-radius: 8px;">
                        </div>
                    </div>
                </div>

                <hr class="mb-5">

                <div class="row mb-3">
                    <div class="col-12 col-md-12">
                        <table id="example" class="table table-hover nowrap" style="width:100%">
                            <!-- <thead>
                                                <tr>
                                                    <th>Subscriber ID</th>
                                                    <th>Install Location</th>
                                                    <th>Subscriber Name</th>
                                                    <th>some data</th>
                                                </tr>
                                            </thead> -->
                        </table>
                    </div>
                </div>
                

                <div class="row mb-3 justify-content-center">
               
                    <div class="col-12 col-md-4 text-center">
                        <div class="btn btn-success" onclick="registarEntrada()">Registrar entrada</div>
                    </div>
                </div>



                
            </div>
        </div>
    </div>
</div>