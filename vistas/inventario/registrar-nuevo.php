<div class="row justify-content-center">
    <div class="col-12 col-md-8">
        <div class="card">
            <div class="card-header text-center">
                <div class="row">
                    <div class="col-12 col-md-1" id="backbtn_area">
                        <div class="btn" onclick="RegresarAtras()">
                            <i class="fa-solid fa-circle-left fa-2xl icono" style="color:#E5BE01"></i>
                        </div>

                    </div>
                    <div class="col-12 col-md-11">
                        <h5 class="card-title mb-0" id="title-card">Ingresa los datos del producto</h5>
                    </div>
                </div>


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
                        <label for="codigo">Codigo</label>
                        <!-- <select name="proveedor" class="form-control" id="proveedor"></select> -->
                        <input name="codigo" class="form-control" id="codigo" placeholder="Escribe un codigo">
                        <div class="valid-feedback" id="feedback">
                            Looks good!
                        </div>
                    </div>

                    <div class="col-12 col-md-6">
                        <label for="proveedor">Proveedor</label>
                        <!-- <select name="proveedor" class="form-control" id="proveedor"></select> -->
                        <input name="proveedor" class="form-control" id="proveedor" placeholder="Escribe un proveedor">

                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-12 col-md-6">
                        <label for="costo">Costo</label>
                        <input class="form-control" placeholder="0.00" name="modelo" id="costo">
                    </div>

                    <div class="col-12 col-md-6">
                        <label for="cantidad">Cantidad</label>
                        <input class="form-control" type="number" placeholder="0" name="cantidad" id="cantidad">
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-12 col-md-6">
                        <label for="stock-minimo">Stock minimo</label>
                        <input class="form-control" type="number" placeholder="0" name="stock-minimo" id="stock-minimo">
                    </div>

                    <div class="col-12 col-md-6">
                        <label for="stock-maximo">Stock maximo</label>
                        <input class="form-control" type="number" placeholder="0" name="stock-maximo" id="stock-maximo">
                    </div>

                </div>

                <div class="row mb-3">
                    <div class="col-12 col-md-6">
                        <label for="locacion">Locación</label>
                        <input class="form-control" placeholder="Escribe una locación" name="locacion" id="locacion" type="text">
                    </div>
                    <div class="col-12 col-md-6">
                        <label for="categoria">Categoria</label>
                        <input class="form-control" placeholder="Escribe una categoria" name="categoria" id="categoria" type="text">
                    </div>
                </div>

                <div class="row mb-4">
                    <div class="col-12 col-md-12">
                        <label for="descripcion">Descripción</label>
                        <textarea class="form-control" placeholder="Escribe una descripción" name="descripcion" id="descripcion"></textarea>
                    </div>
                </div>

                

                <!-- <div class="row mb-4">
                    <label for="image">Imagen</label>
                
                        <div class="file-loading">
                            <input id="file-es" name="file-es[]" type="file">
                        </div>
                   
                </div> -->

                <div class="row mb-3">
                    <div class="col-12 col-md-6">
                        <div class="btn btn-success" onclick="agregarProducto()">Registrar</div>
                    </div>
                </div>



                <div class="row">
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
            </div>
        </div>
    </div>
</div>